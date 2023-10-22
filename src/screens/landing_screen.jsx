import './landing_screen.css'
import Footer from "../components/footer_component";
import NavBarComponent from "../components/navbar_component";
import Button from "@mui/material/Button";
import AboutUs from "../components/about_us_component";
import {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../configurations/firebase_configurations";
import { useNavigate } from 'react-router';

export default function LandingScreen() {
    const [authUser, setAuthUser] = useState(null);
    const navbarItemsForNotLoggedInUser = [
        {label: 'Home', href: '#home'},
        {label: 'About Us', href: '#about_us'},
        {label: 'Explore', href: '#explore'},
        {label: 'Register', href: '/register'},
        {label: 'Sign In', href: '/sign_in'},
    ];

    const navigate = useNavigate();
    
    const navbarItemsForLoggedInUser = [
        {label: 'Home', href: '#home'},
        {label: 'About Us', href: '#about_us'},
        {label: 'Explore', href: '#explore'},
    ];

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
            console.log(user)
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
                            <Button
                                onClick={() => {
                                    navigate("/destinationForm")
                                }}
                            >
                                Get Started
                            </Button>
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
            <div id='about_us' className={'section about_us'}><AboutUs/></div>
            <div id='explore' className={'section'}>Explore</div>
            <div><Footer/></div>
        </div>);
}