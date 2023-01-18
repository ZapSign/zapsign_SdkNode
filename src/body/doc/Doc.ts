import { Signer } from "../signer/Signer";

export class Doc {
    private sandbox: boolean;
    private name: string;
    private lang: string;
    private disable_signer_emails: boolean;
    private signed_file_only_finished: boolean;
    private brand_logo: string ;
    private brand_primary_color: string;
    private brand_name: string;
    private external_id: string;
    private folder_path: string;
    private date_limit_to_sign: Date;
    private signature_order_active: boolean;
    private observers: string[];
    private signers: string[];
    private reminder_every_n_days: number;

    public Doc() {
        this.sandbox = false;
        this.name = "";
        this.lang = "pt-br";
        this.disable_signer_emails = false;
        this.signed_file_only_finished = false;
        this.brand_logo = "";
        this.brand_primary_color = "";
        this.brand_name = "";
        this.external_id = "";
        this.folder_path = "/";
        this.date_limit_to_sign = new Date();
        this.signature_order_active = false;
        this.signers = [];
        this.observers = [];
    }

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

    public isDisable_signer_emails(): boolean {
        return this.disable_signer_emails;
    }

    public setDisable_signer_emails(disable_signer_emails: boolean): void {
        this.disable_signer_emails = disable_signer_emails;
    }

    public isSigned_file_only_finished(): boolean {
        return this.signed_file_only_finished;
    }

    public setSigned_file_only_finished(signed_file_only_finished: boolean): void {
        this.signed_file_only_finished = signed_file_only_finished;
    }

    public getBrand_logo(): string {
        return this.brand_logo;
    }

    public setBrand_logo(brand_logo: string): void {
        this.brand_logo = brand_logo;
    }

    public getBrand_primary_color(): string {
        return this.brand_primary_color;
    }

    public setBrand_primary_color(brand_primary_color: string): void {
        this.brand_primary_color = brand_primary_color;
    }

    public getBrand_name(): string {
        return this.brand_name;
    }

    public setBrand_name(brand_name: string): void {
        this.brand_name = brand_name;
    }

    public getExternal_id(): string {
        return this.external_id;
    }

    public setExternal_id(external_id: string): void {
        this.external_id = external_id;
    }

    public getFolder_path(): string {
        return this.folder_path;
    }

    public setFolder_path(folder_path: string): void {
        this.folder_path = folder_path;
    }

    public getDate_limit_to_sign(): Date {
        return this.date_limit_to_sign;
    }

    public setDate_limit_to_sign(date_limit_to_sign: Date): void {
        this.date_limit_to_sign = date_limit_to_sign;
    }

    public isSignature_order_active(): boolean {
        return this.signature_order_active;
    }

    public setSignature_order_active(signature_order_active: boolean): void {
        this.signature_order_active = signature_order_active;
    }

    public  getObservers(): string[] {
        return this.observers;
    }

    public setObservers(observers: string[]): void {
        this.observers = observers;
    }

    public getReminder_every_n_days(): number {
        return this.reminder_every_n_days;
    }

    public setReminder_every_n_days(reminder_every_n_days: number): void {
        this.reminder_every_n_days = reminder_every_n_days;
    }

    // public List<Signer> getSigners() throws Exception {
    //     return signers;
    // }

    // public void setSigners(List<Signer> signers) throws Exception {
    //     this.signers = signers;
    // }
}

