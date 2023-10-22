import React, { Component, useEffect, useState } from 'react'
import Button from '../components/button';
import "./accommodation.css"
import Pic from "../images/hotel.jpg"
import Pagination from '../components/pagination';
import HotelCard from '../components/hotelCard';
import { getHotels } from '../backend/hotelGeneration';
import { useNavigate, useSearchParams } from 'react-router-dom';
import NavBarComponent from '../components/navbar_component';

const Accommodation = () => {
    const [hotels, setHotels] = useState([]);
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const tags = ['Wifi', 'Pool', 'A/C', 'Archer'];

    const navigate = useNavigate();
    const [ searchParams ] = useSearchParams();


    useEffect(() => {
        const filterCards = (cards) => {
            const range = searchParams.get("pr").split(",");
            const filtered = cards.filter((card) => {
                console.log(card);
                return (Number(range[0]) < card.props.cost && card.props.cost < Number(range[1]))
            });
            setCards(filtered);
        }

        const fetchData = async () => {
            const cin = searchParams.get("cin");
            const cout = searchParams.get("cout");
            const adult = searchParams.get("ad");
            const child = searchParams.get("ch");
            const location = searchParams.get("lc");
            try {
                const data = await getHotels(cin, cout, adult, child, location);
                setHotels(data);
                setLoading(false);
                const cards = data.map((item, index) => {
                    return <HotelCard
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
            });
                filterCards(cards);
            } catch (error) {
                console.error('Error fetching hotel data:', error);
                setLoading(false);
            }

            
        };

        fetchData();
        }, []);


    const handleClick = (id, hotel_id) => {
        const cin = searchParams.get("cin");
        const cout = searchParams.get("cout");
        const adult = searchParams.get("ad");
        const location = searchParams.get("lc");
        navigate(`/room-selection?hid=${hotel_id}&cin=${cin}&cout=${cout}&adult=${adult}&lc=${location}`)
    };

    const navbarItems = [
        {label: 'Home', href: '/'},
    ];


    return (
        <React.Fragment>
            <NavBarComponent items={navbarItems}/>
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