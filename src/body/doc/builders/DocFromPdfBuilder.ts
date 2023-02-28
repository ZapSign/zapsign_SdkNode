import { Signer } from "../../../body/signer/Signer";
import { DocFromPdf } from "../DocFromPdf";

export class DocFromPdfBuilder {
    docFromPdf: DocFromPdf;

    constructor() {
        this.docFromPdf = new DocFromPdf();
    }

    withSandbox(sandbox: boolean){
        this.docFromPdf.setSandbox(sandbox);
        return this;
    };

    withName(name: string) {
        this.docFromPdf.setName(name);
        return this;
    }

    withLang(lang: string){
        this.docFromPdf.setLang(lang);
        return this;
    };

    withDisableSignerEmails(disableSignerEmails: boolean){
        this.docFromPdf.setDisableSignerEmails(disableSignerEmails);
        return this;
    };

    withSignedFileOnlyFinished(signedFileOnlyFinished: boolean){
        this.docFromPdf.setSigneFileOnlyFinished(signedFileOnlyFinished);
        return this;
    };

    withBrandLogo(brandLogo: string){
        this.docFromPdf.setBrandLogo(brandLogo);
        return this;
    };

    withBrandPrimaryColor(brandPrimaryColor: string){
        this.docFromPdf.setBrandPrimaryColor(brandPrimaryColor);
        return this;
    };

    withBrandName(brandName: string){
        this.docFromPdf.setBrandName(brandName);
        return this;
    };

    withExternalId(externalId: string){
        this.docFromPdf.setExternalId(externalId);
        return this;
    };

    withFolderPath(folderPath: string){
        this.docFromPdf.setFolderPath(folderPath);
        return this;
    };

    withDateLimitToSign(dateLimitToSign: Date){
        this.docFromPdf.setDateLimitToSign(dateLimitToSign);
        return this;
    };

    withSignatureOrderActive(signatureOrderActive: boolean){
        this.docFromPdf.setSignatureOrderActive(signatureOrderActive);
        return this;
    };

    withObserver(observer: string[]){
        this.docFromPdf.setObservers(observer);
        return this;
    };

    withReminderEveryNDays(reminderEveryNDays: number){
        this.docFromPdf.setReminderEveryNdays(reminderEveryNDays);
        return this;
    };

    withSigners(signers: Signer[]) {
        this.docFromPdf.setSigners(signers);
        return this;
    }

    withUrlPdf(urlPdf: string) {
        this.docFromPdf.setUrlPdf(urlPdf);
        return this;
    }

    build() {
        return this.docFromPdf;
    }
};

module.exports = new DocFromPdfBuilder
