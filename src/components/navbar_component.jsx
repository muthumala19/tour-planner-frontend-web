import './navbar_component.css'
import {Container, Image, Nav, Navbar} from "react-bootstrap";

export default function NavBarComponent() {
    return (
        <Navbar expand="lg" className="navbar-custom navbar-light navbar-fixed-top">
            <Container fluid>
                <Navbar.Brand href="#home" className={'ms-3'}><Image
                    src={require('../images/journeysync-high-resolution-logo-black-on-transparent-background .png')}
                    width={'200'}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-5 my-2 my-lg-1 ms-auto"
                        style={{maxHeight: '50vh', fontWeight: 'bold'}}
                        navbarScroll
                    >
                        <Nav.Link href="#home" className="me-5">Home</Nav.Link>
                        <Nav.Link href="#sign_up" className="me-5">Sign Up</Nav.Link>
                        <Nav.Link href="#about_us" className="me-5">About Us</Nav.Link>
                        <Nav.Link href="#contact_us" className="me-5">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
