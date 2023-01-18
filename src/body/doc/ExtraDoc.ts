export class ExtraDoc {
    private name: string;
    private url_pdf: string;

    // @Builder(builderMethodName = "extraDocBuilder")
    // public ExtraDoc(String name, String url_pdf) {
    //     this.name = name;
    //     this.url_pdf = url_pdf;
    // }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getUrl_pdf(): string {
        return this.url_pdf;
    }

    public setUrl_pdf(url_pdf: string): void {
        this.url_pdf = url_pdf;
    }
}