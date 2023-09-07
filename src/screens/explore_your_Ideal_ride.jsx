import NavBarComponent from '../components/navbar_component.jsx';
import BookRide from '../components/explore_your_Ideal_ride_components.jsx'
import "../components/Date_box_component.css";
import  Footer_component from "../components/Footer_component.jsx";



export default function Choose_ride(){
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

        <div><BookRide  /></div> 

        <div><Footer_component/></div>
        
      </div>
      
    )
}
