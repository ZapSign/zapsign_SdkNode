import { DocResponse } from "./DocResponse";

export class DocsResponse {

    private count: number;
    private next: string;
    private previous: string;
    private results: DocResponse[];

    constructor() {
        this.count = 0;
        this.next = '';
        this.previous = '';
        this.results = [new DocResponse()]
    }

    public getCount(): number {
        return this.count;
    }

    public setCount(count: number): void {
        this.count = count;
    }

    public getNext(): string {
        return this.next;
    }

    public setNext(next: string): void {
        this.next = next;
    }

    public getPrevious(): string {
        return this.previous;
    }

    public setPrevious(previous: string): void {
        this.previous = previous;
    }

    public getResults(): DocResponse[] {
        return this.results;
    }

    public setResults(results: DocResponse[]): void {
        this.results = results;
    }
}
