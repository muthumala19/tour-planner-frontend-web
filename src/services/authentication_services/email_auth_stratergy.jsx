import {auth} from "../../configurations/firebase_configurations";
import AuthStrategy from "./auth_stratergy";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

export default class EmailAuthStrategy extends AuthStrategy {
    constructor(email, password) {
        super();
        this.email = email;
        this.password = password;
    }

    async signIn() {
        try {
            await signInWithEmailAndPassword(auth, this.email, this.password);
        } catch (error) {
            console.error("Email authentication error:", error.toString());
            alert("Email authentication error: email address or password incorrect", error.toString())
        }
    }

    async signUp() {
        try {
            await createUserWithEmailAndPassword(auth, this.email, this.password)
        } catch (error) {
            console.error("Email sign-up error:", error);
            alert(`Email sign-up error: User ${this.email} already exist`, error)
        }
    }

    getUser() {
        return auth.currentUser;
    }
}