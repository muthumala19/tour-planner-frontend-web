import './navbar_component.css'
import {Container, Image, Nav, Navbar, NavLink} from "react-bootstrap";
import AvatarMenu from "./profile_avatar_component";
import {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../configurations/firebase_configurations";
import {Link} from "react-router-dom";

export default function NavBarComponent({items}) {
    const [authUser, setAuthUser] = useState(null);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
                console.log(user.uid)
            } else {
                setAuthUser(null);
            }
            console.log(user)
        });
    }, []);

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
                        return item.label === 'Register' || item.label === 'Sign In' ?
                            <Link to={item.href} key={item.label} className="me-5">{item.label}</Link> :
                            <NavLink key={item.label} href={item.href} className="me-5">{item.label}</NavLink>;
                    })}
                        {authUser ? <AvatarMenu email={authUser.email}/> : null}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
