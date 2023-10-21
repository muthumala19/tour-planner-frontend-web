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
                        <Route path={'account'}
                               element={<ProtectedRoute element={<User activeScreen={'Account'}/>}/>}></Route>
                        <Route path={'settings'}
                               element={<ProtectedRoute element={<User activeScreen={'Settings'}/>}/>}></Route>
                    </Route>
                    <Route exact path='sign_in' element={<AuthScreen activeScreen={'sign_in'}/>}></Route>
                    <Route exact path='register' element={<AuthScreen activeScreen={'register'}/>}> </Route>
                    <Route exact path='register/sign_up' element={<AuthScreen activeScreen={'sign_up'}/>}></Route>
                    <Route exact path='/destinationForm' element={<Destination/>}></Route>
                    <Route exact path='/payment' element={<PaymentPage/>}></Route>
                    <Route exact path='/accommodationForm' element={<AccomodationForm/>}></Route>
                    <Route exact path='/explore_your_ideal_ride' element={<Choose_ride/>}></Route>
                    <Route exact path='/accomodation' element={<Accommodation/>}></Route>
                    <Route exact path='/sign_in' element={<AuthScreen isSignIn={true}/>}></Route>
                    <Route exact path='/sign_up' element={<AuthScreen isSignIn={false}/>}></Route>
                    <Route path='/destinations' element={<Destinations/>}/>
                    <Route path='/accommodations' element={<Accommodation/>}/>
                    <Route path='/room-selection' element={<RoomSelection/>}/>
                    <Route path='/saved-journeys' element={<SavedJourneys/>}/>
                    <Route path='/summary' element={<Summary/>}/>
                    <Route path='/vehicles' element={<Vehicles/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
