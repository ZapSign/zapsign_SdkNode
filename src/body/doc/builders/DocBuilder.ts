import { Doc } from "../Doc";

export class DocBuilder {
    doc: Doc;

    constructor() {
        this.doc = new Doc();
    }

    withSandbox(sandbox: boolean){
        this.doc.setSandbox(sandbox);
    };

    withName(name: string) {
        this.doc.setName(name);
        return this;
    }

    withLang(lang: string){
        this.doc.setLang(lang);
    };

    withDisableSignerEmails(disableSignerEmails: boolean){
        this.doc.setDisableSignerEmails(disableSignerEmails);
    };

    withSignedFileOnlyFinished(signedFileOnlyFinished: boolean){
        this.doc.setSigneFileOnlyFinished(signedFileOnlyFinished);
    };

    withBrandLogo(brandLogo: string){
        this.doc.setBrandLogo(brandLogo);
    };

    withBrandPrimaryColor(brandPrimaryColor: string){
        this.doc.setBrandPrimaryColor(brandPrimaryColor);
    };

    withBrandName(brandName: string){
        this.doc.setBrandName(brandName);
    };

    withExternalId(externalId: string){
        this.doc.setExternalId(externalId);
    };

    withFolderPath(folderPath: string){
        this.doc.setFolderPath(folderPath);
    };

    withDateLimitToSign(dateLimitToSign: Date){
        this.doc.setDateLimitToSign(dateLimitToSign);
    };

    withSignatureOrderActive(signatureOrderActive: boolean){
        this.doc.setSignatureOrderActive(signatureOrderActive);
    };

    withObserver(observer: string[]){
        this.doc.setObservers(observer);
    };

    withReminderEveryNDays(reminderEveryNDays: number){
        this.doc.setReminderEveryNdays(reminderEveryNDays);
    };

    build() {
        return this.doc;
    }
};