require('dotenv').config();
import { JsonConverter } from "../../services/JsonConverter";
import { DocFromPdf } from "../../body/doc/DocFromPdf";
import { Signer } from "../../body/signer/Signer";
import DocRequests from "../../docs/DocRequests";

const apiToken: any = process.env.APITOKEN;

const signer1 = new Signer('My First Signer', 'myFirstSigner@teste.com', 'assinaturaTela', false, false, 0, '', '11', '999999999', false, false, false, false, false, false, false, false, 'none', '', '', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '');

const signer2 = new Signer('My Second Signer', 'mySecondSigner@teste.com', 'assinaturaTela', false, false, 0, '', '11', '999999999', false, false, false, false, false, false, false, false, 'none', '', '', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '');

let signers: Signer[] = [];

signers.push(signer1, signer2);

const urlPdf: any = process.env.DOCURLUPLOADASYNC;

const docFromPdf = new DocFromPdf(true, 'My Contract', 'pt-br', true, false, '', '', '', '', './', new Date(), false, [], signers, 0 ,urlPdf);

async function testeCreateDocFromUploadAsync() {
    try {
        const docAsyncResponse = await new DocRequests(apiToken).createDocFromUploadAsync(docFromPdf);
        const jsonDocResponse = new JsonConverter().docAsyncResponseToJson(docAsyncResponse);
        console.log(jsonDocResponse);

    } catch (err) {
        console.log('err', err);
    }
}

testeCreateDocFromUploadAsync();