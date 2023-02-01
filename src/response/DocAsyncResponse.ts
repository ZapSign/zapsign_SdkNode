export class DocAsyncResponse {
    private token: string;
    
    constructor(token: string) {
        this.token = token
    }

    public getToken(): string {
        return this.token;
    }

    public setToken(token: string): void {
        this.token = token;
    }
}
