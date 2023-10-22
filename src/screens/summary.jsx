import React, { Component } from 'react'
import Button from '../components/button';
import "./summary.css"
import DestinationCard from '../components/Destinationcard';
import Pic from "../images/demodara.jpg"
import Pagination from '../components/pagination';
import { FaHotel } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import NavBarComponent from '../components/navbar_component';
import Footer from '../components/footer_component';

const Summary = () => {
    const tags = ['Nature', 'Adventure', 'Hiking'];

    const navigate = useNavigate();

    const handleClick = (key) => {
        console.log("working", key);
    };

    const cardComponents = [
        <DestinationCard key={1} id={1} title="Nine Arches Tunnels" location="Demodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
        <DestinationCard key={2} id={2} title="Nine Arches Tunnels" location="Demodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
        <DestinationCard key={3} id={3} title="Nine Arches Tunnels" location="Demodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
        <DestinationCard key={4} id={4} title="Nine Arches Tunnels" location="Dodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
        <DestinationCard key={5} id={5} title="Nine Arches Tunnels" location="Dodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
        <DestinationCard key={6} id={6} title="Nine Arches Tunnels" location="Dodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
    ];

    const handlePlaceChange = () => {
        navigate("/destinations");
    }

    const handleHotelChange = () => {
        navigate("/accommodations");

    }

    const handleVehicleChange = () => {
        navigate("/vehicles");
    }

    const navbarItems = [
        {label: 'Home', href: '/'},
    ];

    return (
        <React.Fragment>
            <NavBarComponent items={navbarItems}/>
            <div className='smr'>
                <h1 className='smr-heading'>Journey Preview</h1>
                <div className='smr-btn'>
                    <Button text="Change Trip Data" style={{padding:"6px 18px 6px 18px"}} onClick={handleClick}></Button>
                </div>

                <h2 className='smr-sub-heading smr-sub-heading-first'>Picked Places</h2>
                <div className='smr-cards'>
                    <Pagination data={cardComponents} itemsPerPage={3}/>
                </div>
                <div className='smr-btn'>
                    <button className='smr-btn-item' onClick={handlePlaceChange}>Change Selection</button>
                </div>

                <div className='smr-divider'></div>

                <h2 className='smr-sub-heading'>Picked Hotels</h2>
                <div className='smr-cards'>
                    <Pagination data={cardComponents} itemsPerPage={3}/>
                </div>
                <div className='smr-btn'>
                    <button className='smr-btn-item' onClick={handleHotelChange}>Change Selection</button>
                </div>

                <div className='smr-divider'></div>

                <h2 className='smr-sub-heading'>Picked Vehicles</h2>
                <div className='smr-cards'>
                    <Pagination data={cardComponents} itemsPerPage={3}/>
                </div>
                <div className='smr-btn'>
                    <button className='smr-btn-item' onClick={handleVehicleChange}>Change Selection</button>
                </div>

                <div className='smr-divider'></div>

                <h2 className='smr-sub-heading'>Summary</h2>
                <div className='smr-content'>
                    <div className='smr-cost'>
                        <h4 className='smr-text'>Total Cost For Accomadation: Rs. 18000.00</h4>
                    </div>
                    <div className='smr-cost'>
                        <h4 className='smr-text'>Total Cost For Transport: Rs. 8000.00</h4>
                    </div>
                </div>
                <div className='smr-btn smr-btn-last'>
                    <Button text="Proceed To Checkout" style={{padding:"6px 18px 6px 18px"}}></Button>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
}
 
export default Summary;