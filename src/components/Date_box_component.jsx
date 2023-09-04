import React,{useState} from "react";
import "./Date_box_component.css";


export default function Date_box_component(props){
  const[date, setDate]=useState();

  return (
    <>
      <div className="grp">
        <h4>{props.text}</h4>
        <input className="box" type='date' onChange={event=>setDate(event.target.value)} />
      </div>
    </> 
  );
}

