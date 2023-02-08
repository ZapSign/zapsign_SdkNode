import { Rubrica } from "../Rubrica";

export class RubricaBuilder {
    rubrica: Rubrica;

    constructor() {
        this.rubrica = new Rubrica();
    }

    withPage(page: number) {
        this.rubrica.setPage(page);
        return this;
    }

    withtRelativePositionBottom(relativePositionBottom: number) {
        this.rubrica.setRelativePositionBottom(relativePositionBottom);
        return this;
    }

    withRelativePositionLeft(relativePositionLeft: number) {
        this.rubrica.setRelativePositionLeft(relativePositionLeft);
        return this;
    }

    withRelativeSizeX(relativeSizeX: number) {
        this.rubrica.setRelativeSizeX(relativeSizeX);
        return this;
    }

    withRelativeSizeY(relativeSizeY: number) {
        this.rubrica.setRelativeSizeX(relativeSizeY);
        return this;
    }

    withType(type: string) {
        this.rubrica.setType(type);
        return this;
    }
    
    withSignerToken(signerToken: string) {
        this.rubrica.setSignerToken(signerToken);
        return this;
    }

    build() {
        return this.rubrica;
    }

}