require('dotenv').config();
import { Signer } from "../../body/signer/Signer";
import DocRequests from "../../docs/DocRequests";
import { JsonConverter } from "../../services/JsonConverter";
import { DeParaTemplate } from "../../body/doc/DeParaTemplate";
import { DocFromTemplate } from "../../body/doc/DocFromTemplate";

const apiToken: any = process.env.APITOKEN;

const deParaTemplateName = new DeParaTemplate("{{NOME COMPLETO}}", "Full Name");

const deParaTemplateCpf = new DeParaTemplate("{{NÚMERO DO CPF}}", "Social Security Number");

const deParaTemplateEndereco = new DeParaTemplate("{{ENDEREÇO COMPLETO}}", "Full address");

let deParaTemplates = [];

deParaTemplates.push(deParaTemplateName, deParaTemplateCpf, deParaTemplateEndereco);

const templateId: any = process.env.TEMPLATE_ID_MODELO_FIXO

const docFromTemplate = new DocFromTemplate(true, 'My New Doc From Template', 'pt-br', true, false, '', '', '', '', './', new Date(), false, [], [new Signer('', '', '', false, false, 0, '', '', '', false, false, false, false, false, false, false, false, '', '', '', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '')], 0, 'My Signer for template async', templateId, deParaTemplates)

async function testeCreateDocFromTemplateAsync() {
    try {
        const docResponse = await new DocRequests(apiToken).createDocFromTemplateAsync(docFromTemplate);
        const jsonDocResponse = new JsonConverter().docAsyncResponseToJson(docResponse);
        console.log(jsonDocResponse)
    } catch (err) {
        console.log('err', err);
    }
}

testeCreateDocFromTemplateAsync();