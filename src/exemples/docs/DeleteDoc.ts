require('dotenv').config();
import { JsonConverter } from "../../services/JsonConverter";
import DocRequests from "../../docs/DocRequests";

const apiToken: any = process.env.APITOKEN;
const docToken: any = process.env.TOKEN_DOC_TO_BE_DELETED;

async function testeDeleteDoc() {
    try {
        const docResponse = await new DocRequests(apiToken).deleteDoc(docToken);

        const jsonDocResponse = new JsonConverter().docResponseToJson(docResponse);
        console.log(jsonDocResponse);
    } catch (err) {
        console.log('err', err);
    }
}

testeDeleteDoc()