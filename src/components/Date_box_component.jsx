import React from "react";
import "./Date_box_component.css";

export default function Date_box_component(props) {
  
  // Callback function to pass the selected date to the parent
  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    props.onDateChange(selectedDate); // Call the parent's callback function
  };

  return (
    <>
      <div className="grp">
        <h4>{props.text}</h4>
        <input className="linput box" type="date" onChange={handleDateChange} />
      </div>
    </>
  );
}
