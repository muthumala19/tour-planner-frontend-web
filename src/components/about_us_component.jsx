import './about_us_component.css'
import AboutUsCarousels from "./about_us_carousels";

export default function AboutUs() {
    return (
        <div className={'about_us'}>
            <h1>We are JourneySync.</h1>
            <div>
                <AboutUsCarousels/>
            </div>
        </div>
    );
}