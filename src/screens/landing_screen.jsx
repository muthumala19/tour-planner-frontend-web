import './landing_screen.css'
import Footer from "../components/footer_component";
import NavBarComponent from "../components/navbar_component";
import Button from "@mui/material/Button";
import AboutUs from "../components/about_us_component";
import {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../configurations/firebase_configurations";
import ContactUs from "../components/contact_us";
import PricingPlan from "./pricing_plans_screen";
import {Link} from "react-router-dom";


export default function LandingScreen() {
    const [authUser, setAuthUser] = useState(null);
    // const navigate = useNavigate();
    const navbarItemsForNotLoggedInUser = [
        {label: 'Home', href: '#home'},
        {label: 'Pricing', href: '#pricing'},
        {label: 'About Us', href: '#about_us'},
        {label: 'Contact Us', href: '#contact_us'},
        {label: 'Register', href: '/register'},
        {label: 'Sign In', href: '/sign_in'},
    ];


    const navbarItemsForLoggedInUser = [
        {label: 'Home', href: '#home'},
        {label: 'Pricing', href: '#pricing'},
        {label: 'About Us', href: '#about_us'},
        {label: 'Contact Us', href: '#contact_us'},
    ];

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            }
        });
    }, []);


    return (
        <div className={"landing_screen"}>
            <div className={'navbar_position'}><NavBarComponent
                items={authUser ? navbarItemsForLoggedInUser : navbarItemsForNotLoggedInUser}/></div>
            <div id='home' className={'section first'}>
                <div className={'welcome_note'}>
                    <div><h1>
                        {"|NAVIGATE THE WORLD'S MARVELOUS."}
                    </h1>
                        <div className={'get_started_button'}>
                            <Link to={'/destinationForm'}> <Button
                            >
                                Get Started
                            </Button></Link>
                        </div>
                    </div>
                    <div className={'paragraphs'}>
                        <p>
                            Step into a world of possibilities where your journey begins. We're here to make your
                            travel
                            dreams come true. Explore exotic destinations, create unforgettable itineraries, and
                            embark
                            on adventures like never before.
                        </p>
                        <p>At JourneySync, we're dedicated to providing you with the
                            best travel experiences.
                            Whether you're a solo explorer, a family of adventurers, or a couple seeking a romantic
                            getaway, we've got you covered.
                        </p>
                        <p>
                            Our user-friendly platform is designed to make travel planning a breeze. With powerful
                            AI
                            tools and expert recommendations, crafting your perfect trip has never been easier.
                            Plus, we
                            offer seamless booking services and a range of travel resources to enhance your journey.
                        </p>
                    </div>
                </div>
            </div>
            <div id='pricing' className={''}><PricingPlan/></div>
            <div id='about_us' className={'section about_us'}><AboutUs/></div>
            <div id='contact_us'><ContactUs/></div>
            <div><Footer/></div>
        </div>);
}