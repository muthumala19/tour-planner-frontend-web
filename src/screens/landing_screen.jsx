import './landing_screen.css'
import Footer_component from "../components/Footer_component";
import NavBarComponent from "../components/navbar_component";

export default function LandingScreen() {
    const navbarItems = [
        {label: 'Home', href: '#home'},
        {label: 'Sign Up', href: '#sign_up'},
        {label: 'About Us', href: '#about_us'},
        {label: 'Contact Us', href: '#contact_us'},
    ];
    return (
        <div className={"landing_screen"}>
            <div className={'navbar_position'}><NavBarComponent items={navbarItems}/></div>
            <div id='home' className={'section first'}></div>
            <div id='sign_up' className={'section'}>sign up</div>
            <div id='about_us' className={'section'}>about us</div>
            <div id='contact_us' className={'section'}>contact us</div>
            <div><Footer_component/></div>
        </div>);
}