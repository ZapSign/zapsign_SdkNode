export class Rubrica {
    private page: number = 0;
    private relative_position_bottom: number = 0;
    private relative_position_left: number = 0;
    private relative_size_x: number = 0;
    private relative_size_y: number = 0;
    private type: string = "";
    private signer_token: string = "";

    public getPage(): number {
        return this.page;
    }

    public setPage(page: number): void {
        this.page = page;
    }

    public getRelativePositionBottom(): number {
        return this.relative_position_bottom;
    }

    public setRelativePositionBottom(relativePositionBottom: number): void {
        this.relative_position_bottom = relativePositionBottom;
    }

    public getRelativePositionLeft(): number {
        return this.relative_position_left;
    }

    public setRelativePositionLeft(relativePositionLeft: number): void {
        this.relative_position_left = relativePositionLeft;
    }

    public getRelativeSizeX(): number {
        return this.relative_size_x;
    }

    public setRelativeSizeX(relativeSizeX: number): void {
        this.relative_size_x = relativeSizeX;
    }

    public getRelativeSizeY(): number {
        return this.relative_size_y;
    }

    public setRelativeSizeY(relativeSizeY: number): void {
        this.relative_size_y = relativeSizeY;
    }

    public getType(): string {
        return this.type;
    }

    public setType(type: string): void {
        this.type = type;
    }

    public getSignerToken(): string {
        return this.signer_token;
    }

    public setSignerToken(signerToken: string): void {
        this.signer_token = signerToken;
    }
}