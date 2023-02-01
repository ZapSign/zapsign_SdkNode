require('dotenv').config();
import { Signer } from "../../body/signer/Signer";
import DocRequests from "../../docs/DocRequests";
import { JsonConverter } from "../../services/JsonConverter";
import { DocFromDocx } from "../../body/doc/DocFromDocx";

const apiToken: any = process.env.APITOKEN;

const signer1 = new Signer('First Signer - Create Doc From Upload', 'myFirstSigner@teste.com', 'assinaturaTela', false, false, 0, '', '11', '999999999', false, false, false, false, false, false, false, false, 'none', '', '', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '');

const signer2 = new Signer('Second Signer - Create Doc From Upload', 'mySecondSigner@teste.com', 'assinaturaTela', false, false, 0, '', '11', '999999999', false, false, false, false, false, false, false, false, 'none', '', '', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '');

let signers: Signer[] = [];

signers.push(signer1, signer2);

const docxUrl: any = process.env.DOCX_URL;

const docFromDocx = new DocFromDocx(true, 'My New Doc From Upload Docx', 'pt-br', true, false, '', '', '', '', './', new Date(), false, [], signers, 0, docxUrl)

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