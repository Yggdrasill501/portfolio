import { Container, Nav,} from "react-bootstrap"

export const NavBar = () => {
    return ( 
        <NavBar expand="lg">
            <Container>
                <NavBar.Brand href="#home">
                    <img src={''} alt="Logo"/>
                </NavBar.Brand>
                <NavBar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </NavBar.Toggle>
                <NavBar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </NavBar.Collapse>
            </Container>
        </NavBar>
    )
}