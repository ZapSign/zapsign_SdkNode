export class Signer {
    private name: string = "";
    private email: string = "";
    private auth_mode: string = "assinaturaTela";
    private send_automatic_email: boolean = false;
    private send_automatic_whatsapp: boolean = false;
    private order_group: number = 0;
    private custom_message: string = "";
    private phone_country: string = "";
    private phone_number: string = "";
    private lock_email: boolean = false;
    private blank_email: boolean = false;
    private hide_email: boolean = false;
    private lock_phone: boolean = false;
    private blank_phone: boolean = false;
    private hide_phone: boolean = false;
    private lock_name: boolean = false;
    private require_selfie_photo: boolean = false;
    private selfie_validation_type: string = "none";
    private qualification: string = "";
    private external_id: string = "";
    private redirect_link: string = "";
    private sign_url: string = "";
    private token: string = "";
    private status: string = "";
    private times_viewed: number = 0;
    private last_view_at: string = "";
    private signed_at: string = "";
    private geo_latitude: string = "";
    private geo_longitude: string = "";
    private signature_image: string = "";
    private visto_image: string = "";
    private document_photo_url: string = "";
    private document_verse_photo_url: string = "";
    private selfie_photo_url: string = "";
    private selfie_photo_url2: string = "";
    private send_via: string = "";
    private require_document_photo: string = "";

    public getName(): string {
        return this.name;
    }
    
    public setName(name: string): void {
        this.name = name;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getAuthMode(): string {
        return this.auth_mode;
    }

    public setAuthMode(authMode: string): void {
        this.auth_mode = authMode;
    }

    public getSendAutomaticEmail(): boolean {
        return this.send_automatic_email;
    }

    public setSendAutomaticEmail(sendAutomaticEmail: boolean): void {
        this.send_automatic_email = sendAutomaticEmail;
    }

    public getSendAutomaticWhatsapp(): boolean {
        return this.send_automatic_whatsapp;
    }

    public setSendAutomaticWhatsapp(sendAutomaticWhatsapp: boolean): void {
        this.send_automatic_whatsapp = sendAutomaticWhatsapp;
    }

    public getOrderGroup(): number {
        return this.order_group;
    }

    public setOrderGroup(orderGroup: number) {
        this.order_group = orderGroup;
    }

    public getCustomMessage(): string {
        return this.custom_message;
    }

    public setCustomMessage(customMessage: string): void {
        this.custom_message = customMessage;
    }

    public getPhoneCountry(): string {
        return this.phone_country;
    }

    public setPhoneCountry(phoneCountry: string): void {
        this.phone_country = phoneCountry;
    }

    public getPhoneNumber(): string {
        return this.phone_number;
    }

    public setPhoneNumber(phoneNumber: string): void {
        this.phone_number = phoneNumber;
    }

    public isLockEmail(): boolean {
        return this.lock_email;
    }

    public setLockEmail(lockEmail: boolean): void {
        this.lock_email = lockEmail;
    }

    public isBlankEmail(): boolean {
        return this.blank_email;
    }

    public setBlankEmail(blankEmail: boolean): void {
        this.blank_email = blankEmail;
    }

    public isHideEmail(): boolean {
        return this.hide_email;
    }

    public setHideEmail(hideEmail: boolean): void {
        this.hide_email = hideEmail;
    }

    public isLockPhone(): boolean {
        return this.lock_phone;
    }

    public setLockPhone(lockPhone: boolean): void {
        this.lock_phone = lockPhone;
    }

    public isBlankPhone(): boolean {
        return this.blank_phone;
    }

    public setBlankPhone(blankPhone: boolean): void {
        this.blank_phone = blankPhone;
    }

    public isHidePhone(): boolean {
        return this.hide_phone;
    }

    public setHidePhone(hidePhone: boolean): void {
        this.hide_phone = hidePhone;
    }

    public isLockName(): boolean {
        return this.lock_name;
    }

    public setLockName(lockName: boolean): void {
        this.lock_name = lockName;
    }

    public isRequireSelfiePhoto(): boolean {
        return this.require_selfie_photo;
    }

    public setRequireSelfiePhoto(requireSelfiePhoto: boolean): void {
        this.require_selfie_photo = requireSelfiePhoto;
    }

    public getSelfieValidationType(): string {
        return this.selfie_validation_type;
    }

    public setSelfieValidationType(selfieValidationType: string): void {
        this.selfie_validation_type = selfieValidationType;
    }

    public getQualification(): string {
        return this.qualification;
    }

    public setQualification(qualification: string): void {
        this.qualification = qualification;
    }

    public getExternalId(): string {
        return this.external_id;
    }

    public setExternalId(externalId: string): void {
        this.external_id = externalId;
    }

    public getRedirectLink(): string {
        return this.redirect_link;
    }

    public setRedirectLink(redirectLink: string): void {
        this.redirect_link = redirectLink;
    }

    public getSignUrl(): string {
        return this.sign_url;
    }

    public setSignUrl(signUrl: string): void {
        this.sign_url = signUrl;
    }

    public getToken(): string {
        return this.token;
    }

    public setToken(token: string): void {
        this.token = token;
    }

    public getStatus(): string {
        return this.status;
    }

    public setStatus(status: string): void {
        this.status = status;
    }

    public getTimesViewed(): number {
        return this.times_viewed;
    }

    public setTimesViewed(timesViewed: number): void {
        this.times_viewed = timesViewed;
    }

    public getLastViewAt(): string {
        return this.last_view_at;
    }

    public setLastViewAt(LastViewAt: string): void {
        this.last_view_at = LastViewAt;
    }

    public getSignedAt(): string {
        return this.signed_at;
    }

    public setSignedAt(signedAt: string): void {
        this.signed_at = signedAt;
    }

    public getGeoLatitude(): string {
        return this.geo_latitude;
    }

    public setGeoLatitude(geoLatitude: string): void {
        this.geo_latitude = geoLatitude;
    }

    public getGeoLongitude(): string {
        return this.geo_longitude;
    }

    public setGeoLongitude(geoLongitude: string): void {
        this.geo_longitude = geoLongitude;
    }

    public getSignatureImage(): string {
        return this.signature_image;
    }

    public setSignatureImage(signatureImage: string): void {
        this.signature_image = signatureImage;
    }

    public getVistoImage(): string {
        return this.visto_image;
    }

    public setVistoImage(vistoImage: string): void {
        this.visto_image = vistoImage;
    }

    public getDocumentPhotoUrl(): string {
        return this.document_photo_url;
    }

    public setDocumentPhotoUrl(documentPhotoUrl: string): void {
        this.document_photo_url = documentPhotoUrl;
    }

    public getDocumentVersePhotoUrl(): string {
        return this.document_verse_photo_url;
    }

    public setDocumentVersePhotoUrl(documentVersePhotoUrl: string): void {
        this.document_verse_photo_url = documentVersePhotoUrl;
    }

    public getSelfiePhotoUrl(): string {
        return this.selfie_photo_url;
    }

    public setSelfiePhotoUrl(selfiePhotoUrl: string): void {
        this.selfie_photo_url = selfiePhotoUrl;
    }

    public getselfiePhotoUrl2(): string {
        return this.selfie_photo_url2;
    }

    public setSelfiePhotoUrl2(selfiePhotoUrl2: string): void {
        this.selfie_photo_url2 = selfiePhotoUrl2;
    }

    public getSendVia(): string {
        return this.send_via;
    }

    public setSendVia(sendVia: string): void {
        this.send_via = sendVia;
    }

    public getRequireDocumentPhoto(): string {
        return this.require_document_photo;
    }

    public setRequireDocumentPhoto(requireDocumentPhoto: string): void {
        this.require_document_photo = requireDocumentPhoto;
    }
}
