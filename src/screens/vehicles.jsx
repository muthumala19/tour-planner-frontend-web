import React, { Component, useEffect, useState } from 'react'
import Button from '../components/button';
import "./vehicles.css"
import Pic from "../images/demodara.jpg"
import Pagination from '../components/pagination';
import { useNavigate } from 'react-router-dom';
import { getVehicles } from '../backend/vehicleGeneration';
import VehicleCard from '../components/vehicleCard';

const Vehicles = () => {
    const tags = ['Nature', 'Adventure', 'Hiking'];

    const [cards, setCards] = useState([]);
    const [vehicleCards, setVehicleCards] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getVehicles();
                setLoading(false);
                const cards = Object.values(data).map((item, index) => {
                    return  {
                        isSelected:false,
                        vh_id:item.vehicle_info.v_id,
                        title:item.supplier_info.name,
                        car:item.vehicle_info.v_name,
                        ratings:item.rating_info.average,
                        cost:Math.ceil(item.pricing_info.price * 320),
                        image:item.vehicle_info.image_thumbnail_url,
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

        
        const handleClick = (key) => {
            console.log("working", key);
            const ncards = cards;
            ncards[key].isSelected = !ncards[key].isSelected;
            setVehicleCards(generateVehicleCards(ncards, handleClick));
        };

        const generateVehicleCards = (cards, handleClick) => (
            cards.map((item, index) => (
                <VehicleCard
                    key={index}
                    id={index}
                    isSelected={item.isSelected}
                    vh_id={item.vh_id}
                    title={item.title}
                    car={item.car}
                    ratings={item.ratings}
                    cost={item.cost}
                    image={item.image}
                    onClick={handleClick}
                />
            ))
        );

        useEffect(() => {
            setVehicleCards(generateVehicleCards(cards, handleClick));
    }, [cards]);

        const handleNextStep = () => {
            navigate("/summary");
        }




    return (
        <React.Fragment>
            <div className='vh'>
                <h1 className='vh-heading'>Recommended Vehicles For Your Ride</h1>
                <div className='vh-btn'>
                    <Button text="Change Trip Data" style={{padding:"6px 18px 6px 18px"}}></Button>
                </div>
                <div className='vh-cards'>
                    <Pagination data={vehicleCards} itemsPerPage={6}/>
                </div>
                <div className='vh-btn'>
                    <Button text="Next Step" style={{padding:"6px 18px 6px 18px"}} onClick={handleNextStep}></Button>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default Vehicles;