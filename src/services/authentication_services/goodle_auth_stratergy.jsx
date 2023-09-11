import {auth} from '../../configurations/firebase_configurations';
import AuthStrategy from "./auth_stratergy";
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'


export default class GoogleAuthStrategy extends AuthStrategy {
    constructor() {
        super();
    }

    async signIn() {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            console.log("Signed in with Google");
        } catch (error) {
            console.error("Google authentication error:", error);
        }
    }

    async signUp() {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            console.log("Signed up with Google");
        } catch (error) {
            console.error("Google authentication error:", error);
        }
    }
}
