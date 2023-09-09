import React, { Component } from 'react'
import Button from '../components/button';
import "./accommodation.css"
import DestinationCard from '../components/Destinationcard';
import Pic from "../images/hotel.jpg"
import Pagination from '../components/pagination';
import HotelCard from '../components/hotelCard';

const Accommodation = () => {
    const tags = ['Wifi', 'Pool', 'A/C', 'Archer'];

    const handleClick = (key) => {
        console.log("working", key);
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
                <h1 className='acmd-heading'>Recommended Hotels to visit in kandy</h1>
                <div className='acmd-btn'>
                    <Button text="Change Trip Data" style={{padding:"6px 18px 6px 18px"}}></Button>
                </div>
                <div className='acmd-cards'>
                    <Pagination data={cardComponents} itemsPerPage={3}/>
                </div>
                <div className='acmd-btn'>
                    <Button text="Next Step" style={{padding:"6px 18px 6px 18px"}}></Button>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default Accommodation;