import firebase from "firebase/compat";
import {auth} from '../../configurations/firebase_configurations';

class GoogleAuthStrategy extends AuthStrategy {
    constructor() {
        super();
    }

    async signIn() {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            await auth.signInWithPopup(provider);
            console.log("Signed in with Google");
        } catch (error) {
            console.error("Google authentication error:", error);
        }
    }

    async signUp(email, password) {
        try {
            // You can use the provided email and password to create a local account
            await auth.createUserWithEmailAndPassword(email, password);

            // After creating the local account, you can link it to the Google account
            const currentUser = auth.currentUser;
            const googleCredential = new firebase.auth.GoogleAuthProvider.credential(
                currentUser.providerData[0].uid
            );

            await currentUser.linkWithCredential(googleCredential);

            console.log("Signed up and linked with Google");
        } catch (error) {
            console.error("Google sign-up error:", error);
        }
    }
}
