import {auth} from '../../configurations/firebase_configurations';
import AuthStrategy from "./auth_stratergy";
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

export default class GoogleAuthStrategy extends AuthStrategy {
    constructor() {
        super();
    }

    async signIn() {
        try {
            await signInWithPopup(auth, new GoogleAuthProvider());
        } catch (error) {
            console.error("Google authentication error:", error.toString());
            alert("Google authentication error:" + error.toString())
        }
    }

    async signUp() {
        try {
            await signInWithPopup(auth, new GoogleAuthProvider());
        } catch (error) {
            console.error("Google authentication error:", error.toString());
            alert("Google authentication error:" + error.toString())
        }
    }

    getUser() {
        return auth.currentUser;
    }
}
