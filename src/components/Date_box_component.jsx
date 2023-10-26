import React, { useState } from "react";
import "./Date_box_component.css";

export default function Date_box_component(props) {
  const currentDate = new Date().toISOString().split("T")[0]; // Get current date in "YYYY-MM-DD" format

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Function to update the start date
  const handleStartDateChange = (event) => {
    const selectedStartDate = event.target.value;

    if (selectedStartDate >= currentDate ) {
      setStartDate(selectedStartDate);
      props.onDateChange([selectedStartDate, endDate]); // Call the parent's callback function
    }
  };

  // Function to update the end date
  const handleEndDateChange = (event) => {
    const selectedEndDate = event.target.value;

    if (selectedEndDate >= startDate) {
      setEndDate(selectedEndDate);
      props.onDateChange([startDate, selectedEndDate]); // Call the parent's callback function
    }
  };

  return (
    <div className="DateButtonGrp row ">
      <div className="grp col-12 col-sm-6">
        <h6>Start Date</h6>
        <input
          className="linput box"
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          min={currentDate} // Set the minimum date to the current date
        />
      </div>
      <div className="grp col-12 col-sm-6">
        <h6>End Date</h6>
        <input
          className="linput box"
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
          min={startDate} // Set the minimum date to the start date
        />
      </div>
    </div>
  );
}
