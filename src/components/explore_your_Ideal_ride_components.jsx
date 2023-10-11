import React,{useState} from "react"
import Date_box_component from "./Date_box_component.jsx";
import Location_btn_component from "./Location_btn_component.jsx";
import PriceRange_component from './PriceRange_component.jsx';
import Inc_Dec_btn from "./IncrementBtn_component.jsx";
import "./accomodation_pge_component.css";
import "./explore_your_Ideal_ride_components.css";
import Ride_choose_component from "./Ride_choose_component.jsx";


export default function Explore_your_Ideal_ride() {

  const [startDate, setStartDate] = useState(""); // State to store selected date
  const [endDate, setEndDate] = useState(""); // State to store selected date
  const [location, setLocation] = useState(""); // State to store selected location
  const [priceRange, setPriceRange] = useState(""); // State to store selected price range


  const rideData = {
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


  // Explore button
  function exploreClick() {
    console.log("Explore clicked")
    console.log(startDate)
    console.log(endDate)
    console.log(location)
    // console.log("clicked")
    // axios.post("http://localhost:5000/destination/api/tour/location", destinationData)
    // .then(res => console.log(res.data))
    console.log(priceRange)
  }

  // Skip Accomodation button
  function skipAcmdClick() {
    console.log("Skip Accomodation clicked")
  }

  return (
    <div>
      <div className="row">
        <h1 className="FindYourPerfectStay">Explore Your Ideal Ride</h1>
      </div>

      {/* Date, Location, Accomodation, Price Range, Explore, Skip Accomodation buttons */}

      <div className='row'>
        <div className="col-12 col-sm-6 col-lg-4"><Date_box_component text="Starting date" onDateChange={handleStartDateChange}/></div>
        <div className="col-12 col-sm-6 col-lg-4"><Date_box_component text="End date" onDateChange={handleEndDateChange}/></div>
        <div className="col-12 col-sm-12 col-lg-4"><Location_btn_component onLocationChange={handleLocationChange}/></div>
      </div>
      <div className="row accomodation" >
        <div className="col"><Inc_Dec_btn text="No. of Adults" /></div>
        <div className="col"><Inc_Dec_btn text="No. of Childs" /></div>
      </div>

      {/* Ride Choose Component */}
      <Ride_choose_component />

      {/* Price Range Slider */}
      <div className="row">
        <div className="col-12 col-sm-12"><PriceRange_component onPriceChange={handlePriceChange}/></div>
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
          <button className="Skip-accomodation-btn" onClick={skipAcmdClick}>Skip Transport</button>
        </div>
      </div>
    </div>
  )
}