import { Signer } from "../../../body/signer/Signer";
import { DocFromDocx } from "../DocFromDocx";


export class DocFromDocxBuilder {
    docFromDocx: DocFromDocx;

    constructor() {
        this.docFromDocx = new DocFromDocx();
    }

    withSandbox(sandbox: boolean) {
        this.docFromDocx.setSandbox(sandbox);
        return this;
    };

    withName(name: string) {
        this.docFromDocx.setName(name);
        return this;
    }

    withLang(lang: string){
        this.docFromDocx.setLang(lang);
        return this;
    };

    withDisableSignerEmails(disableSignerEmails: boolean){
        this.docFromDocx.setDisableSignerEmails(disableSignerEmails);
        return this;
    };

    withSignedFileOnlyFinished(signedFileOnlyFinished: boolean){
        this.docFromDocx.setSigneFileOnlyFinished(signedFileOnlyFinished);
        return this;
    };

    withBrandLogo(brandLogo: string){
        this.docFromDocx.setBrandLogo(brandLogo);
        return this;
    };

    withBrandPrimaryColor(brandPrimaryColor: string){
        this.docFromDocx.setBrandPrimaryColor(brandPrimaryColor);
        return this;
    };

    withBrandName(brandName: string){
        this.docFromDocx.setBrandName(brandName);
        return this;
    };

    withExternalId(externalId: string){
        this.docFromDocx.setExternalId(externalId);
        return this;
    };

    withFolderPath(folderPath: string){
        this.docFromDocx.setFolderPath(folderPath);
        return this;
    };

    withDateLimitToSign(dateLimitToSign: Date){
        this.docFromDocx.setDateLimitToSign(dateLimitToSign);
        return this;
    };

    withSignatureOrderActive(signatureOrderActive: boolean){
        this.docFromDocx.setSignatureOrderActive(signatureOrderActive);
        return this;
    };

    withObserver(observer: string[]){
        this.docFromDocx.setObservers(observer);
        return this;
    };

    withReminderEveryNDays(reminderEveryNDays: number){
        this.docFromDocx.setReminderEveryNdays(reminderEveryNDays);
        return this;
    };

    withSigners(signers: Signer[]) {
        this.docFromDocx.setSigners(signers);
        return this;
    }

    withUrlDocx(urlDocx: string) {
        this.docFromDocx.SetUrlDocx(urlDocx);
        return this;
    }


    build() {
        return this.docFromDocx;
    }
}