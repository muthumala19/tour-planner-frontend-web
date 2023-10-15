import {useEffect, useState} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {Navigate} from "react-router-dom";

export default function ProtectedRoute({element}) {
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setAuthUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {

        return null;
    }

    return authUser ? element : <Navigate to="/sign_in"/>;
}
