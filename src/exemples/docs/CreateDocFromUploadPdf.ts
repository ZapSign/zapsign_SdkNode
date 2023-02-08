require('dotenv').config();
import { Signer } from "../../body/signer/Signer";
import DocRequests from "../../docs/DocRequests";
import { JsonConverter } from "../../services/JsonConverter";
import { DocFromPdfBuilder } from "../../body/doc/builders/DocFromPdfBuilder";

const apiToken: any = process.env.APITOKEN;

const signer1 = new Signer();

const signer2 = new Signer();

let signers: Signer[] = [];

signers.push(signer1, signer2);

const pdfUrl: any = process.env.PDF_URL;

const docFromPdf = new DocFromPdfBuilder()
    .withSandbox(true)
    .withName('MyNewDoc')
    .withLang('pt-br')
    .withSigners(signers)
    .withUrlPdf(pdfUrl)
    .build();

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