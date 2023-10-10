import {createContext, useState} from "react";

export const Auth = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [authenticating, setAuthenticating] = useState(false);
    return <Auth.Provider value={[user, setUser, authenticating, setAuthenticating]}>{children}</Auth.Provider>;
};