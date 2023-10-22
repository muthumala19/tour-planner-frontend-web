import './App.css';
import '../src/screens/auth_screen'
import Destination from './screens/DestinationForm.jsx';
import AccomodationForm from './screens/accomodation_screen.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthScreen from "./screens/auth_screen";
import Choose_ride from "./screens/explore_your_Ideal_ride.jsx";
import PaymentPage from "./screens/Payment_screen.jsx";
import User from "./screens/user_screen";
import LandingScreen from "./screens/landing_screen";
import Accommodation from './screens/accommodation';
import ProtectedRoute from "./components/protected_route";
import RoomSelection from './screens/roomSelection';
import SavedJourneys from './screens/savedJourneys';
import Summary from './screens/summary';
import Vehicles from './screens/vehicles';
import Destinations from './screens/destinationRecom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index element={<LandingScreen/>}></Route>
                    <Route exact path='user' element={<ProtectedRoute element={<User activeScreen={'Profile'}/>}/>}>
                        <Route path={'profile'}
                               element={<ProtectedRoute element={<User activeScreen={'Profile'}/>}/>}></Route>
                        <Route path={'billing'}
                               element={<ProtectedRoute element={<User activeScreen={'Billing'}/>}/>}></Route>
                        <Route path={'settings'}
                               element={<ProtectedRoute element={<User activeScreen={'Settings'}/>}/>}></Route>
                        <Route path={'pricing_plans'}
                               element={<ProtectedRoute element={<User activeScreen={'Pricing Plans'}/>}/>}></Route>
                        <Route path={'journeys'}
                               element={<ProtectedRoute element={<User activeScreen={'Journeys'}/>}/>}></Route>
                        <Route path={'history'}
                               element={<ProtectedRoute element={<User activeScreen={'History'}/>}/>}></Route>
                    </Route>
                    <Route exact path='sign_in' element={<AuthScreen activeScreen={'sign_in'}/>}></Route>
                    <Route exact path='register' element={<AuthScreen activeScreen={'register'}/>}> </Route>
                    <Route exact path='register/sign_up' element={<AuthScreen activeScreen={'sign_up'}/>}></Route>

                    <Route exact path='/destinationForm' element={<ProtectedRoute element={<Destination/>}/>}></Route>
                    <Route exact path='/payment' element={<ProtectedRoute element={<PaymentPage/>}/>}></Route>
                    <Route exact path='/accommodationForm'
                           element={<ProtectedRoute element={<AccomodationForm/>}/>}></Route>
                    <Route exact path='/explore_your_ideal_ride'
                           element={<ProtectedRoute element={<Choose_ride/>}/>}></Route>
                    <Route exact path='/accomodation' element={<ProtectedRoute element={<Accommodation/>}/>}></Route>

                    <Route path='/destinations' element={<ProtectedRoute element={<Destinations/>}/>}/>
                    <Route path='/accommodations' element={<ProtectedRoute element={<Accommodation/>}/>}/>
                    <Route path='/room-selection' element={<ProtectedRoute element={<RoomSelection/>}/>}/>
                    <Route path='/saved-journeys' element={<ProtectedRoute element={<SavedJourneys/>}/>}/>
                    <Route path='/summary' element={<ProtectedRoute element={<Summary/>}/>}/>
                    <Route path='/vehicles' element={<ProtectedRoute element={<Vehicles/>}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
