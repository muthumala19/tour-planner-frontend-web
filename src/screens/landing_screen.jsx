import './landing_screen.css'
import NavBarComponent from "../components/navbar_component";

export default function LandingScreen() {
    return <div className={"landing_screen"}>
        <div className={'landing_screen_navbar'}><NavBarComponent/></div>
        <div id='home' className={'section first'}></div>
        <div id='sign_up' className={'section'}>sign up</div>
        <div id='about_us' className={'section'}>about us</div>
        <div id='contact_us' className={'section'}>contact us</div>
    </div>
}