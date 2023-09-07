import './landing_screen.css'
import Footer from "../components/footer_component";
import NavBarComponent from "../components/navbar_component";
import Button from "@mui/material/Button";

export default function LandingScreen() {
    const navbarItems = [
        {label: 'Home', href: '#home'},
        {label: 'About Us', href: '#about_us'},
        {label: 'Contact Us', href: '#contact_us'},
        {label: 'Register', href: '/register'},
        {label: 'Sign In', href: '/sign_in'},
    ];
    return (
        <div className={"landing_screen"}>
            <div className={'navbar_position'}><NavBarComponent items={navbarItems}/></div>
            <div id='home' className={'section first'}>
                <div className={'welcome_note'}>
                    <div><h1>
                        {"|NAVIGATE THE WORLD'S MARVELOUS."}
                    </h1>
                        <div className={'get_started_button'}>
                            <Button


                                onClick={() => {
                                }}
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                    <div className={'paragraphs'}>
                        <p>
                            Step into a world of possibilities where your journey begins. We're here to make your travel
                            dreams come true. Explore exotic destinations, create unforgettable itineraries, and embark
                            on adventures like never before.
                        </p>
                        <p>At JourneySync, we're dedicated to providing you with the
                            best travel experiences.
                            Whether you're a solo explorer, a family of adventurers, or a couple seeking a romantic
                            getaway, we've got you covered.
                        </p>
                        <p>
                            Our user-friendly platform is designed to make travel planning a breeze. With powerful AI
                            tools and expert recommendations, crafting your perfect trip has never been easier. Plus, we
                            offer seamless booking services and a range of travel resources to enhance your journey.
                        </p>
                    </div>
                </div>

            </div>
            <div id='about_us' className={'section about_us'}>about us</div>
            <div id='contact_us' className={'section'}>contact us</div>
            <div><Footer/></div>
        </div>);
}