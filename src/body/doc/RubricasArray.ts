import { Rubrica } from "./Rubrica";

export class RubricasArray {
    private rubricas: Rubrica[];

    constructor(rubricas: Rubrica[]) {
        this.rubricas = rubricas
    }

    public (rubricas: Rubrica[]): void {
        this.rubricas = rubricas;
    }

    public getRubricas():  Rubrica[] {
        return this.rubricas;
    }

    public setRubricas(rubricas: Rubrica[]): void {
        this.rubricas = rubricas;
    }
}