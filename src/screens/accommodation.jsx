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
                setHotels(data);
                setLoading(false);
                const cards = data.map((item, index) => (
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
                ));
                setCards(cards);
            } catch (error) {
                console.error('Error fetching hotel data:', error);
                setLoading(false);
            }
        };

        fetchData();
        }, []);


    const handleClick = (id, hotel_id) => {
        navigate("/room-selection")
    };

    const cardComponents = [
        <HotelCard key={1} id={1} title="Nine Arches Tunnels" location="Demodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
        <HotelCard key={2} id={2} title="Nine Arches Tunnels" location="Demodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
        <HotelCard key={3} id={3} title="Nine Arches Tunnels" location="Demodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
        <HotelCard key={4} id={4} title="Nine Arches Tunnels" location="Dodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
        <HotelCard key={5} id={5} title="Nine Arches Tunnels" location="Dodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
        <HotelCard key={6} id={6} title="Nine Arches Tunnels" location="Dodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
    ];



    return (
        <React.Fragment>
            <div className='acmd'>
                <h1 className='acmd-heading'>Recommended Hotels To Stay In Kandy</h1>
                <div className='acmd-btn'>
                    <Button text="Change Trip Data" style={{padding:"6px 18px 6px 18px"}}></Button>
                </div>
                <div className='acmd-cards'>
                    <Pagination data={cards} itemsPerPage={6}/>
                </div>
                {/* <div className='acmd-btn'>
                    <Button text="Next Step" style={{padding:"6px 18px 6px 18px"}} onClick={handleNextStep}></Button>
                </div> */}
            </div>
        </React.Fragment>
    );
}
 
export default Accommodation;