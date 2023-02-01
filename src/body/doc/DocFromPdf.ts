import { Signer } from "../signer/Signer";
import { Doc } from "./Doc";

export class DocFromPdf extends Doc {
    private url_pdf: string;

    constructor(
        sandbox: boolean,
        name: string,
        lang: string,
        disable_signer_emails: boolean, signed_file_only_finished: boolean,
        brand_logo: string,
        brand_primary_color: string,
        brand_name: string,
        external_id: string,
        folder_path: string,
        date_limit_to_sign: Date,
        signature_order_active: boolean,
        observers: string[],
        signers: Signer[],
        reminder_every_n_days: number,
        url_pdf: string,
        ) {
        super(sandbox, name, lang, disable_signer_emails, signed_file_only_finished, brand_logo, brand_primary_color, brand_name, external_id, folder_path, date_limit_to_sign, signature_order_active, observers, signers, reminder_every_n_days);
        this.url_pdf = url_pdf;
    }

    public getUrl_pdf(): string {
        return this.url_pdf;
    }
    public setUrl_pdf(url_pdf: string): void {
        this.url_pdf = url_pdf;
    }
}