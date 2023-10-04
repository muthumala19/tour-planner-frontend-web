import {auth} from "../../configurations/firebase_configurations";

class EmailAuthStrategy extends AuthStrategy {
    constructor() {
        super();
    }

    async signIn(email, password) {
        try {
            await auth.signInWithEmailAndPassword(email, password);
            console.log("Signed in with Email");
        } catch (error) {
            console.error("Email authentication error:", error);
        }
    }

    async signUp(email, password) {
        try {
            await auth.createUserWithEmailAndPassword(email, password);
            console.log("Signed up with Email");
        } catch (error) {
            console.error("Email sign-up error:", error);
        }
    }
}