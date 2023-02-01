require('dotenv').config();
import { Signer } from "../../body/signer/Signer";
import DocRequests from "../../docs/DocRequests";
import { JsonConverter } from "../../services/JsonConverter";
import { DocFromPdf } from "../../body/doc/DocFromPdf";

const apiToken: any = process.env.APITOKEN;

const signer1 = new Signer('First Signer - Create Doc From Upload PDF', 'myFirstSigner@teste.com', 'assinaturaTela', false, false, 0, '', '11', '999999999', false, false, false, false, false, false, false, false, 'none', '', '', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '');

const signer2 = new Signer('Second Signer - Create Doc From Upload PDF', 'mySecondSigner@teste.com', 'assinaturaTela', false, false, 0, '', '11', '999999999', false, false, false, false, false, false, false, false, 'none', '', '', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '');

let signers: Signer[] = [];

signers.push(signer1, signer2);

const pdfUrl: any = process.env.PDF_URL;

const docFromPdf = new DocFromPdf(true, 'My New Doc From Upload Pdf', 'pt-br', true, false, '', '', '', '', './', new Date(), false, [], signers, 0, pdfUrl)

async function testeCreateDocFromUploadPdf() {
    try {
        const docResponse = await new DocRequests(apiToken).createDocFromUploadPdf(docFromPdf);
        const jsonDocResponse = new JsonConverter().docResponseToJson(docResponse);
        console.log(jsonDocResponse);
    } catch (err) {
        console.log('err', err);
    }
}

testeCreateDocFromUploadPdf();