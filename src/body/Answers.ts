export class Answers {
    private variable: string;
    private value: string;

    constructor(variable: string, value: string) {
        this.variable = variable;
        this.value = value
    }

    public getVariable(): string {
        return this.variable;
    }

    public setVariable(variable: string): void {
        this.variable = variable;
    }

    public getValue(): string {
        return this.value;
    }

    public setValue(value: string): void {
        this.value = value;
    }
}
