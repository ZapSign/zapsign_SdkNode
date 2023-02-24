import { Signer } from "../../../body/signer/Signer";
import { DeParaTemplate } from "../DeParaTemplate";
import { DocFromTemplate } from "../DocFromTemplate";

export class DocFromTemplateBuilder {
    docFromTemplate: DocFromTemplate;

    constructor() {
        this.docFromTemplate = new DocFromTemplate();
    }

    withSandbox(sandbox: boolean){
        this.docFromTemplate.setSandbox(sandbox);
        return this;
    };

    withName(name: string) {
        this.docFromTemplate.setName(name);
        return this;
    }

    withLang(lang: string){
        this.docFromTemplate.setLang(lang);
        return this;
    };

    withDisableSignerEmails(disableSignerEmails: boolean){
        this.docFromTemplate.setDisableSignerEmails(disableSignerEmails);
        return this;
    };

    withSignedFileOnlyFinished(signedFileOnlyFinished: boolean){
        this.docFromTemplate.setSigneFileOnlyFinished(signedFileOnlyFinished);
        return this;
    };

    withBrandLogo(brandLogo: string){
        this.docFromTemplate.setBrandLogo(brandLogo);
        return this;
    };

    withBrandPrimaryColor(brandPrimaryColor: string){
        this.docFromTemplate.setBrandPrimaryColor(brandPrimaryColor);
        return this;
    };

    withBrandName(brandName: string){
        this.docFromTemplate.setBrandName(brandName);
        return this;
    };

    withExternalId(externalId: string){
        this.docFromTemplate.setExternalId(externalId);
        return this;
    };

    withFolderPath(folderPath: string){
        this.docFromTemplate.setFolderPath(folderPath);
        return this;
    };

    withDateLimitToSign(dateLimitToSign: Date){
        this.docFromTemplate.setDateLimitToSign(dateLimitToSign);
        return this;
    };

    withSignatureOrderActive(signatureOrderActive: boolean){
        this.docFromTemplate.setSignatureOrderActive(signatureOrderActive);
        return this;
    };

    withObserver(observer: string[]){
        this.docFromTemplate.setObservers(observer);
        return this;
    };

    withReminderEveryNDays(reminderEveryNDays: number){
        this.docFromTemplate.setReminderEveryNdays(reminderEveryNDays);
        return this;
    };

    withSigners(signers: Signer[]) {
        this.docFromTemplate.setSigners(signers);
        return this;
    }

    withSignerName(signerName: string) {
        this.docFromTemplate.setSignerName(signerName);
    }

    withTemplateId(templateId: string) {
        this.docFromTemplate.setTemplateId(templateId);
    }

    withData(data: DeParaTemplate[]) {
        this.docFromTemplate.setData(data);
    }

    build() {
        return this.docFromTemplate;
    }
};

module.exports = new DocFromTemplateBuilder
