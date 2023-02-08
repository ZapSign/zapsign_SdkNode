export class ExtraDoc {
    private name: string = "";
    private url_pdf: string = "";

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getUrlPdf(): string {
        return this.url_pdf;
    }

    public setUrlPdf(urlPdf: string): void {
        this.url_pdf = urlPdf;
    }
}