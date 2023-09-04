import './landing_screen.css'
import Footer_component from "../components/Footer_component";
import NavBarComponent from "../components/navbar_component";

export default function LandingScreen() {
    const navbarItems = [
        {label: 'Home', href: '#home'},
        {label: 'About Us', href: '#about_us'},
        {label: 'Contact Us', href: '#contact_us'},
        {label: 'Sign Up', href: '/sign_up'},
        {label: 'Sign In', href: '/sign_in'},
    ];
    return (
        <div className={"landing_screen"}>
            <div className={'navbar_position'}><NavBarComponent items={navbarItems}/></div>
            <div id='home' className={'section first'}></div>
            <div id='about_us' className={'section'}>about us</div>
            <div id='contact_us' className={'section'}>contact us</div>
            <div><Footer_component/></div>
        </div>);
}