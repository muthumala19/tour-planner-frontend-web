import NavBarComponent from '../components/navbar_component.jsx';
import Destination_buttons from '../components/Destination_buttons.jsx'
import "../components/Date_box_component.css";
import Footer_component from "../components/Footer_component.jsx";



function Destination(){

  const navbarItems = [
    {label: 'Home', href: '#home'},
    {label: 'About Us', href: '#about_us'},
    {label: 'Contact Us', href: '#contact_us'},
    {label: 'Register', href: '/register'},
    {label: 'Sign In', href: '/sign_in'},
  ];
    return(
      <div>
        <div><NavBarComponent items={navbarItems}/></div>

        <div><Destination_buttons/></div> 

        <div><Footer_component/></div>
        
      </div>
      
    )
}

export default Destination;