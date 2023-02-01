import { Signer } from "../../body/signer/Signer";
import DocRequests from "../../docs/DocRequests";
import { JsonConverter } from "../../services/JsonConverter";
import { DocFromDocx } from "../../body/doc/DocFromDocx";

const apiToken = '7c3a7080-04fe-43f8-bbb1-42b73bf15abd3216e318-a02b-4685-9822-30929e8a6010';

const signer1 = new Signer('First Signer - Create Doc From Upload', 'myFirstSigner@teste.com', 'assinaturaTela', false, false, 0, '', '11', '999999999', false, false, false, false, false, false, false, false, 'none', '', '', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '');

const signer2 = new Signer('Second Signer - Create Doc From Upload', 'mySecondSigner@teste.com', 'assinaturaTela', false, false, 0, '', '11', '999999999', false, false, false, false, false, false, false, false, 'none', '', '', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '');

let signers: Signer[] = [];

signers.push(signer1, signer2);

const docFromDocx = new DocFromDocx(true, 'My New Doc From Upload Docx', 'pt-br', true, false, '', '', '', '', './', new Date(), false, [], signers, 0, 'https://zapsign.s3.amazonaws.com/sdk/436cea07-db91-4df4-ac99-5737bc85afb1_1.docx')

async function testeCreateDocFromUploadDocx() {
    try {
        const docResponse = await new DocRequests(apiToken).createDocFromUploadDocx(docFromDocx);
        const jsonDocResponse = new JsonConverter().docResponseToJson(docResponse);
        console.log(jsonDocResponse);
    } catch (err) {
        console.log('err', err);
    }
}

testeCreateDocFromUploadDocx();