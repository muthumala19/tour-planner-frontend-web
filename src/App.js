import './App.css';

import LandingScreen from "./screens/landing_screen";
import Destination from './screens/Destinations.jsx';
import Accomodation from './screens/accomodation_screen.jsx';
import './App.css';
import '../src/screens/auth_screen'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthScreen from "./screens/auth_screen";
import Choose_ride from "./screens/explore_your_Ideal_ride.jsx";


function App() {
    return (

      <div className="App">

      <BrowserRouter>


          <Routes>
              <Route exact path='/' element={<LandingScreen/>}></Route>
              <Route exact path='/destination' element={<Destination/>}></Route>
              <Route exact path='/accomodation' element={<Accomodation/>}></Route>
              <Route exact path='/explore_your_ideal_ride' element={<Choose_ride/>}></Route>
              <Route exact path='/sign_in' element={<AuthScreen isSignIn={true}/>}></Route>
              <Route exact path='/sign_up' element={<AuthScreen isSignIn={false}/>}></Route>
          </Routes>
      </BrowserRouter>
  </div>
      );
}

export default App;
