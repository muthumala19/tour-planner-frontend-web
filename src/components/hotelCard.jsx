import React, { Component } from 'react'
import { FaMapMarkedAlt } from 'react-icons/fa';
import Button from './button';
import "./hotelCard.css"
import { Link } from 'react-router-dom';

const HotelCard = ({id, title, location, image, tags, tagLabel, onClick}) => {
    return (
        <div className='hotel-crd-containter'>
            <img className='hotel-crd-image' src={image} placeholder={title}></img>
            <h1 className='hotel-crd-title'>{title}</h1>
            <div className='hotel-crd-location'>
                <FaMapMarkedAlt/>
                <h2 className='hotel-crd-location-title'>{location}</h2>
            </div>

            <div className='hotel-crd-tags'>
                <h2 className='hotel-crd-tags-title'>{tagLabel}: </h2>

                <div className='tags'>
                                    {tags.map((tag,index) => {
                    return <div key={index} className='hotel-crd-tag'>{tag}</div>
                })}
                </div>

             </div>

            <div className='hotel-crd-cost'>
                <div className='hotel-crd-cost-title'>Total Cost: Rs.14,500</div>
            </div>

            <Link className='hotel-crd-maplink' to="https://www.google.com/maps/place/University+of+Moratuwa">explore location on map</Link>

            <button className='hotel-crd-btn' onClick={() => onClick(id)}>Save</button>
            
        </div>
    );
}
 
export default HotelCard;