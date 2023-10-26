import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faVanShuttle,faCarSide} from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';

export default function Ride_choose_component(){
    const [ride,setRide]=useState("");

    function Option1(){
        setRide("option1");
        console.log(ride);
    }

    function Option2(){
        setRide("option2");
        console.log(ride);
    }

    function Option3(){
        setRide("option3");
        console.log(ride);
    }

    return(
        <div  style={{display:"flex",gap:"10px" , justifyContent:"center"}}>
            <input type="radio" className="btn-check" name="options" id="option1"  value="option1" onChange={Option1}/>
            <label className="btn btn-primary" for="option1"><FontAwesomeIcon icon={faEnvelope} style={{fontSize:"30px",justifyContent:"left"}}/> </label>

            <input type="radio" className="btn-check" name="options" id="option2"  value="option2" onChange={Option2} />
            <label className="btn btn-primary" for="option2"><FontAwesomeIcon icon={faCarSide} style={{fontSize:"30px",justifyContent:"left"}}/></label>

            <input type="radio" className="btn-check" name="options" id="option3"  value="option3" onChange={Option3}/>
            <label className="btn btn-primary" for="option3"><FontAwesomeIcon icon={faVanShuttle} style={{fontSize:"30px",justifyContent:"left"}}/></label>
        </div>
    )
}