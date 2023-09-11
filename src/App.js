import { Button } from 'react-bootstrap';
import './App.css';
import Footer from "./components/Footer";
import NavBarComponent from './components/navbar_component';
import LandingScreen from "./screens/landing_screen";
import Destinations from './screens/destinations';
import Accommodation from './screens/accommodation';
import Summary from './screens/summary';
import SavedJourneys from './screens/savedJourneys';
import RoomSelection from './screens/roomSelection';
import { Route, Routes } from 'react-router-dom';
import Vehicles from './screens/vehicles';

function App() {
    return (
        <div className="App">
            <NavBarComponent/>
                <Routes>
                    <Route path='/destinations' element={<Destinations/>}/>
                    <Route path='/accommodations' element={<Accommodation/>}/>
                    <Route path='/room-selection' element={<RoomSelection/>}/>
                    <Route path='/saved-journeys' element={<SavedJourneys/>}/>
                    <Route path='/summary' element={<Summary/>}/>
                    <Route path='/vehicles' element={<Vehicles/>}/>
                </Routes>
            <Footer/>
        </div>
    );
}

export default App;
