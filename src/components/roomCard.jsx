import React, { Component } from 'react'
import "./roomCard.css"
import { FaCalendar, FaCheck } from 'react-icons/fa';
import PhotoTransition from './photoTransition';

const RoomCard = ({id, isSelected, description, highlights, photos, onClick}) => {
    console.log(photos)
    return ( 
        <React.Fragment>
            <div className='room-crd-container'>
                {/* <img className='room-crd-picture' src={image} placeholder='Room-Image'/> */}
                <PhotoTransition photos={photos}/>
                <div className='room-crd-content'>
                    <p className='room-crd-description'>{description}</p>

                    <div className='room-crd-tags-container'>
                        <h2 className='room-crd-tags-title'>Highlight Features</h2>

                        <div className='room-crd-tags'>
                            {highlights.map((item,index) => {
                                return <div key={index} className='room-crd-tag'><FaCheck style={{color: "green"}}/> {item.translated_name}</div>
                            })}
                        </div>

                        <button className={isSelected ? 'room-crd-btn room-crd-btn-active': 'room-crd-btn'} onClick={() => onClick(id)}>{isSelected ? "Selected": "Select"}</button>

                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default RoomCard;