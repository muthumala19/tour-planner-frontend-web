import React from "react";
import { useState } from "react";
import "./IncrementBtn_component.css";


export default function Inc_Dec_btn(props){
    let [num, setNum]= useState(0);
    let incNum =()=>{
      if(num<20)
      {
      setNum(Number(num)+1);
      }
    };
    let decNum = () => {
       if(num>0)
       {
        setNum(num - 1);
       }
    }
   let handleChange = (e)=>{
     setNum(e.target.value);
    }
     return(
      <>
        <div className="col-6">
        <h5>{props.text}</h5>
            <div className="quantity-grp">
                
                <div className="input-group-prepend">
                    <button className="btn2" type="button" onClick={decNum}>-</button>
                </div>
                <input type="text" className="input-btn" value={num} onChange={handleChange}/>
                <div className="input-group-prepend">
                    <button className="btn2" type="button" onClick={incNum}>+</button>
                </div>
            </div>
        </div>
     </>
    );
  
}