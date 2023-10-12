import React, { Component, useEffect, useState } from 'react'
import Button from '../components/button';
import "./roomSelection.css"
import RoomCard from '../components/roomCard';
import { getRooms } from '../backend/roomGeneration';
import Pic from "../images/hotel.jpg"
import { useNavigate, useSearchParams } from 'react-router-dom';

const RoomSelection = ({hotel, hotel_id}) => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();


    useEffect(() => {
        const fetchData = async () => {
            const hid = searchParams.get("hid");
            try {
                const data = await getRooms(hid);
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
                <h1 className='rs-heading'>Recommended Hotels to visit in kandy</h1>
                <img className='rs-hotel-img' src={Pic} placeholder='hotel Picture'/>  
                <div className='rs-cards'>
                    {cards}
                </div>
                <div className='rs-btn'>
                    <Button text="Next Step" style={{padding:"6px 18px 6px 18px"}} onClick={handleNextStep}></Button>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default RoomSelection;