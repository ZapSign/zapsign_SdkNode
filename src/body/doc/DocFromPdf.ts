import { Doc } from "./Doc";

export class DocFromPdf extends Doc {
    private url_pdf: string;

    public getUrl_pdf(): string {
        return this.url_pdf;
    }
    public setUrl_pdf(url_pdf: string): void {
        this.url_pdf = url_pdf;
    }
}