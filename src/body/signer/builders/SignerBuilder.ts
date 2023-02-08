import { Signer } from "../../../body/signer/Signer";

export class SignerBuilder {
    signer: Signer;

    constructor() {
        this.signer = new Signer();
    }

    withName(name: string) {
        this.signer.setName(name);
        return this;
    }

    withEmail(lang: string){
        this.signer.setEmail(lang);
        return this;
    };

    withAuthMode(authMode: string){
        this.signer.setAuthMode(authMode);
        return this;
    };

    withisSendAutomaticEmail(sendAutomaticEmail: boolean){
        this.signer.setSendAutomaticEmail(sendAutomaticEmail);
        return this;
    };

    withSendAutomaticWhatsapp(sendAutomaticWhatsapp: boolean){
        this.signer.setSendAutomaticWhatsapp(sendAutomaticWhatsapp);
        return this;
    };

    withOrderGroup(orderGroup: number){
        this.signer.setOrderGroup(orderGroup);
        return this;
    };

    withCustomMessage(customMessage: string){
        this.signer.setCustomMessage(customMessage);
        return this;
    };

    withPhoneCountry(phoneCountry: string){
        this.signer.setPhoneCountry(phoneCountry);
        return this;
    };

    withPhoneNumber(phoneNumber: string){
        this.signer.setPhoneNumber(phoneNumber);
        return this;
    };

    withLockEmail(lockEmail: boolean){
        this.signer.setLockEmail(lockEmail);
        return this;
    };

    withBlankEmail(blankEmail: boolean){
        this.signer.setBlankEmail(blankEmail);
        return this;
    };

    withHideEmail(hideEmail: boolean){
        this.signer.setHideEmail(hideEmail);
        return this;
    };

    withLockPhone(lockPhone: boolean){
        this.signer.setLockPhone(lockPhone);
        return this;
    };

    withSigners(blankPhone: boolean) {
        this.signer.setBlankPhone(blankPhone);
        return this;
    }

    withHidePhone(hidePhone: boolean) {
        this.signer.setHidePhone(hidePhone);
        return this;
    }

    withLockName(lockName: boolean) {
        this.signer.setLockName(lockName);
        return this;
    }

    withRequireSelfiePhoto(requireSelfiePhoto: boolean) {
        this.signer.setRequireSelfiePhoto(requireSelfiePhoto);
        return this;
    }

    withQualification(qualification: string) {
        this.signer.setQualification(qualification);
        return this;
    }

    withExternalId(externalId: string) {
        this.signer.setExternalId(externalId);
        return this;
    }

    withRedirectLink(redirectLink: string) {
        this.signer.setRedirectLink(redirectLink);
        return this;
    }

    withSignUrl(signUrl: string) {
        this.signer.setSignUrl(signUrl);
        return this;
    }

    withToken(token: string) {
        this.signer.setToken(token);
        return this;
    }

    withStatus(status: string) {
        this.signer.setStatus(status);
        return this;
    }

    withtLastViewAt(LastViewAt: string) {
        this.signer.setLastViewAt(LastViewAt);
        return this;
    }

    withtSignedAt(signedAt: string) {
        this.signer.setSignedAt(signedAt);
        return this;
    }

    withtGeoLatitude(geoLatitude: string) {
        this.signer.setGeoLatitude(geoLatitude);
        return this;
    }

    withtGeoLongitude(geoLongitude: string) {
        this.signer.setGeoLongitude(geoLongitude);
        return this;
    }

    withtSignatureImage(signatureImage: string) {
        this.signer.setSignatureImage(signatureImage);
        return this;
    }

    withtVistoImage(vistoImage: string) {
        this.signer.setVistoImage(vistoImage);
        return this;
    }

    withtDocumentPhotoUrl(documentPhotoUrl: string) {
        this.signer.setDocumentPhotoUrl(documentPhotoUrl);
        return this;
    }

    withtDocumentVersePhotoUrl(documentVersePhotoUrl: string) {
        this.signer.setDocumentVersePhotoUrl(documentVersePhotoUrl);
        return this;
    }

    withtSelfiePhotoUrl2(selfiePhotoUrl: string) {
        this.signer.setSelfiePhotoUrl2(selfiePhotoUrl);
        return this;
    }

    withSendVia(sendVia: string) {
        this.signer.setSendVia(sendVia);
        return this;
    }

    withRequireDocumentPhoto(requireDocumentPhoto: string) {
        this.signer.setRequireDocumentPhoto(requireDocumentPhoto);
        return this;
    }

    build() {
        return this.signer;
    }
};