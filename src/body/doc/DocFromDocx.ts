import { Doc } from "./Doc";

export class DocFromDocx extends Doc {
    private url_docx: string;

    // @Builder(builderMethodName = "docFromDocxBuilder")
    // public DocFromDocx(
    //         boolean sandbox,
    //         String name,
    //         String lang,
    //         boolean disable_signer_emails,
    //         boolean signed_file_only_finished,
    //         String brand_logo,
    //         String brand_primary_color,
    //         String brand_name,
    //         String external_id,
    //         String folder_path,
    //         Date date_limit_to_sign,
    //         boolean signature_order_active,
    //         ArrayList<String> observers,
    //         int reminder_every_n_days,
    //         List<Signer> signers,
    //         String url_docx
    // ) {
    //     super(sandbox, name, lang, disable_signer_emails, signed_file_only_finished, brand_logo, brand_primary_color, brand_name, external_id, folder_path, date_limit_to_sign, signature_order_active, observers, reminder_every_n_days, signers);
    //     this.url_docx = url_docx;
    // }

    public getUrl_docx(): string {
        return this.url_docx;
    }
    public SetUrl_docx(url_docx: string): void {
        this.url_docx = url_docx;
    }
}
