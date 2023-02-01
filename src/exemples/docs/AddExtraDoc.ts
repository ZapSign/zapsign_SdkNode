import { JsonConverter } from "../../services/JsonConverter";
import DocRequests from "../../docs/DocRequests";
import { ExtraDoc } from "../../body/doc/ExtraDoc";

const apiToken: string = '7c3a7080-04fe-43f8-bbb1-42b73bf15abd3216e318-a02b-4685-9822-30929e8a6010';

const docToken: string = '106438e4-745d-42ed-8ec0-1cb234d0147f';

const docUrl: string = 'https://zapsign.s3.amazonaws.com/2022/1/pdf/63d19807-cbfa-4b51-8571-215ad0f4eb98/ca42e7be-c932-482c-b70b-92ad7aea04be.pdf';

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