export default class AuthContext {
    constructor(authStrategy) {
        this.authStrategy = authStrategy;
    }

    async signIn() {
        await this.authStrategy.signIn();
    }

    async signUp() {
        await this.authStrategy.signUp();
    }

    getUser() {
        return this.authStrategy.getUser();
    }
}
