import { ExtraDoc } from "../ExtraDoc";

export class ExtraDocBuilder {
    extraDoc: ExtraDoc;

    constructor() {
        this.extraDoc = new ExtraDoc();
    }

    withName(name: string) {
        this.extraDoc.setName(name);
    }

    withUrlPdf(urlPdf: string) {
        this.extraDoc.setUrlPdf(urlPdf);
    }

    build() {
        return this.extraDoc;
    }
}