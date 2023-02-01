import { Doc } from "./Doc";

export class DocFromDocx extends Doc {
    private url_docx: string;

    constructor(url_docx: string) {
        super(false, '', '', false, false, '', '', '', '', '', new Date(), false, [], [], 0);
            this.url_docx = url_docx;
    }

    public getUrl_docx(): string {
        return this.url_docx;
    }
    public SetUrlDocx(urlDocx: string): void {
        this.url_docx = urlDocx;
    }
}
