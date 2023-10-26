import React from "react";
//import axios from "axios";
import "../components/Destination_buttons.css";
import { useState } from "react";
import Location_btn_component from "../components/Location_btn_component.jsx";
import Date_box_component from "./Date_box_component.jsx";
import { useNavigate } from "react-router-dom";
// import LocationBttn from "./LocationSeacrhAPI";

export default function Destination_buttons(){
  const [DateRange, setDateRange] = useState([]); // State to store selected date
  const [location, setLocation] = useState(""); // State to store selected location

  const navigate = useNavigate();

  // const destinationData = {
  //   startDate: startDate,
  //   endDate: endDate,
  //   location: location
  //   // add userID as well.
  //   // add trip ID 
  // }

  // Callback function to handle date change and update state
  const handleDateChange = (selectedDate) => {
    setDateRange(selectedDate);

  };

  //Callback function to handle the location button
  const handleLocationChange = (selectedLocation) => {
    setLocation(selectedLocation);
  };

  const isFormValid = location && DateRange.length >0;

  // when explore button is clicked the data is sent to the backend
  function onClick(){
    if(isFormValid){
    console.log(DateRange)
    console.log(location)
    navigate(`/destinations?cin=${DateRange[0]}&cout=${DateRange[1]}&lc=${location}`)
    }
    else{
      alert("Please enter all the details")
    }
  }
    return(
      <div >

        <div className="row">
          <div className="col-12 col-sm-12 col-lg-12">
            <Date_box_component text="starting date" onDateChange={handleDateChange} />
          </div>
          <div className="col-12 col-sm-12 col-lg-12 locationDropdown" >
            <Location_btn_component onLocationChange={handleLocationChange}/>
          </div>
        </div>
        
        <div style={{paddingTop:'80px'}}>  
            <div className="d-flex justify-content-center">
              <button className="lbtn explore-btn" onClick={onClick}><b>Explore</b></button>
            </div>
        </div>
      </div>  
    )
}