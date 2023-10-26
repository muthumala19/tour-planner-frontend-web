import React,{useState} from "react"
import Date_box_component from "./Date_box_component.jsx";
import "../components/Destination_buttons.css"
import Location_btn_component from "../components/Location_btn_component.jsx";
import PriceRange_component from '../components/PriceRange_component.jsx';
import Inc_Dec_btn from "./IncrementBtn_component.jsx";
import "./accomodation_pge_component.css";
import { useNavigate } from "react-router-dom";

export default function Accomodation_page_btns(){

  const [DateRange, setDateRange] = useState([]); // State to store selected date
  const [location, setLocation] = useState(""); // State to store selected location
  const [priceRange, setPriceRange] = useState(""); // State to store selected price range

  const [adult, setAdult] = useState("");
  const [child, setChild] = useState("");
  const navigation = useNavigate();



  const rideData = {
    startDate: DateRange[0],
    endDate: DateRange[1],
    location: location
    // add userID as well.
    // add trip ID 
  }

  // Callback function to handle date change and update state
  const handleDateChange = (selectedDate) => {
    setDateRange(selectedDate);
  };


  //Callback function to handle the location button
  const handleLocationChange = (selectedLocation) => {
    setLocation(selectedLocation);
  };

  
  //Callback function to handle the price range
  const handlePriceChange = (selectedPrice) => {
    setPriceRange(selectedPrice);
  };

  const handleAdultChange = (val) => {
    setAdult(val);
  }

  const handleChildChange = (val) => {
    setChild(val);
  }


  // Explore button
  function exploreClick(){
    console.log("Explore clicked")
    console.log(DateRange)
    console.log(location)
    console.log(priceRange)
    navigation(`/accommodations?cin=${DateRange[0]}&cout=${DateRange[1]}&adult=${adult}&child=${child}`)
  }

  // Skip Accomodation button
  function skipAcmdClick(){
    console.log("Skip Accomodation clicked")
  }

  return(
    <div>
      <div className="row">
        <h1 className="FindYourPerfectStay">Find your Perfect stay</h1>
      </div>
      
      {/* Date, Location, Accomodation, Price Range, Explore, Skip Accomodation buttons */}

      <div className='row'>
        <div className="col-12 col-sm-8 col-lg-8 col-md-12"><Date_box_component onDateChange={handleDateChange}/></div> 
        <div className="col-12 col-sm-4 col-lg-4 col-md-12"><Location_btn_component onLocationChange={handleLocationChange}/></div> 
      </div>
      <div className="row accomodation" >
        <div className="col" ><Inc_Dec_btn onChange={handleAdultChange} text="No. of Adults"/></div>
        <div className="col"><Inc_Dec_btn onChange={handleChildChange} text="No. of Childs"/></div>    
      </div>

      {/* Price Range Slider */}
      <div className="row">
        <div className="col-12 col-sm-12"><PriceRange_component onPriceChange={handlePriceChange}/></div>
      </div>

      {/* Explore button */}
      <div className="row">
        <div className="d-flex justify-content-center">
          <button className="lbtn explore-btn" onClick={exploreClick}>Explore</button>
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