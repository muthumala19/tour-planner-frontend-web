import './navbar_component.css'
import {Container, Image, Nav, Navbar} from "react-bootstrap";

export default function NavBarComponent({items}) {

    return (
        <Navbar expand="lg" className="navbar-custom navbar-light navbar-fixed-top">
            <Container fluid>
                <Navbar.Brand href="/" className={'ms-3'}><Image
                    src={require('../images/journeysync-high-resolution-logo-black-on-transparent-background .png')}
                    width={'200'}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-5 my-2 my-lg-1 ms-auto"
                        style={{maxHeight: '50vh', fontWeight: 'bold'}}
                        navbarScroll
                    >{items.map((item) => {
                        return <Nav.Link href={item.href} className="me-5">{item.label}</Nav.Link>
                    })}


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
