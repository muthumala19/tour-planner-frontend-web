import React,{useState} from "react";
import ReactSlider from 'react-slider';
import "./PriceRange_component.css"

const PriceRange_component = (props) => {

  const [values, setValues] = useState([10000, 100000]);
  const handleChange = (newValues) => {
    setValues(newValues)
    props.onPriceChange(newValues)
  };
  
    return (
      <div className="test1">
        <div className="SliderDiv">
          <h2>Price Range</h2>
          

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
              <input className="linput" style={{width:"90px"}}
                type="number"
                id="minPrice"
                value={values[0]}
                onChange={(e) => handleChange([+e.target.value, values[1]])}
              />
            </div>
            <ReactSlider
            className="slider"
            value={values}
            onChange={handleChange}
            min={10000}
            max={100000}
          />
            <div>
              <input
              className="linput"
              style={{width:"90px"}}
              type="number"
              id="maxPrice"
              value={values[1]}
              onChange={(e) => handleChange([values[0], +e.target.value])}
              />
            </div>
          </div>
        </div>
      </div>


      
    );
  };
  
  export default PriceRange_component;
