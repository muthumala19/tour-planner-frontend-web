import React from "react";
//import axios from "axios";
import "../components/Destination_buttons.css";
import { useState } from "react";
import Location_btn_component from "../components/Location_btn_component.jsx";
import Date_box_component from "./Date_box_component.jsx";
import PriceRange_component from '../components/PriceRange_component.jsx';

export default function Destination_buttons(){
  const [startDate, setStartDate] = useState(""); // State to store selected date
  const [endDate, setEndDate] = useState(""); // State to store selected date
  const [location, setLocation] = useState(""); // State to store selected location
  const [priceRange, setPriceRange] = useState(""); // State to store selected price range


  const destinationData = {
    startDate: startDate,
    endDate: endDate,
    location: location
    // add userID as well.
    // add trip ID 
  }

  // Callback function to handle date change and update state
  const handleStartDateChange = (selectedDate) => {
    setStartDate(selectedDate);
  };

  const handleEndDateChange = (selectedDate) => {
    setEndDate(selectedDate);
  };

  //Callback function to handle the location button
  const handleLocationChange = (selectedLocation) => {
    setLocation(selectedLocation);
  };

  //Callback function to handle the price range
  const handlePriceChange = (selectedPrice) => {
    setPriceRange(selectedPrice);
  };

  // when explore button is clicked the data is sent to the backend
  function onClick(){
    console.log(startDate)
    console.log(endDate)
    console.log(location)
    // console.log("clicked")
    // axios.post("http://localhost:5000/destination/api/tour/location", destinationData)
    // .then(res => console.log(res.data))
    console.log(priceRange)
  }
    return(
      <div >

        <div className="row">
          <div className="col-12 col-sm-6 col-lg-4">
            <Date_box_component text="starting date" onDateChange={handleStartDateChange} />
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <Date_box_component text="end date" onDateChange={handleEndDateChange} />
          </div>
          <div className="col-12 col-sm-12 col-lg-4">
            <Location_btn_component onLocationChange={handleLocationChange}/>
          </div>
          {/* Display the selected date
            {startDate && <p>Selected Start Date: {startDate}</p>} */}
        </div>
  

        <PriceRange_component onPriceChange={handlePriceChange} />
        
        <div>  
            <div className="d-flex justify-content-center">
              <button className="explore-btn" onClick={onClick}><b>Explore</b></button>
            </div>
        </div>
      </div>  
    )
}