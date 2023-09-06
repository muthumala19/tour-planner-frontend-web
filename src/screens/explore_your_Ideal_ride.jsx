import NavBarComponent from '../components/navbar_component.jsx';
import Accomodation_page_btns from '../components/accomodation_pge_component.jsx'
import "../components/Date_box_component.css";
import Footer from "../components/Footer.jsx";



export default function Vehicle_data_enert(){
    return(
      <div>
        <div><NavBarComponent/></div>

        <div><Accomodation_page_btns/></div> 

        <div><Footer/></div>
        
      </div>
      
    )
}
