import React, { Component } from 'react'
import TripCard from '../components/tripCard';
import "../screens/savedJourneys.css"
import Pic from "../images/demodara.jpg"
import Pagination from '../components/pagination';

const SavedJourneys = () => {
    const tags = ['Wifi', 'Pool', 'A/C', 'Archer'];

    const handleClick = (key) => {
        console.log("working", key);
    };

    const cardComponents = [
        <TripCard key={1} id={1} title="Trip title" location="Demodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
        <TripCard key={2} id={2} title="Trip title" location="Demodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
        <TripCard key={3} id={3} title="Trip title" location="Demodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
        <TripCard key={4} id={4} title="Trip title" location="Dodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
        <TripCard key={5} id={5} title="Trip title" location="Dodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
        <TripCard key={6} id={6} title="Trip title" location="Dodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
    ];

    return (
        <React.Fragment>
            <div className='sj'>
                <h1 className='sj-heading'>Saved Journeys</h1>
                <div className='sj-cards'>
                    <Pagination data={cardComponents} itemsPerPage={3}/>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default SavedJourneys;