import React, { Component } from 'react'
import { FaMapMarkedAlt } from 'react-icons/fa';
import Button from './button';
import "./tripCard.css"
import { Link } from 'react-router-dom';

const TripCard = ({id, title, location, image, tags, tagLabel, onClick}) => {
    return (
        <div className='trip-crd-containter'>
            <img className='trip-crd-image' src={image} placeholder={title}></img>
            <h1 className='trip-crd-title'>{title}</h1>
            <div className='trip-crd-location'>
                <FaMapMarkedAlt/>
                <h2 className='trip-crd-location-title'>{location}</h2>
            </div>

            <div className='trip-crd-tags'>
                <h2 className='trip-crd-tags-title'>{tagLabel}: </h2>

                <div className='tags'>
                                    {tags.map((tag,index) => {
                    return <div key={index} className='trip-crd-tag'>{tag}</div>
                })}
                </div>

             </div>

             <div className='trip-card-btns'>
                <button className='trip-crd-btn' onClick={() => onClick(id)}>View</button>
                <button className='trip-crd-btn trip-btn-right' onClick={() => onClick(id)}>Delete</button>
             </div>
            
        </div>
    );
}
 
export default TripCard;