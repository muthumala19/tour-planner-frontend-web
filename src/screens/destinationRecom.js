import React, { Component, useEffect, useState } from 'react'
import Button from '../components/button';
import "./destinationRecom.css"
import DestinationCard from '../components/Destinationcard';
import pic1 from "../images/templeoftooth.jpg"
import pic2 from "../images/garden.jpg"
import pic3 from "../images/musium.jpg"
import pic4 from "../images/saree.jpg"
import pic5 from "../images/demodara.jpg"
import pic6 from "../images/nelligala.jpg"
import Pagination from '../components/pagination';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import NavBarComponent from '../components/navbar_component';
import Footer from '../components/footer_component';
import { getDestinations } from '../backend/destinationGeneration';

const Destinations = () => {
    const tags = ['Nature', 'Adventure', 'Hiking'];
    const [dests, setDest] = useState();
    const [cards, setCards] = useState(null);

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const lc = searchParams.get("lc");

    function replaceThumbnailUrl(originalUrl) {
    // Use the replace method to replace "w92-h92" with the replacement string
    const updatedUrl = originalUrl.replace("w92-h92","w800-h800");
    return updatedUrl;
  }

      
    const handleClick = (key) => {

    };

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getDestinations(lc);
                setDest(data);
                const values = data.map((value, index) => {
                    const tags = [`${value.rating} from ${value.ratingCount}`];
                    return <DestinationCard key={1} id={1} title={value.title} location={lc} tags={tags} tagLabel="Ratings" image={replaceThumbnailUrl(value.thumbnailUrl)} onClick={handleClick} />
                });
                setCards(values);
            } catch (error) {
                console.error('Error fetching hotel data:', error);
            }

            
        };

        fetchData();
        }, []);

    const handleNexStep = () => {
        navigate("/accommodationForm");
    }

    const tag1 = ['Religious', 'History'];
    const tag2 = ['Nature', 'Adventure'];
    const tag3 = ['History', 'Knowladge'];

    const cardComponents = [
        <DestinationCard key={1} id={1} title="Temple of Tooth" location="Kandy" tags={tag1} tagLabel="Location tags" image={pic1} onClick={handleClick} />,
        <DestinationCard key={2} id={2} title="Royal Gardens" location="Peradeniya" tags={tag2} tagLabel="Location tags" image={pic2} onClick={handleClick} />,
        <DestinationCard key={3} id={3} title="National Museum" location="Kandy" tags={tag3} tagLabel="Location tags" image={pic3} onClick={handleClick} />,
        <DestinationCard key={4} id={1} title="Saree Ella" location="Kandy" tags={tag1} tagLabel="Location tags" image={pic4} onClick={handleClick} />,
        <DestinationCard key={5} id={2} title="Nine Arches Bridge" location="Demodara" tags={tag2} tagLabel="Location tags" image={pic5} onClick={handleClick} />,
        <DestinationCard key={6} id={3} title="Nelligala" location="Kandy" tags={tag3} tagLabel="Location tags" image={pic6} onClick={handleClick} />,
    ];

    const handleTripChange = () => {
        navigate("/destinationForm");
    }

    const navbarItems = [
        {label: 'Home', href: '/'},
    ];


    return (
        <React.Fragment>
        <NavBarComponent items={navbarItems}/>
            <div className='dst'>
                <div className='dst-container'>
                    <h1 className='dst-heading'>Recommended places to visit in {lc}</h1>
                    <div className='dst-btn'>
                        <Button text="Change Trip Data" style={{padding:"6px 18px 6px 18px"}} onClick={handleTripChange}></Button>
                    </div>
                    <div className='dst-cards'>
                        {cards && <Pagination data={cards} itemsPerPage={6}/>}
                    </div>
                    <div className='dst-btn'>
                        <Button text="Next Step" style={{padding:"6px 18px 6px 18px"}} onClick={handleNexStep}></Button>
                    </div>
                    </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
}
 
export default Destinations;