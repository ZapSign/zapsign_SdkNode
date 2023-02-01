export class ExtraDocResponse {
    private open_id: string;
    private token: string;
    private name: string;
    private original_file: string;
    private signed_file: string;

    constructor(open_id: string, token: string, name: string, original_file: string, signed_file: string) {
        this.open_id = open_id;
        this.token = token;
        this.name = name;
        this.original_file = original_file;
        this.signed_file = signed_file;
    }

    public getOpen_id() {
        return this.open_id;
    }

    public setOpen_id(open_id: string): void {
        this.open_id = open_id;
    }

    public getToken(): string {
        return this.token;
    }

    public setToken(token: string): void {
        this.token = token;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getOriginal_file(): string {
        return this.original_file;
    }

    public setOriginal_file(original_file: string) {
        this.original_file = original_file;
    }

    public getSigned_file(): string {
        return this.signed_file;
    }

    public setSigned_file(signed_file: string): void {
        this.signed_file = signed_file;
    }
}
