import NavBarComponent from "../components/navbar_component";
import SignIn from "../components/signin_component";
import {useState} from "react";
import SignUp from "../components/signup_component";

export default function AuthScreen({isSignIn}) {
    const [signIn, setSignIn] = useState(isSignIn);
    const navbarItems = [
        {label: 'Home', href: '#home'},

    ];
    return (<div>
            <div className={'navbar_position'}>
                <NavBarComponent items={navbarItems}/>
            </div>
            <div className={'background'}>
                <div className="scrollable-content">
                    {isSignIn ? <SignIn/> : <SignUp/>}
                </div>
            </div>
        </div>

    );
}