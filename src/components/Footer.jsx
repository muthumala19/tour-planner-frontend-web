import './footer.css'
import {Image} from "react-bootstrap";

export default function Footer() {
    return (<div className={'footer'}>
        <div className={'logo'}>
            <Image width={200}
                   src={require('../images/journeysync-high-resolution-logo-white-on-transparent-background.png')}/>
        </div>
        <div>
            <h2>Contact us</h2>
            <h5>JourneySync Inc.</h5>
            <h5>123 Main Street, Suite 456</h5>
            <h5>City, State, ZIP</h5>
            <h5>Email: info@journeysync.com</h5>
            <h5>Phone: +1 (123) 456-7890</h5>
        </div>
        <div>
            <h2>About us</h2>
            <h5>Home</h5>
            <h5>Tours</h5>
            <h5>About Us</h5>
            <h5>Contact Us</h5>
        </div>
        <div>
            <h2>Connect With Us</h2>
            <h3>Follow Us On : </h3>
        </div>
    </div>);
}
