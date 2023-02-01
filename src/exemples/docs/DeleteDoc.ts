import { JsonConverter } from "../../services/JsonConverter";
import DocRequests from "../../docs/DocRequests";

const apiToken = '7c3a7080-04fe-43f8-bbb1-42b73bf15abd3216e318-a02b-4685-9822-30929e8a6010'
const docToken = 'fca8d1a8-ab24-4692-a643-4621e911c05c';

async function testeDeleteDoc() {
    try {
        const docResponse = await new DocRequests(apiToken).deleteDoc(docToken);

        const jsonDocResponse = new JsonConverter().docResponseToJson(docResponse);
        console.log(jsonDocResponse);
    } catch (err) {
        console.log('err', err);
    }
}

testeDeleteDoc().then(data => console.log('data', data));