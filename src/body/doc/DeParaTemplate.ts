export class DeParaTemplate {
    private de: string;
    private para: string;

    constructor() {
        this.de = '';
        this.para = ''
    }

    public DeParaTemplateBuilder(de: string, para: string) {
        this.setDe(de);
        this.setPara(para)
    }

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