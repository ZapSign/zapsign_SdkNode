import { Answers } from "../body/Answers";
import { CreateBy } from "../body/CreateBy";
import { Template } from "../body/Template";
import { DocResponse } from "./DocResponse";
import { ExtraDocResponse } from "./ExtraDocResponse";

export class DocsResponse {

    private count: number;
    private next: string;
    private previous: string;
    private results: DocResponse[];

    constructor() {
        this.count = 0;
        this.next = '';
        this.previous = '';
        this.results = [new DocResponse(0, '', '', '', '', '', [new ExtraDocResponse('', '', '', '', '')], false, '', '', '', new CreateBy(), new Template(''), [new Answers('', '')], 0)]
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
