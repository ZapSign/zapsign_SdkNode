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
    private sign_url: string;
    private token: string;
    private status: string;
    private times_viewed: number;
    private last_view_at: string;
    private signed_at: string;
    private geo_latitude: string;
    private geo_longitude: string;
    private signature_image: string;
    private visto_image: string;
    private document_photo_url: string;
    private document_verse_photo_url: string;
    private selfie_photo_url: string;
    private selfie_photo_url2: string;
    private send_via: string;
    private require_document_photo: string;

    constructor(
        name: string,
        email: string, 
        auth_mode: string,
        send_automatic_email: boolean,
        send_automatic_whatsapp: boolean,
        order_group: number,
        custom_message: string,
        phone_country: string,
        phone_number: string,
        lock_email: boolean,
        blank_email: boolean,
        hide_email: boolean,
        lock_phone: boolean,
        blank_phone: boolean,
        hide_phone: boolean,
        lock_name: boolean,
        require_selfie_photo: boolean,
        selfie_validation_type: string,
        qualification: string,
        external_id: string,
        redirect_link: string,
        sign_url: string,
        token: string,
        status: string,
        times_viewed: number,
        last_view_at: string,
        signed_at: string,
        geo_latitude: string,
        geo_longitude: string,
        signature_image: string,
        visto_image: string,
        document_photo_url: string,
        document_verse_photo_url: string,
        selfie_photo_url: string,
        selfie_photo_url2: string,
        send_via: string,
        require_document_photo: string
        ) {
            this.name = name;
            this.email = email;
            this.auth_mode = auth_mode;
            this.send_automatic_email = send_automatic_email;
            this.send_automatic_whatsapp = send_automatic_whatsapp;
            this.order_group = order_group;
            this.custom_message = custom_message;
            this.phone_country = phone_country;
            this.phone_number = phone_number;
            this.lock_email = lock_email;
            this.blank_email = blank_email;
            this.hide_email = hide_email;
            this.lock_phone = lock_phone;
            this.blank_phone = blank_phone;
            this.hide_phone = hide_phone;
            this.lock_name = lock_name;
            this.require_selfie_photo = require_selfie_photo;
            this.selfie_validation_type = selfie_validation_type;
            this.qualification = qualification;
            this.external_id = external_id;
            this.redirect_link = redirect_link;
            this.sign_url = sign_url;
            this.token = token;
            this.status = status;
            this.times_viewed = times_viewed;
            this.last_view_at = last_view_at;
            this.signed_at = signed_at;
            this.geo_latitude = geo_latitude;
            this.geo_longitude = geo_longitude;
            this.signature_image = signature_image;
            this.visto_image = visto_image;
            this.document_photo_url = document_photo_url;
            this.document_verse_photo_url = document_verse_photo_url;
            this.selfie_photo_url = selfie_photo_url;
            this.selfie_photo_url2 = selfie_photo_url2;
            this.send_via = send_via;
            this.require_document_photo = require_document_photo;
        }

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

    public getAuth_mode(): string {
        return this.auth_mode;
    }

    public setAuth_mode(auth_mode: string): void {
        this.auth_mode = auth_mode;
    }

    public isSend_automatic_email(): boolean {
        return this.send_automatic_email;
    }

    public setSend_automatic_email(send_automatic_email: boolean): void {
        this.send_automatic_email = send_automatic_email;
    }

    public isSend_automatic_whatsapp(): boolean {
        return this.send_automatic_whatsapp;
    }

    public setSend_automatic_whatsapp(send_automatic_whatsapp: boolean): void {
        this.send_automatic_whatsapp = send_automatic_whatsapp;
    }

    public getOrder_group(): number {
        return this.order_group;
    }

    public setOrder_group(order_group: number) {
        this.order_group = order_group;
    }

    public getCustom_message(): string {
        return this.custom_message;
    }

    public setCustom_message(custom_message: string): void {
        this.custom_message = custom_message;
    }

    public getPhone_country(): string {
        return this.phone_country;
    }

    public setPhone_country(phone_country: string): void {
        this.phone_country = phone_country;
    }

    public getPhone_number(): string {
        return this.phone_number;
    }

    public setPhone_number(phone_number: string): void {
        this.phone_number = phone_number;
    }

    public isLock_email(): boolean {
        return this.lock_email;
    }

    public setLock_email(lock_email: boolean): void {
        this.lock_email = lock_email;
    }

    public isBlank_email(): boolean {
        return this.blank_email;
    }

    public setBlank_email(blank_email: boolean): void {
        this.blank_email = blank_email;
    }

    public isHide_email(): boolean {
        return this.hide_email;
    }

    public setHide_email(hide_email: boolean): void {
        this.hide_email = hide_email;
    }

    public isLock_phone(): boolean {
        return this.lock_phone;
    }

    public setLock_phone(lock_phone: boolean): void {
        this.lock_phone = lock_phone;
    }

    public isBlank_phone(): boolean {
        return this.blank_phone;
    }

    public setBlank_phone(blank_phone: boolean): void {
        this.blank_phone = blank_phone;
    }

    public isHide_phone(): boolean {
        return this.hide_phone;
    }

    public setHide_phone(hide_phone: boolean): void {
        this.hide_phone = hide_phone;
    }

    public isLock_name(): boolean {
        return this.lock_name;
    }

    public setLock_name(lock_name: boolean): void {
        this.lock_name = lock_name;
    }

    public isRequire_selfie_photo(): boolean {
        return this.require_selfie_photo;
    }

    public setRequire_selfie_photo(require_selfie_photo: boolean): void {
        this.require_selfie_photo = require_selfie_photo;
    }

    public getSelfie_validation_type(): string {
        return this.selfie_validation_type;
    }

    public setSelfie_validation_type(selfie_validation_type: string): void {
        this.selfie_validation_type = selfie_validation_type;
    }

    public getQualification(): string {
        return this.qualification;
    }

    public setQualification(qualification: string): void {
        this.qualification = qualification;
    }

    public getExternal_id(): string {
        return this.external_id;
    }

    public setExternal_id(external_id: string): void {
        this.external_id = external_id;
    }

    public getRedirect_link(): string {
        return this.redirect_link;
    }

    public setRedirect_link(redirect_link: string): void {
        this.redirect_link = redirect_link;
    }

    public getSign_url(): string {
        return this.sign_url;
    }

    public setSign_url(sign_url: string): void {
        this.sign_url = sign_url;
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

    public getTimes_viewed(): number {
        return this.times_viewed;
    }

    public setTimes_viewed(times_viewed: number): void {
        this.times_viewed = times_viewed;
    }

    public getLast_view_at(): string {
        return this.last_view_at;
    }

    public setLast_view_at(last_view_at: string): void {
        this.last_view_at = last_view_at;
    }

    public getSigned_at(): string {
        return this.signed_at;
    }

    public setSigned_at(signed_at: string): void {
        this.signed_at = signed_at;
    }

    public getGeo_latitude(): string {
        return this.geo_latitude;
    }

    public setGeo_latitude(geo_latitude: string): void {
        this.geo_latitude = geo_latitude;
    }

    public getGeo_longitude(): string {
        return this.geo_longitude;
    }

    public setGeo_longitude(geo_longitude: string): void {
        this.geo_longitude = geo_longitude;
    }

    public getSignature_image(): string {
        return this.signature_image;
    }

    public setSignature_image(signature_image: string): void {
        this.signature_image = signature_image;
    }

    public getVisto_image(): string {
        return this.visto_image;
    }

    public setVisto_image(visto_image: string): void {
        this.visto_image = visto_image;
    }

    public getDocument_photo_url(): string {
        return this.document_photo_url;
    }

    public setDocument_photo_url(document_photo_url: string): void {
        this.document_photo_url = document_photo_url;
    }

    public getDocument_verse_photo_url(): string {
        return this.document_verse_photo_url;
    }

    public setDocument_verse_photo_url(document_verse_photo_url: string): void {
        this.document_verse_photo_url = document_verse_photo_url;
    }

    public getSelfie_photo_url(): string {
        return this.selfie_photo_url;
    }

    public setSelfie_photo_url(selfie_photo_url: string): void {
        this.selfie_photo_url = selfie_photo_url;
    }

    public getSelfie_photo_url2(): string {
        return this.selfie_photo_url2;
    }

    public setSelfie_photo_url2(selfie_photo_url2: string): void {
        this.selfie_photo_url2 = selfie_photo_url2;
    }

    public getSend_via(): string {
        return this.send_via;
    }

    public setSend_via(send_via: string): void {
        this.send_via = send_via;
    }

    public getRequire_document_photo(): string {
        return this.require_document_photo;
    }

    public setRequire_document_photo(require_document_photo: string): void {
        this.require_document_photo = require_document_photo;
    }
}
