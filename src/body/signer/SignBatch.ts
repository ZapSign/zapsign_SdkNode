export class SignBatch {
    private user_token: string = "";
    private signer_tokens: string[] = [];

    public getUserToken(): string {
        return this.user_token;
    }

    public setUserToken(userToken: string): void {
        this.user_token = userToken;
    }

    public getSignerTokens(): string[] {
        return this.signer_tokens;
    }

    public setSignerTokens(signerTokens: string[]): void {
        this.signer_tokens = signerTokens;
    }
}