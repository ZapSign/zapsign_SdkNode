require('dotenv').config();
import { JsonConverter } from "../../services/JsonConverter";
import DocRequests from "../../docs/DocRequests";
import { ExtraDoc } from "../../body/doc/ExtraDoc";

const apiToken: any = process.env.APITOKEN;

const docToken: any = process.env.DOCTOKEN;

const docUrl: any = process.env.DOCURL;

const docRequest = new DocRequests(apiToken);

const extraDoc = new ExtraDoc('New Extra Doc', docUrl);

async function testeExtraDocs() {
    try {
        const extraDocResponse = await docRequest.addExtraDoc(docToken, extraDoc);
        const jsonExtraDocs = new JsonConverter().extraDocToJson(extraDocResponse);
        console.log(jsonExtraDocs);
    } catch(err) {
        console.log('err', err);
    }
}

testeExtraDocs();