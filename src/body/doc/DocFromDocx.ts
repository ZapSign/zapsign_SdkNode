import { Doc } from "./Doc";

export class DocFromDocx extends Doc {
    private url_docx: string = "";

    public getUrl_docx(): string {
        return this.url_docx;
    }
    public SetUrlDocx(urlDocx: string): void {
        this.url_docx = urlDocx;
    }
}
