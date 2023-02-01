export class Rubrica {
    private page: number;
    private relative_position_bottom: number;
    private relative_position_left: number;
    private relative_size_x: number;
    private relative_size_y: number;
    private type: string;
    private signer_token: string;

    constructor(
        page: number,
        relative_position_bottom: number,
        relative_position_left: number,
        relative_size_x: number,
        relative_size_y: number,
        type: string,
        signer_token: string
        ) {
            this.page = page;
            this.relative_position_bottom = relative_position_bottom;
            this.relative_position_left = relative_position_left;
            this.relative_size_x = relative_size_x;
            this.relative_size_y = relative_size_y;
            this.type = type;
            this.signer_token = signer_token
        }

    public getPage(): number {
        return this.page;
    }

    public setPage(page: number): void {
        this.page = page;
    }

    public getRelative_position_bottom(): number {
        return this.relative_position_bottom;
    }

    public setRelative_position_bottom(relative_position_bottom: number): void {
        this.relative_position_bottom = relative_position_bottom;
    }

    public getRelative_position_left(): number {
        return this.relative_position_left;
    }

    public setRelative_position_left(relative_position_left: number): void {
        this.relative_position_left = relative_position_left;
    }

    public getRelative_size_x(): number {
        return this.relative_size_x;
    }

    public setRelative_size_x(relative_size_x: number): void {
        this.relative_size_x = relative_size_x;
    }

    public getRelative_size_y(): number {
        return this.relative_size_y;
    }

    public setRelative_size_y(relative_size_y: number): void {
        this.relative_size_y = relative_size_y;
    }

    public getType(): string {
        return this.type;
    }

    public setType(type: string): void {
        this.type = type;
    }

    public getSigner_token(): string {
        return this.signer_token;
    }

    public setSigner_token(signer_token: string): void {
        this.signer_token = signer_token;
    }
}