import React, { Component, useEffect, useState } from 'react'
import Button from '../components/button';
import "./summary.css"
import DestinationCard from '../components/Destinationcard';
import pic1 from "../images/templeoftooth.jpg"
import pic2 from "../images/garden.jpg"
import pic3 from "../images/musium.jpg"
import Pagination from '../components/pagination';
import { FaHotel } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import NavBarComponent from '../components/navbar_component';
import Footer from '../components/footer_component';
import HotelCard from '../components/hotelCard';
import VehicleCard from '../components/vehicleCard';
import { getHotelData, getUserHotel } from '../backend/hotelGeneration';

const Summary = () => {
    const [hotel, setHotel] = useState(null);
    const [hotelData, setHotelData] = useState(null);
    const tag1 = ['Religious', 'History'];
    const tag2 = ['Nature', 'Adventure'];
    const tag3 = ['History', 'Knowladge'];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUserHotel("11221122");
                const value = await getHotelData(data[0].id);
                setHotel(data[0]);
                setHotelData(value)
                console.log("here", value)
            } catch (error) {
                console.error('Error fetching hotel data:', error);
            }

            
        };

        fetchData();
        }, []);

    const navigate = useNavigate();

    const handleClick = (key) => {
        console.log("working", key);
    };

    const cardComponents = [
        <DestinationCard key={1} id={1} title="Temple of Tooth" location="Kandy" tags={tag1} tagLabel="Location tags" image={pic1} onClick={handleClick} />,
        <DestinationCard key={2} id={2} title="Royal Gardens" location="Peradeniya" tags={tag2} tagLabel="Location tags" image={pic2} onClick={handleClick} />,
        <DestinationCard key={3} id={3} title="National Museum" location="Kandy" tags={tag3} tagLabel="Location tags" image={pic3} onClick={handleClick} />,
    ];

    const cardComponents2 = [
        <HotelCard
                        key={1}
                        id={1}
                        hotel_id={hotel && hotel.id}
                        title={hotelData && hotelData.name}
                        location={hotelData && hotelData.city}
                        ratings={hotelData && [hotelData.review_score, hotelData.review_score_word]}
                        cost={hotel && hotel.cost}
                        tagLabel="Location tags"
                        image={hotel && hotel.url}
                    />
    ];

    const cardComponents3 = [
        <VehicleCard
                        key={1}
                        id={1}
                        vh_id={1}
                        title={"AWM Rents"}
                        car={"Toyota Prius"}
                        ratings={9.7}
                        cost={Math.ceil(400 * 320)}
                        image={"https://cdn.rcstatic.com/images/car_images/web/skoda/citigo_lrg.png"}
                    />
    ];

    const handlePlaceChange = () => {
        navigate("/destinations");
    }

    const handleHotelChange = () => {
        navigate("/accommodations");

    }

    const handleClicks = () => {
        navigate("")
    }

    const handleVehicleChange = () => {
        navigate("/vehicles");
    }

    const navbarItems = [
        {label: 'Home', href: '/'},
    ];

    return (
        <React.Fragment>
            <NavBarComponent items={navbarItems}/>
            <div className='smr'>
                <h1 className='smr-heading'>Journey Preview</h1>
                <div className='smr-btn'>
                    <Button text="Change Trip Data" style={{padding:"6px 18px 6px 18px"}} onClick={handleClick}></Button>
                </div>

                <h2 className='smr-sub-heading smr-sub-heading-first'>Picked Places</h2>
                <div className='smr-cards'>
                    <Pagination data={cardComponents} itemsPerPage={3}/>
                </div>
                <div className='smr-btn'>
                    <button className='smr-btn-item' onClick={handlePlaceChange}>Change Selection</button>
                </div>

                <div className='smr-divider'></div>

                <h2 className='smr-sub-heading'>Picked Hotels</h2>
                {hotel && <div className='smr-cards'>
                    <Pagination data={cardComponents2} itemsPerPage={3}/>
                </div>}
                <div className='smr-btn'>
                    <button className='smr-btn-item' onClick={handleHotelChange}>Change Selection</button>
                </div>

                <div className='smr-divider'></div>

                <h2 className='smr-sub-heading'>Picked Vehicles</h2>
                <div className='smr-cards'>
                    <Pagination data={cardComponents3} itemsPerPage={3}/>
                </div>
                <div className='smr-btn'>
                    <button className='smr-btn-item' onClick={handleVehicleChange}>Change Selection</button>
                </div>

                <div className='smr-divider'></div>

                <h2 className='smr-sub-heading'>Summary</h2>
                <div className='smr-content'>
                    <div className='smr-cost'>
                        <h4 className='smr-text'>Total Cost For Accomadation: Rs. 18000.00</h4>
                    </div>
                    <div className='smr-cost'>
                        <h4 className='smr-text'>Total Cost For Transport: Rs. 8000.00</h4>
                    </div>
                </div>
                <div className='smr-btn smr-btn-last'>
                    <Button text="Proceed To Checkout" style={{padding:"6px 18px 6px 18px"}} onClick={handleClicks}></Button>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
}
 
export default Summary;