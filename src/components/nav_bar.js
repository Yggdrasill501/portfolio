import {useEffect, useState} from "react";
import {Container, Nav, Navbar, NavbarBrand, NavbarToggle} from "react-bootstrap";
import logo from "../assets/icons/logo.png";
import navIcon1 from "../assets/icons/nav-icon1.png";
import navIcon2 from "../assets/icons/nav-icon2.png";
import navIcon3 from "../assets/icons/nav-icon3.png";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (link) => {
        setActiveLink(link);
    }

    return ( 
        <NavBar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <NavbarBrand href="#home">
                    <img src={logo} alt="Logo"/>
                </NavbarBrand>
                <NavbarToggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </NavbarToggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icons">
                            <a href="#"><img src={navIcon1} alt="" /></a>
                            <a href="#"><img src={navIcon2} alt="" /></a>
                            <a href="#"><img src={navIcon3} alt="" /></a>
                        </div>
                    </span>
                    <button className="btn-main-offer" onClick={() => console.log('connect')}>
                        <span>
                            Let's Connect
                        </span>
                    </button>
                </Navbar.Collapse>
            </Container>
        </NavBar>
    )
}