import React from "react"
import Date_box_component from "./Date_box_component.jsx";
import "../components/Destination_buttons.css"
import Location_btn_component from "../components/Location_btn_component.jsx";
import PriceRange_component from '../components/PriceRange_component.jsx';
import Inc_Dec_btn from "./IncrementBtn_component.jsx";
import "./accomodation_pge_component.css";

export default function Accomodation_page_btns(){

  // Explore button
  function exploreClick(){
    console.log("Explore clicked")
  }

  // Skip Accomodation button
  function skipAcmdClick(){
    console.log("Skip Accomodation clicked")
  }

  return(
    <div>
      <div className="row">
        <h1 className="FindYourPerfectStay" style={{}}>Find your Perfect stay</h1>
      </div>
      
      {/* Date, Location, Accomodation, Price Range, Explore, Skip Accomodation buttons */}

      <div className='row'>
        <div className="col-12 col-lg-4"><Date_box_component text="starting date"/></div> 
        <div className="col-12 col-lg-4"><Date_box_component text="end date"/></div>
        <div className="col-12 col-lg-4"><Location_btn_component/></div> 
      </div>
      <div className="row accomodation" >
        <div className="col" ><Inc_Dec_btn text="No. of Adults"/></div>
        <div className="col"><Inc_Dec_btn text="No. of Childs"/></div>    
      </div>

      {/* Price Range Slider */}
      <div className="row">
        <div className="col-12 col-sm-12"><PriceRange_component/></div>
      </div>

      {/* Explore button */}
      <div className="row">
        <div className="d-flex justify-content-center">
          <button className="explore-btn" onClick={exploreClick}>Explore</button>
        </div>  
      </div>

      {/* Skip Accomodation button */}
      <div className="row">
        <div className="d-flex justify-content-center">
          <button className="Skip-accomodation-btn" onClick={skipAcmdClick}>Skip Accomodation</button>
        </div>   
      </div>
    </div>

      
    )
}