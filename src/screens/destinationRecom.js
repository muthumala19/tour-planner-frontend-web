import React, { Component } from 'react'
import Button from '../components/button';
import "./destinationRecom.css"
import DestinationCard from '../components/Destinationcard';
import Pic from "../images/demodara.jpg"
import Pagination from '../components/pagination';
import { useNavigate } from 'react-router-dom';
import NavBarComponent from '../components/navbar_component';

const Destinations = () => {
    const tags = ['Nature', 'Adventure', 'Hiking'];
    const navigate = useNavigate();

    const handleClick = (key) => {

    };

    const handleNexStep = () => {
        navigate("/accommodationForm");
    }

    const cardComponents = [
        <DestinationCard key={1} id={1} title="Nine Arches Tunnels" location="Demodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
        <DestinationCard key={2} id={2} title="Nine Arches Tunnels" location="Demodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
        <DestinationCard key={3} id={3} title="Nine Arches Tunnels" location="Demodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
        <DestinationCard key={4} id={4} title="Nine Arches Tunnels" location="Dodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
        <DestinationCard key={5} id={5} title="Nine Arches Tunnels" location="Dodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
        <DestinationCard key={6} id={6} title="Nine Arches Tunnels" location="Dodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
    ];

    const navbarItems = [
        {label: 'Home', href: '/'},
     
    ];


    return (
        <React.Fragment>
        <NavBarComponent items={navbarItems}/>
            <div className='dst'>
                <div className='dst-container'>
                    <h1 className='dst-heading'>Recommended places to visit in kandy</h1>
                    <div className='dst-btn'>
                        <Button text="Change Trip Data" style={{padding:"6px 18px 6px 18px"}}></Button>
                    </div>
                    <div className='dst-cards'>
                        <Pagination data={cardComponents} itemsPerPage={6}/>
                    </div>
                    <div className='dst-btn'>
                        <Button text="Next Step" style={{padding:"6px 18px 6px 18px"}} onClick={handleNexStep}></Button>
                    </div>
                    </div>
            </div>
        </React.Fragment>
    );
}
 
export default Destinations;