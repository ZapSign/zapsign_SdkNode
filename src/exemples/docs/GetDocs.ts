require('dotenv').config();
import { JsonConverter } from "../../services/JsonConverter";
import DocRequests from "../../docs/DocRequests";

const apiToken: any = process.env.APITOKEN;

const docRequest =  new DocRequests(apiToken);

async function testeGetDocs() {
    try {
        const docResponse = await docRequest.getDocs();
        const jsonDocResponse = new JsonConverter().docsResponseToJson(docResponse);
        console.log(jsonDocResponse);
    } catch(err) {
        console.log('err', err);
    }
}

testeGetDocs();