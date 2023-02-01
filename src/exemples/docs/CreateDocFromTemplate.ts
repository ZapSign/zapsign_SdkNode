require('dotenv').config();
import DocRequests from "../../docs/DocRequests";
import { JsonConverter } from "../../services/JsonConverter";
import { DeParaTemplate } from "../../body/doc/DeParaTemplate";
import { DocFromTemplate } from "../../body/doc/DocFromTemplate";
import { Signer } from "../../body/signer/Signer";

const apiToken: any = process.env.APITOKEN;

const deParaTemplateName = new DeParaTemplate("{{NOME COMPLETO}}", "Full Name");

const deParaTemplateCpf = new DeParaTemplate("{{NÚMERO DO CPF}}", "Social Security Number");

const deParaTemplateEndereco = new DeParaTemplate("{{ENDEREÇO COMPLETO}}", "Full address");

const signer = new Signer('', '', '', false, false, 0, '', '', '', false, false, false, false, false, false, false, false, '', '', '', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '');

const templateId: any = process.env.TEMPLATE_ID_MODELO_FIXO

let deParaTemplates = [];

deParaTemplates.push(deParaTemplateName, deParaTemplateCpf, deParaTemplateEndereco);

const docFromTemplate = new DocFromTemplate(true, 'My New Doc From Template', 'pt-br', true, false, '', '', '', '', './', new Date(), false, [], [signer], 0, 'Signer Name', templateId, deParaTemplates)

async function testeCreateDocFromTemplate() {
    try {
        const docResponse = await new DocRequests(apiToken).createDocFromTemplate(docFromTemplate);
        const jsonDocResponse = new JsonConverter().docResponseToJson(docResponse);
        console.log(jsonDocResponse)
    } catch (err) {
        console.log('err', err);
    }
}

testeCreateDocFromTemplate();