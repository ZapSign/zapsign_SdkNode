import { Signer } from "../../body/signer/Signer";
import DocRequests from "../../docs/DocRequests";
import { JsonConverter } from "../../services/JsonConverter";
import { DeParaTemplate } from "../../body/doc/DeParaTemplate";
import { DocFromTemplate } from "../../body/doc/DocFromTemplate";

const apiToken = '7c3a7080-04fe-43f8-bbb1-42b73bf15abd3216e318-a02b-4685-9822-30929e8a6010'

const deParaTemplateName = new DeParaTemplate("{{NOME COMPLETO}}", "Full Name");

const deParaTemplateCpf = new DeParaTemplate("{{NÚMERO DO CPF}}", "Social Security Number");

const deParaTemplateEndereco = new DeParaTemplate("{{ENDEREÇO COMPLETO}}", "Full address");

let deParaTemplates = [];

deParaTemplates.push(deParaTemplateName, deParaTemplateCpf, deParaTemplateEndereco);

const docFromTemplate = new DocFromTemplate(true, 'My New Doc From Template', 'pt-br', true, false, '', '', '', '', './', new Date(), false, [], [new Signer('', '', '', false, false, 0, '', '', '', false, false, false, false, false, false, false, false, '', '', '', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '')], 0, 'My Signer for template async', '493e86dd-0427-40dd-99d4-2a5113bd896e', deParaTemplates)

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