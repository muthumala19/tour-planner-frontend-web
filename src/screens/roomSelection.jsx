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
            try {
                const data = await getRooms(hid);
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
    };

    const handleNextStep = () => {
        navigate("/vehicles");
    }
    

    return (
        <React.Fragment>
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