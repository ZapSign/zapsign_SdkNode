import { Doc } from "../Doc";

export class DocBuilder {
    doc: Doc;

    constructor() {
        this.doc = new Doc();
    }

    withSandbox(sandbox: boolean){
        this.doc.setSandbox(sandbox);
        return this;
    };

    withName(name: string) {
        this.doc.setName(name);
        return this;
    }

    withLang(lang: string){
        this.doc.setLang(lang);
        return this;
    };

    withDisableSignerEmails(disableSignerEmails: boolean){
        this.doc.setDisableSignerEmails(disableSignerEmails);
        return this;
    };

    withSignedFileOnlyFinished(signedFileOnlyFinished: boolean){
        this.doc.setSigneFileOnlyFinished(signedFileOnlyFinished);
        return this;
    };

    withBrandLogo(brandLogo: string){
        this.doc.setBrandLogo(brandLogo);
        return this;
    };

    withBrandPrimaryColor(brandPrimaryColor: string){
        this.doc.setBrandPrimaryColor(brandPrimaryColor);
        return this;
    };

    withBrandName(brandName: string){
        this.doc.setBrandName(brandName);
        return this;
    };

    withExternalId(externalId: string){
        this.doc.setExternalId(externalId);
        return this;
    };

    withFolderPath(folderPath: string){
        this.doc.setFolderPath(folderPath);
        return this;
    };

    withDateLimitToSign(dateLimitToSign: Date){
        this.doc.setDateLimitToSign(dateLimitToSign);
        return this;
    };

    withSignatureOrderActive(signatureOrderActive: boolean){
        this.doc.setSignatureOrderActive(signatureOrderActive);
        return this;
    };

    withObserver(observer: string[]){
        this.doc.setObservers(observer);
        return this;
    };

    withReminderEveryNDays(reminderEveryNDays: number){
        this.doc.setReminderEveryNdays(reminderEveryNDays);
        return this;
    };

    build() {
        return this.doc;
    }
};