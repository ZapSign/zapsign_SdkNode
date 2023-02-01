require('dotenv').config();
import { Rubrica } from "../../body/doc/Rubrica";
import { RubricasArray } from "../../body/doc/RubricasArray";
import DocRequests from "../../docs/DocRequests";

const apiToken: any = process.env.APITOKEN;

const docToken: any = process.env.DOCTOKEN;

const rubrica1 = new Rubrica(0, 52.50, 75.71, 19.55, 9.42, 'signature', '21ade934-0909-40f0-a928-a9af1b0e5fb5');
const rubrica2 = new Rubrica(0, 20.71, 75.71, 19.55, 9.42, 'visto', '4d13d1b3-2445-4a06-ad9d-2cdb627c24cc');

let rubricas = [];
rubricas.push(rubrica1, rubrica2);

const rubricasArray = new RubricasArray(rubricas);

const docRequest =  new DocRequests(apiToken);

async function testePlaceSignature() {
    try {
        const docResponse = await docRequest.placeSignatures(docToken, rubricasArray);
        console.log(docResponse);
        return docResponse;
    } catch(err) {
        console.log('err', err);
    }
}

testePlaceSignature();