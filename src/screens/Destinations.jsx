import NavBarComponent from '../components/navbar_component.jsx';
import Destination_buttons from '../components/Destination_buttons.jsx'
import "../components/Date_box_component.css";
import Footer from "../components/Footer.jsx";


function Destination(){
    return(
      <div>
        <div><NavBarComponent/></div>

        <div><Destination_buttons/></div> 

        <div><Footer/></div>
        
      </div>
      
    )
}

export default Destination;