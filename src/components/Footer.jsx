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
                <h3>Contact us</h3>
                <h6>JourneySync Inc.</h6>
                <h6>123 Main Street, Suite 456</h6>
                <h6>City, State, ZIP</h6>
                <h6>Email: info@journeysync.com</h6>
                <h6>Phone: +1 (123) 456-7890</h6>
            </div>
            <div>
                <h3>Quick Links</h3>
                <h6>Home</h6>
                <h6>Tours</h6>
                <h6>About Us</h6>
                <h6>Contact Us</h6>
            </div>
            <div>
                <h3>Connect With Us</h3>
            </div>
        </div>
        <div className={'follow_us'}>
            <div><h5>Follow us on : </h5></div>
            <div><FaFacebook/></div>
            <div>
                <FaInstagram/>
            </div>
            <div><FaLinkedin/></div>
            <div><FaTwitter/></div>
        </div>
    </div>);
}
