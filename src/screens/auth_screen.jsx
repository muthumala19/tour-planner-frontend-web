import NavBarComponent from "../components/navbar_component";
import SignIn from "../components/signin_component";
import SignUp from "../components/signup_component";
import Register from "../components/register_component";
import {useState} from "react";

export default function AuthScreen({activeScreen}) {
    const navbarItems = [
        {label: 'Home', href: '/'},

    ];
    let [screen, setScreen] = useState(activeScreen);


    switch (activeScreen) {
        case 'sign_in':
            screen = <SignIn/>;
            break;
        case 'sign_up':
            screen = <SignUp/>;
            break;
        case 'register':
            screen = <Register/>;
            break;
    }
    return (<div>
            <div className={'navbar_position'}>
                <NavBarComponent items={navbarItems}/>
            </div>
            <div className={'background'}>
                <div className="scrollable-content">
                    {screen}
                </div>
            </div>
        </div>

    );
}