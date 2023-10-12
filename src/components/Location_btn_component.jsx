import React, { useState } from "react";
import "../components/Location_btn_component.css";
var data = require("./town.json");

export default function Location_btn_component(props) {
  const [value, setValue] = useState("");

  // const handleLocationChange = (event) => {
  //   const selectedLocation = event.target.value;
  //   props.onLocationChange(cityName); // Call the parent's callback function
  // };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onCityClick = (cityName) => {
    props.onLocationChange(cityName); // Call the parent's callback function
    setValue(cityName);
    props.onLocationChange(cityName);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
  };

  return (
    <div className="LocationBtn">
      <h4 style={{ textAlign: "center" }}>Destination Town</h4>
      <div className="search-container">
        <div className="search-inner">
          <input className="linput" type="text" value={value} onChange={onChange} />
          <button className="lbtn search-btn" onClick={() => onSearch(value)}>
            Search
          </button>
        </div>
        <div className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const cityName = item.city_name.toLowerCase();

              return (
                searchTerm &&
                cityName.startsWith(searchTerm) &&
                cityName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onCityClick(item.city_name)} // Call onCityClick with the selected cityName
                className="dropdown-row"
                key={item.city_name}
              >
                {item.city_name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
