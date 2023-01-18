import { Doc } from "./Doc";
import { DeParaTemplate } from "./DeParaTemplate";
import { Signer } from "../signer/Signer";

export class DocFromTemplate extends Doc {
    private signer_name: string;
    private template_id: string;
    private data: DeParaTemplate[];

    // public getSigners(): Signer[]  {
    //     // public List<Signer> getSigners() {
    //     return null;
    // }

    // @Override
    // public void setSigners(List<Signer> signers) throws Exception {
    //     throw new Exception("you can not set signers in DocFromTemplate, try setSigner_name");
    // }

    public getSigner_name(): string {
        return this.signer_name;
    }

    public setSigner_name(signer_name: string): void {
        this.signer_name = signer_name;
    }

    public getTemplate_id(): string {
        return this.template_id;
    }
    public setTemplate_id(template_id: string): void {
        this.template_id = template_id;
    }

    public getData(): DeParaTemplate[] {
        return this.data;
    }

    public setData(data: DeParaTemplate[]): void {
        this.data = data;
    }
}
