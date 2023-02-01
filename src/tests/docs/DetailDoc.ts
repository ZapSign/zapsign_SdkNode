import DocRequests from "../../docs/DocRequests";
const apiToken = '7c3a7080-04fe-43f8-bbb1-42b73bf15abd3216e318-a02b-4685-9822-30929e8a6010';

const docRequest =  new DocRequests(apiToken);

const docToken: string = '106438e4-745d-42ed-8ec0-1cb234d0147f';

async function testeDetailDoc() {
    try {
        const docResponse = await docRequest.detailDoc(docToken);
        console.log(docResponse);
        return docResponse;
    } catch(err) {
        console.log('err', err);
    }
}

testeDetailDoc();