class AuthStrategy {
    constructor() {
    }

    async signIn() {
        throw new Error("Subclasses must implement the signIn method.");
    }

    async signUp() {
        throw new Error("Subclasses must implement the signUp method.");
    }
}
