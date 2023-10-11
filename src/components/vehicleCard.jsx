import React, { Component } from 'react'
import { FaCar, FaMapMarkedAlt } from 'react-icons/fa';
import Button from './button';
import "./vehicleCard.css"
import { Link } from 'react-router-dom';

const VehicleCard = ({id, isSelected, title, car,  vh_id, image, cost, ratings, onClick}) => {
    return (
        <div className='vh-crd-containter'>
            <img className='vh-crd-image' src={image} placeholder={title}></img>
            <h1 className='vh-crd-title'>{title}</h1>
            <div className='vh-crd-location'>
                <FaCar/>
                <h2 className='vh-crd-location-title'>{car}</h2>
            </div>

            <div className='vh-crd-tags'>
                <h2 className='vh-crd-tags-title'>Ratings: {ratings} Out of 10. </h2>

                {/* <div className='tags'>
                    <div className='vh-crd-tag'>{ratings[1]}</div>
                </div> */}

             </div>

            <div className='vh-crd-cost'>
                <div className='vh-crd-cost-title'>Approximate Cost: {cost.toLocaleString()} </div>
            </div>

            <Link className='vh-crd-maplink' to="https://www.google.com/maps/place/University+of+Moratuwa">explore location on map</Link>

            <button className={isSelected ? 'vh-crd-btn vh-crd-btn-active':'vh-crd-btn'} onClick={() => onClick(id, vh_id)}>{isSelected ? "Selected": "Select"}</button>
            
        </div>
    );
}
 
export default VehicleCard;