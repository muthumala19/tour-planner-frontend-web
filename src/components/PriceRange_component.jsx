import React,{useState} from "react";
import Slider from 'react-slider';
import "./PriceRange_component.css"

const PriceRange_component = () => {
    const [values, setValues] = useState([10000, 100000]);
    const handleChange = (newValues) => setValues(newValues);
  
    return (
      <div className="SliderDiv">
        <h2>Price Range</h2>
        <Slider
          className="slider"
          value={values}
          onChange={handleChange}
          min={10000}
          max={100000}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <input
              type="number"
              id="minPrice"
              value={values[0]}
              onChange={(e) => handleChange([+e.target.value, values[1]])}
            />
          </div>
          <div>
            <input
              type="number"
              id="maxPrice"
              value={values[1]}
              onChange={(e) => handleChange([values[0], +e.target.value])}
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default PriceRange_component;
