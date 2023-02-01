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
        
    constructor(signer_name: string, template_id: string, data: DeParaTemplate[]) {
        super(false, '', '', false, false, '', '', '', '', '', new Date(), false, [], [], 0) ;
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
