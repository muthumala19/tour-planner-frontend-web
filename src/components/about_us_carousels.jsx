import {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SlidingSection from "./slidding_section";
import './sliding.css'


function AboutUsCarousels() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const captionStyle = {
        height: '60vh',
        width: '60vw',
        paddingTop: '18vh',
        margin: 'auto',
    };

    return (<Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <SlidingSection/>
            <Carousel.Caption style={captionStyle}>
                <h2>JourneySync</h2>
                <p style={{textAlign: 'center', paddingTop: '2vh', paddingBottom: '2vh'}}>
                    Welcome to JourneySync, your trusted companion for seamless travel
                    experiences!
                </p>
                <h3>Our Story</h3>
                <p style={{textAlign: 'center', paddingTop: '2vh', paddingBottom: '2vh'}}>
                    Founded in 2023, JourneySync was born out of a deep passion for
                    travel and a desire to
                    simplify
                    the way people plan, organize, and embark on their journeys. Our journey began when a group
                    of
                    avid travelers, just like you, faced the challenges of coordinating travel plans, finding
                    the
                    best destinations, and creating memorable itineraries. We realized that there had to be a
                    better
                    way, and that's when JourneySync was conceived.
                </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <SlidingSection/>
            <Carousel.Caption style={captionStyle}>
                <h2>Our Mission</h2>
                <p style={{textAlign: 'left', paddingTop: '2vh', paddingBottom: '2vh'}}>
                    At JourneySync, our mission is to empower travelers worldwide. We
                    believe that every journey
                    should
                    be a
                    masterpiece, carefully crafted to meet your unique interests and preferences. Our platform is
                    designed
                    to inspire your wanderlust, streamline the planning process, and ensure your travels are nothing
                    short
                    of extraordinary.
                </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <SlidingSection/>
            <Carousel.Caption style={captionStyle}>
                <h2>Why Choose JourneySync?</h2>
                <p style={{textAlign: 'left', paddingTop: '2vh', paddingBottom: '2vh'}}>
                    <ul>
                        <li>
                            <b>Expertise</b> : Our team of travel enthusiasts and technology experts combines years
                            of
                            experience in the travel industry with cutting-edge technology to deliver a platform
                            that's
                            both intuitive and powerful.
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <b>Innovation</b> : We stay ahead of the curve in travel technology, providing you with
                            the
                            latest
                            tools and resources to make your journey unforgettable.
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <b>Customer-Centric</b> : Your satisfaction is our top priority. We're committed to
                            making your
                            travel dreams a reality by offering exceptional support, personalized recommendations,
                            and user-friendly features.
                        </li>
                    </ul>
                </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <SlidingSection/>
            <Carousel.Caption style={captionStyle}>
                <h2>What We Offer</h2>
                <p style={{textAlign: 'left', paddingTop: '2vh', paddingBottom: '2vh'}}>
                    <ul>
                        <li><b>Travel Planning</b> : JourneySync offers a suite of planning tools, from destination
                            research
                            to
                            itinerary creation, making it easy for you to plan your dream vacation.
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <b>Collaboration</b> : Coordinate trips with friends and family effortlessly.
                            JourneySync
                            ensures
                            everyone is on the same page, making group travel a breeze.
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <b>Travel Insights</b> : Gain access to expert travel insights, destination guides, and
                            insider tips
                            to
                            enhance your travel experiences.
                        </li>
                    </ul>
                </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>);
}

export default AboutUsCarousels;