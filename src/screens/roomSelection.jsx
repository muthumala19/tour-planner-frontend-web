import React, { Component, useEffect, useState } from 'react'
import Button from '../components/button';
import "./roomSelection.css"
import Pagination from '../components/pagination';
import HotelCard from '../components/hotelCard';
import { getHotels } from '../backend/hotelGeneration';
import RoomCard from '../components/roomCard';
import { getRooms } from '../backend/roomGeneration';
import Pic from "../images/hotel.jpg"

const RoomSelection = ({hotel, hotel_id}) => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getRooms();
                setLoading(false);
                console.log(data);
                const cards = Object.values(data).map((item, index) => {
                    console.log(item.photos);
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


    const handleClick = () => {
    };

    const handleNextStep = async () => {
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