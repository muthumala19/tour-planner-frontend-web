import React, { Component, useEffect, useState } from 'react'
import Button from '../components/button';
import "./roomSelection.css"
import RoomCard from '../components/roomCard';
import { getRooms } from '../backend/roomGeneration';
import Pic from "../images/hotel.jpg"
import { useNavigate, useSearchParams } from 'react-router-dom';

const RoomSelection = ({hotel}) => {
    const [cards, setCards] = useState([]);
    const [roomCards, setRoomCards] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const generateCards = (cards, handleClick) => (
        cards.map((item, index) => (
            <RoomCard
                key={index}
                id={index}
                isSelected={item.isSelected}
                highlights={item.highlights}
                photos={item.photos}
                description={item.description}
                onClick={handleClick}
            />
        ))
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const hotel_id = searchParams.get('hotel_id');
                const data = await getRooms(hotel_id.toString());
                setLoading(false);
                const cards = Object.values(data).map((item) => ({
                    isSelected: false,
                    highlights: item.highlights,
                    photos: item.photos,
                    description: item.description,
                }));
                setRoomCards(cards);
            } catch (error) {
                console.error('Error fetching room data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleClick = (id) => {
            console.log("working", id);
            const ncards = roomCards;
            ncards[id].isSelected = !ncards[id].isSelected;
            setCards(generateCards(ncards, handleClick));
    };

    useEffect(() => {
        setCards(generateCards(roomCards, handleClick));
    }, [roomCards]);


    const handleNextStep = () => {
        navigate("/vehicles");
    }
    

    return (
        <React.Fragment>
            <div className='rs'>
                <h1 className='rs-heading'>Recommended Hotel Rooms</h1>
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