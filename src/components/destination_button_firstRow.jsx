import React from "react";
import Location_btn_component from "../components/Location_btn_component.jsx";
import Date_box_component from "./Date_box_component.jsx";


export default function Destination_buttons_firstRow(){
    return(
        <div className='row'>
            <div className="col-12 col-sm-6 col-lg-4"><Date_box_component text="starting date"/></div> 
            <div className="col-12 col-sm-6 col-lg-4"><Date_box_component text="end date"/></div>
            <div className="col-12 col-sm-12 col-lg-4"><Location_btn_component/></div> 
        </div>
    )
}
