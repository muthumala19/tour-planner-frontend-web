import React from "react"
import "../components/Destination_buttons.css"
import Destination_buttons_firstRow from "./destination_button_firstRow.jsx"
import PriceRange_component from '../components/PriceRange_component.jsx';
import Inc_Dec_btn from "./IncrementBtn_component.jsx";

export default function Destination_buttons(){

  function onClick(){
    console.log("clicked")
  }
    return(
      <div >
        <Destination_buttons_firstRow/>

        <PriceRange_component/>

        <div>  
            <div className="d-flex justify-content-center">
              <button className="explore-btn" onClick={onClick}><b>Explore</b></button>
            </div>
        </div>

      </div>

      
    )
}