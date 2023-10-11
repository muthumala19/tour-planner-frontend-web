import './App.css';
import '../src/screens/auth_screen'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingScreen from "./screens/landing_screen";
import User from "./screens/user_screen";
import AuthScreen from "./screens/auth_screen";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index element={<LandingScreen/>}></Route>
                    <Route exact path='user' element={<User activeScreen={'Profile'}/>}>
                        <Route path={'profile'} element={<User activeScreen='Profile'/>}></Route>
                        <Route path={'account'} element={<User activeScreen={'Account'}/>}></Route>
                        <Route path={'settings'} element={<User activeScreen={'Settings'}/>}></Route>
                    </Route>
                    <Route exact path='sign_in' element={<AuthScreen activeScreen={'sign_in'}/>}></Route>
                    <Route exact path='register' element={<AuthScreen activeScreen={'register'}/>}> </Route>
                    <Route exact path='register/sign_up' element={<AuthScreen activeScreen={'sign_up'}/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
