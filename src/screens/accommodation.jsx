import React, { Component, useEffect, useState } from 'react'
import Button from '../components/button';
import "./accommodation.css"
import DestinationCard from '../components/Destinationcard';
import Pic from "../images/hotel.jpg"
import Pagination from '../components/pagination';
import HotelCard from '../components/hotelCard';
import { getHotels } from '../backend/hotelGeneration';
import { useNavigate } from 'react-router-dom';

const Accommodation = () => {
    const [hotels, setHotels] = useState([]);
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const tags = ['Wifi', 'Pool', 'A/C', 'Archer'];

    const navigate = useNavigate();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getHotels();
                setLoading(false);
                const cards = data.map((item, index) => {
                    return {
                        hotel_id: item.hotel_id,
                        hotel_name: item.hotel_name,
                        city: item.city,
                        review_score: item.review_score,
                        review_score_word: item.review_score_word,
                        min_total_price: item.min_total_price,
                        max_photo_url: item.max_photo_url,
                    }
                });
                setCards(cards);
            } catch (error) {
                console.error('Error fetching hotel data:', error);
                setLoading(false);
            }
        };

        fetchData();
        }, []);
    
    const generateHotelCards = (cards, handleClick) => (
        cards.map((item, index) => (
            <HotelCard
                key={index}
                id={index}
                hotel_id={item.hotel_id}
                title={item.hotel_name}
                location={item.city}
                ratings={[item.review_score, item.review_score_word]}
                cost={Math.ceil(item.min_total_price * 320)}
                tagLabel="Location tags"
                image={item.max_photo_url}
                onClick={handleClick}
            />
        ))
    );

    const handleClick = (id, hotel_id) => {
        navigate(`/room-selection/?hotel_id=${hotel_id}`);
    };


    useEffect(() => {
        setHotels(generateHotelCards(cards, handleClick));
  }, [cards]);

    return (
        <React.Fragment>
            <div className='acmd'>
                <h1 className='acmd-heading'>Recommended Hotels To Stay In Kandy</h1>
                <div className='acmd-btn'>
                    <Button text="Change Trip Data" style={{padding:"6px 18px 6px 18px"}}></Button>
                </div>
                <div className='acmd-cards'>
                    <Pagination data={hotels} itemsPerPage={6}/>
                </div>
                {/* <div className='acmd-btn'>
                    <Button text="Next Step" style={{padding:"6px 18px 6px 18px"}} onClick={handleNextStep}></Button>
                </div> */}
            </div>
        </React.Fragment>
    );
}
 
export default Accommodation;