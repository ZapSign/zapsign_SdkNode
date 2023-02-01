import { Doc } from "./Doc";
import { DeParaTemplate } from "./DeParaTemplate";
import { Signer } from "../signer/Signer";

export class DocFromTemplate extends Doc {
    private signer_name: string;
    private template_id: string;
    private data: DeParaTemplate[];

    
    // @Override
    // public void setSigners(List<Signer> signers) throws Exception {
        //     throw new Exception("you can not set signers in DocFromTemplate, try setSigner_name");
        // }
        
    constructor(
        sandbox: boolean,
        name: string,
        lang: string,
        disable_signer_emails: boolean,
        signed_file_only_finished: boolean,
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
        signer_name: string,
        template_id: string,
        data: DeParaTemplate[]
        ) {
        super(sandbox, name, lang, disable_signer_emails, signed_file_only_finished, brand_logo, brand_primary_color, brand_name, external_id, folder_path, date_limit_to_sign, signature_order_active, observers, signers, reminder_every_n_days);
        this.signer_name = signer_name;
        this.template_id = template_id;
        this.data = data;
    }

    // public getSigners(): Signer[]  {
    //     return null;
    // }

    public getSignerName(): string {
        return this.signer_name;
    }

    public setSignerName(signer_name: string): void {
        this.signer_name = signer_name;
    }

    public getTemplateId(): string {
        return this.template_id;
    }
    public setTemplateId(template_id: string): void {
        this.template_id = template_id;
    }

    public getData(): DeParaTemplate[] {
        return this.data;
    }

    public setData(data: DeParaTemplate[]): void {
        this.data = data;
    }
}
