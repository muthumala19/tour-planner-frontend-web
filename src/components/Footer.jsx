import './footer.css'
import {Image} from "react-bootstrap";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";

export default function Footer() {
    return (<div className={'footer_settings'}>
        <div className={'footer'}>
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
                <h2>Quick Links</h2>
                <h5>Home</h5>
                <h5>Tours</h5>
                <h5>About Us</h5>
                <h5>Contact Us</h5>
            </div>
            <div>
                <h2>Connect With Us</h2>
            </div>
        </div>
        <div className={'follow_us'}>
            <div><h4>Follow us on : </h4></div>
            <div><FaFacebook/></div>
            <div>
                <FaInstagram/>
            </div>
            <div><FaLinkedin/></div>
            <div><FaTwitter/></div>
        </div>
    </div>);
}
