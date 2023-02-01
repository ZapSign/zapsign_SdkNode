export class CreateBy {
    private email: string;

    constructor(email: string) {
        this.email = email
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }
}