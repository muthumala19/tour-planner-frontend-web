import {useEffect, useState} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {Navigate} from "react-router-dom";

export default function ProtectedRoute({element}) {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        return onAuthStateChanged(auth, async (user) => {
            if (user) {
                setAuthUser(user);
            }
        });
    }, []);

    return authUser ? element : <Navigate to={'/sign_in'}/>;

}