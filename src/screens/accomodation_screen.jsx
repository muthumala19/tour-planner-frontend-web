import NavBarComponent from '../components/navbar_component.jsx';
import Accomodation_page_btns from '../components/accomodation_pge_component.jsx'
import "../components/Date_box_component.css";
import Footer_component from "../components/footer_component.jsx";



export default function Accomodation(){

  const navbarItems = [
    {label: 'Home', href: '#home'},
    {label: 'About Us', href: '#about_us'},
    {label: 'Contact Us', href: '#contact_us'},
];

    return(
      <div>
        <div><NavBarComponent items={navbarItems}/></div>

        <div><Accomodation_page_btns/></div> 

        <div><Footer_component/></div>
        
      </div>
      
    )
}
