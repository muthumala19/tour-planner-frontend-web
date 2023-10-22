import React, { Component, useEffect, useState } from 'react'
import Button from '../components/button';
import "./roomSelection.css"
import RoomCard from '../components/roomCard';
import { getRooms } from '../backend/roomGeneration';
import Pic from "../images/hotel.jpg"
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getHotelData } from '../backend/hotelGeneration';
import NavBarComponent from '../components/navbar_component';
import Footer from '../components/footer_component';

const RoomSelection = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();


    useEffect(() => {
        const fetchData = async () => {
            const hid = searchParams.get("hid");
            const cin = searchParams.get("cin");
            const cout = searchParams.get("cout");
            const adult = searchParams.get("adult");
            try {
                const data = await getRooms(hid, cin, cout, adult);
                const hotelDetails = await getHotelData(hid);

                setName(hotelDetails.name);
                setImage(hotelDetails.main_photo_url);
                setLoading(false);
                const cards = Object.values(data).map((item, index) => {
                    return <RoomCard
                        key={index}
                        id={index}
                        highlights={item.highlights}
                        photos={item.photos}
                        description={item.description}
                        onClick={handleClick}
                    />
            });
                setCards(cards);
            } catch (error) {
                console.error('Error fetching hotel data:', error);
                setLoading(false);
            }
        };

        fetchData();
        }, []);


    const handleClick = (key) => {
        // Put to database {user:user_id, data:cards[key]} under Selected room
        const cin = searchParams.get("cin");
        const cout = searchParams.get("cout");
        const location = searchParams.get("lc");
        navigate(`/explore_your_ideal_ride?cin=${cin}&cout=${cout}&lc=${location}`)
    };

    const handleNextStep = () => {
        navigate("/vehicles");
    }
    
    const navbarItems = [
        {label: 'Home', href: '/'},
    ];

    return (
        <React.Fragment>
            <NavBarComponent items={navbarItems}/>
            <div className='rs'>
                <h1 className='rs-heading'>{name}</h1>
                <img className='rs-hotel-img' src={Pic} placeholder='hotel Picture'/>  
                <div className='rs-cards'>
                    {cards}
                </div>
                <div className='rs-btn'>
                    <Button text="Next Step" style={{padding:"6px 18px 6px 18px"}} onClick={handleNextStep}></Button>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
}
 
export default RoomSelection;