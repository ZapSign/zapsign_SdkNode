import { Signer } from "../signer/Signer";

export class Doc {
    private sandbox: boolean = false;;
    private name: string = "";
    private lang: string = "pt-br";
    private disable_signer_emails: boolean = false;;
    private signed_file_only_finished: boolean = false;
    private brand_logo: string= "";
    private brand_primary_color: string = "";
    private brand_name: string = "";
    private external_id: string = "";
    private folder_path: string = "/";
    private date_limit_to_sign: Date = new Date();
    private signature_order_active: boolean = false;
    private observers: string[] = [];
    private signers: Signer[] = [];
    private reminder_every_n_days: number = 0;

    public isSandbox(): boolean {
        return this.sandbox;
    }

    public setSandbox(sandbox: boolean):void {
        this.sandbox = sandbox;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void  {
        this.name = name;
    }

    public getLang(): string {
        return this.lang;
    }

    public setLang(lang: string): void {
        this.lang = lang;
    }

    public isDisableSignerEmails(): boolean {
        return this.disable_signer_emails;
    }

    public setDisableSignerEmails(disableSignerEmails: boolean): void {
        this.disable_signer_emails = disableSignerEmails;
    }

    public isSignedFileOnlyFinished(): boolean {
        return this.signed_file_only_finished;
    }

    public setSigneFileOnlyFinished(signedFileOnlyFinished: boolean): void {
        this.signed_file_only_finished = signedFileOnlyFinished;
    }

    public getBrandLogo(): string {
        return this.brand_logo;
    }

    public setBrandLogo(brandLogo: string): void {
        this.brand_logo = brandLogo;
    }

    public getBrandPrimaryColor(): string {
        return this.brand_primary_color;
    }

    public setBrandPrimaryColor(brandPrimaryColor: string): void {
        this.brand_primary_color = brandPrimaryColor;
    }

    public getBrandName(): string {
        return this.brand_name;
    }

    public setBrandName(brandName: string): void {
        this.brand_name = brandName;
    }

    public getExternalId(): string {
        return this.external_id;
    }

    public setExternalId(externalId: string): void {
        this.external_id = externalId;
    }

    public getFolderPath(): string {
        return this.folder_path;
    }

    public setFolderPath(folderPath: string): void {
        this.folder_path = folderPath;
    }

    public getDateLimitToSign(): Date {
        return this.date_limit_to_sign;
    }

    public setDateLimitToSign(dateLimitToSign: Date): void {
        this.date_limit_to_sign = dateLimitToSign;
    }

    public isSignatureOrderActive(): boolean {
        return this.signature_order_active;
    }

    public setSignatureOrderActive(signatureOrderActive: boolean): void {
        this.signature_order_active = signatureOrderActive;
    }

    public getObservers(): string[] {
        return this.observers;
    }

    public setObservers(observers: string[]): void {
        this.observers = observers;
    }

    public getReminderEveryNdays(): number {
        return this.reminder_every_n_days;
    }

    public setReminderEveryNdays(reminderEveryNdays: number): void {
        this.reminder_every_n_days = reminderEveryNdays;
    }

    public getSigners(): Signer[] {
        return this.signers;
    }

    public setSigners(signers: Signer[]): void {
        this.signers = signers;
    }
}

