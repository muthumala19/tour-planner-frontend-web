import React from "react";
import Location_btn_component from "../components/Location_btn_component.jsx";
import Date_box_component from "./Date_box_component.jsx";


export default function Destination_buttons_firstRow(){
    return(
        <div className='row'>
        <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12   " ><Date_box_component text="starting date"/></div> 
        <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12   "><Date_box_component text="end date"/></div>
        <div className="col-lg-4 col-xl-4 col-md-12 col-sm-12 col-xs-12   "><Location_btn_component/></div> 
        </div>
    )
}
