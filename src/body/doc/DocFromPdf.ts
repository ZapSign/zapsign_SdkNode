import { Doc } from "./Doc";

export class DocFromPdf extends Doc {
    private url_pdf: string | null = null;

    public getUrl_pdf(): string | null {
        return this.url_pdf;
    }
    public setUrlPdf(urlPdf: string): void {
        this.url_pdf = urlPdf;
    }
}