class AuthContext {
    constructor(authStrategy) {
        this.authStrategy = authStrategy;
    }

    async signIn() {
        await this.authStrategy.signIn();
    }

    async signUp(email, password) {
        await this.authStrategy.signUp(email, password);
    }
}
