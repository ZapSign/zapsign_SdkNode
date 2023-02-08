import { DeParaTemplate } from "../DeParaTemplate";

export class DeParaTemplateBuilder {
    deParaTemplate: DeParaTemplate;

    constructor() {
        this.deParaTemplate = new DeParaTemplate();
    }

    de(de: string) {
        this.deParaTemplate.setDe(de);
        return this;
    }

    para(para: string) {
        this.deParaTemplate.setPara(para);
        return this;
    }
}