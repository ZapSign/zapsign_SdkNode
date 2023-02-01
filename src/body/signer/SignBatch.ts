export class SignBatch {
    private user_token: string;
    private signer_tokens: string[];

    constructor(user_token: string, signer_tokens: string[]) {
        this.user_token = user_token;
        this.signer_tokens = signer_tokens
    }

    public getUser_token(): string {
        return this.user_token;
    }

    public setUser_token(user_token: string): void {
        this.user_token = user_token;
    }

    public getSigner_tokens(): string[] {
        return this.signer_tokens;
    }

    public setSigner_tokens(signer_tokens: string[]): void {
        this.signer_tokens = signer_tokens;
    }
}