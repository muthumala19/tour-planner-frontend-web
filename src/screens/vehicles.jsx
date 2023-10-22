import React, { Component, useEffect, useState } from 'react'
import Button from '../components/button';
import "./vehicles.css"
import Pic from "../images/demodara.jpg"
import Pagination from '../components/pagination';
import { useNavigate, useSearchParams } from 'react-router-dom';
import VehicleCard from '../components/vehicleCard';
import { getVehicles } from '../backend/vehicleGeneration';
import NavBarComponent from '../components/navbar_component';
import Footer from '../components/footer_component';

const Vehicles = () => {
    const tags = ['Nature', 'Adventure', 'Hiking'];

    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();


    useEffect(() => {
        const fetchData = async () => {
            const cin = searchParams.get("cin");
            const cout = searchParams.get("cout");
            const location = searchParams.get("lc");
            try {
                const data = await getVehicles(cin, cout, location);
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
                setCards(cards.slice(0,30));
            } catch (error) {
                console.error('Error fetching hotel data:', error);
                setLoading(false);
            }
        };

        fetchData();
        }, []);

    const handleClick = (key) => {
        console.log("working", key);
        navigate("/summary");
    };

    const handleNextStep = () => {
        navigate("/summary");
    }

    const navbarItems = [
        {label: 'Home', href: '/'},
    ];

    return (
        <React.Fragment>
            <NavBarComponent items={navbarItems}/>
            <div className='vh'>
                <h1 className='vh-heading'>Recommended Vehicles For Your Ride</h1>
                <div className='vh-btn'>
                    <Button text="Change Trip Data" style={{padding:"6px 18px 6px 18px"}}></Button>
                </div>
                <div className='vh-cards'>
                    <Pagination data={cards} itemsPerPage={6}/>
                </div>
                {/* <div className='vh-btn'>
                    <Button text="Next Step" style={{padding:"6px 18px 6px 18px"}} onClick={handleNextStep}></Button>
                </div> */}
            </div>
            <Footer/>
        </React.Fragment>
    );
}
 
export default Vehicles;