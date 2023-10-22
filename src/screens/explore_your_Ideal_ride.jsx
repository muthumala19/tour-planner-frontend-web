import NavBarComponent from '../components/navbar_component.jsx';
import BookRide from '../components/explore_your_Ideal_ride_components.jsx'
import "../components/Date_box_component.css";
import  Footer_component from "../components/footer_component.jsx";
import "./cb.css"
import { useSearchParams } from 'react-router-dom';



export default function Choose_ride(){
    const navbarItems = [
        {label: 'Home', href: '#home'},
        {label: 'About Us', href: '#about_us'},
        {label: 'Contact Us', href: '#contact_us'}
    ];

    const [searchParams] = useSearchParams();

    const cin = searchParams.get("cin");
    const cout = searchParams.get("cout");
    const location = searchParams.get("lc");

    return(
      <div className='l-back'>
        <div className='bg-image'></div>
        <div><NavBarComponent items={navbarItems}/></div>

        <div><BookRide cin={cin} cout={cout} location={location} /></div> 

        <div><Footer_component/></div>
        
      </div>
      
    )
}
