import { Doc } from "./Doc";
import { DeParaTemplate } from "./DeParaTemplate";

export class DocFromTemplate extends Doc {
    private signer_name: string = '';
    private template_id: string = '';
    private data: DeParaTemplate[] = [new DeParaTemplate()];

    public getSigner() {
        throw new Error('You can not set signers in DocFromTemplate, try setSigner_name.')
    }

    public setSigner() {
        throw new Error('You can not set signers in DocFromTemplate, try setSigner_name.')
    }

    public getSignerName(): string {
        return this.signer_name;
    }

    public setSignerName(signerName: string): void {
        this.signer_name = signerName;
    }

    public getTemplateId(): string {
        return this.template_id;
    }
    
    public setTemplateId(templateId: string): void {
        this.template_id = templateId;
    }

    public getData(): DeParaTemplate[] {
        return this.data;
    }

    public setData(data: DeParaTemplate[]): void {
        this.data = data;
    }
}
