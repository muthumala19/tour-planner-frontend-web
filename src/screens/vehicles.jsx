import React, { Component, useEffect, useState } from 'react'
import Button from '../components/button';
import "./vehicles.css"
import Pic from "../images/demodara.jpg"
import Pagination from '../components/pagination';
import { useNavigate } from 'react-router-dom';
import VehicleCard from '../components/vehicleCard';
import { getVehicles } from '../backend/vehicleGeneration';

const Vehicles = () => {
    const tags = ['Nature', 'Adventure', 'Hiking'];

    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getVehicles();
                setLoading(false);
                const cards = Object.values(data).map((item, index) => {
                    return  <VehicleCard
                        key={index}
                        id={index}
                        vh_id={item.vehicle_info.v_id}
                        title={item.supplier_info.name}
                        car={item.vehicle_info.v_name}
                        ratings={item.rating_info.average}
                        cost={Math.ceil(item.pricing_info.price * 320)}
                        image={item.vehicle_info.image_thumbnail_url}
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
        console.log("working", key);
    };

    const cardComponents = [
        <VehicleCard key={1} id={1} title="Nine Arches Tunnels" location="Demodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
        <VehicleCard key={2} id={2} title="Nine Arches Tunnels" location="Demodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
        <VehicleCard key={3} id={3} title="Nine Arches Tunnels" location="Demodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
        <VehicleCard key={4} id={4} title="Nine Arches Tunnels" location="Dodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
        <VehicleCard key={5} id={5} title="Nine Arches Tunnels" location="Dodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
        <VehicleCard key={6} id={6} title="Nine Arches Tunnels" location="Dodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
    ];

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
                    <Pagination data={cards} itemsPerPage={6}/>
                </div>
                <div className='vh-btn'>
                    <Button text="Next Step" style={{padding:"6px 18px 6px 18px"}} onClick={handleNextStep}></Button>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default Vehicles;