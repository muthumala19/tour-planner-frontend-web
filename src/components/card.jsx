import React, { Component } from 'react'
import { FaMapMarkedAlt } from 'react-icons/fa';
import Button from './button';
import "./card.css"
import { Link } from 'react-router-dom';

const Card = ({id, title, location, image, tags, tagLabel, onClick}) => {
    return (
        <div className='crd-containter'>
            <img className='crd-image' src={image} placeholder={title}></img>
            <h1 className='crd-title'>{title}</h1>
            <div className='crd-location'>
                <FaMapMarkedAlt/>
                <h2 className='crd-location-title'>{location}</h2>
            </div>

            <div className='crd-tags'>
                <h2 className='crd-tags-title'>{tagLabel}: </h2>

                <div className='tags'>
                                    {tags.map((tag,index) => {
                    return <div key={index} className='crd-tag'>{tag}</div>
                })}
                </div>

             </div>

            <Link className='crd-maplink' to="https://www.google.com/maps/place/University+of+Moratuwa">explore location on map</Link>

            <button className='crd-btn' onClick={() => onClick(id)}>Save</button>
            
        </div>
    );
}
 
export default Card;