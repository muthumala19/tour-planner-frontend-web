import './App.css';
import '../src/screens/auth_screen'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthScreen from "./screens/auth_screen";
import LandingScreen from "./screens/landing_screen";


function App() {
    return (
        <div className="App">

            <BrowserRouter>


                <Routes>
                    <Route exact path='/' element={<LandingScreen/>}></Route>
                    <Route exact path='/sign_in' element={<AuthScreen isSignIn={true}/>}></Route>
                    <Route exact path='/sign_up' element={<AuthScreen isSignIn={false}/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
