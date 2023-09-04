import React from "react"
import Date_box_component from "../components/Date_box_component.jsx";
import "../components/Destination_buttons.css"
import Location_btn_component from "../components/Location_btn_component.jsx";
import PriceRange_component from '../components/PriceRange_component.jsx';
import Inc_Dec_btn from "./IncrementBtn_component.jsx";

export default function Destination_buttons(){

  function onClick(){
    console.log("clicked")
  }
    return(
      <div className="row">
        <div className='row'>
          <div className="col-12 col-lg-4"><Date_box_component text="starting date"/></div> 
          <div className="col-12 col-lg-4"><Date_box_component text="end date"/></div>
          <div className="col-12 col-lg-4"><Location_btn_component/></div> 
        </div>
        <div className="row">
          <Inc_Dec_btn/>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12"><PriceRange_component/></div>
        </div>

        <div className="row">
          <div className="container">
            <div className="d-flex justify-content-center">
              <button className="btn1" onClick={onClick}>Explore</button>
            </div>
          </div>
        </div>

      </div>

      
    )
}