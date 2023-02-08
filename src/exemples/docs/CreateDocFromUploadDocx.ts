require('dotenv').config();
import { Signer } from "../../body/signer/Signer";
import DocRequests from "../../docs/DocRequests";
import { JsonConverter } from "../../services/JsonConverter";
import { DocFromDocx } from "../../body/doc/DocFromDocx";

const apiToken: any = process.env.APITOKEN;

const signer1 = new Signer();

const signer2 = new Signer();

let signers: Signer[] = [];

signers.push(signer1, signer2);

// const docxUrl: any = process.env.DOCX_URL;

const docFromDocx = new DocFromDocx()

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