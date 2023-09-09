import { Button } from 'react-bootstrap';
import './App.css';
import Footer from "./components/Footer";
import NavBarComponent from './components/navbar_component';
import LandingScreen from "./screens/landing_screen";
import Destinations from './screens/destinations';
import Accommodation from './screens/accommodation';
import Summary from './screens/summary';
import SavedJourneys from './screens/savedJourneys';

function App() {
    return (
        <div className="App">
            <NavBarComponent/>
            <SavedJourneys/>
            <Footer/>
        </div>
    );
}

export default App;
