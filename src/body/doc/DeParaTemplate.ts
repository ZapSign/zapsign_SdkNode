export class DeParaTemplate {
    private de: string;
    private para: string;


    // @Builder(builderMethodName = "deParaTemplateBuilder")
    // public DeParaTemplate(String de, String para) {
    //     this.de = de;
    //     this.para = para;
    // }

    public getDe(): string {
        return this.de;
    }

    public setDe(de: string): void {
        this.de = de;
    }

    public getPara(): string {
        return this.para;
    }

    public setPara(para: string): void {
        this.para = para;
    }
}