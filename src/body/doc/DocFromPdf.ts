import { Doc } from "./Doc";

export class DocFromPdf extends Doc {
    private url_pdf: string;

    constructor(url_pdf: string) {
        super(false, '', '', false, false, '', '', '', '', '', new Date(), false, [], [], 0);
        this.url_pdf = url_pdf;
    }

    public getUrl_pdf(): string {
        return this.url_pdf;
    }
    public setUrl_pdf(url_pdf: string): void {
        this.url_pdf = url_pdf;
    }
}