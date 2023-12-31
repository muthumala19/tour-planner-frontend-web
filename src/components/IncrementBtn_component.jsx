import React from "react";
import { useState } from "react";
import "./IncrementBtn_component.css";


export default function Inc_Dec_btn(props){
    let [num, setNum]= useState(0);
    
    let incNum =()=> {
      if(num<20)
      {
      setNum(num+1);
      }

      props.onChange(num);
    };
    let decNum = () => {
       if(num>0)
       {
        setNum(num - 1);
       }
       props.onChange(num);
    }
   let handleChange = (e)=>{
     setNum(e.target.value);
    }
     return(
      <>
        <div className="row">
        
          <div className="inc-btn-component" >
            
            <div className="inc-btn-withHeader">
            <div><h5>{props.text}</h5></div>
            <div className="incr-btn">
                    <div className="input-group-prepend">
                        <button className="lbtn btn2" type="button" onClick={decNum}>-</button>
                    </div>
                    <input type="text" className="linput input-btn" value={num} onChange={handleChange}/>
                    <div className="input-group-prepend">
                        <button className="lbtn btn2" type="button" onClick={incNum}>+</button>
                    </div>
                </div>
            </div>

          </div>
        </div>
     </>
    );
  
}