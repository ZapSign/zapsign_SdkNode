import { SignBatch } from '../../body/signer/SignBatch';
import { SignerRequest } from '../../signers/SignerRequest';
const apiToken = '7c3a7080-04fe-43f8-bbb1-42b73bf15abd3216e318-a02b-4685-9822-30929e8a6010';

const signerRequest =  new SignerRequest(apiToken);

const userToken = '91963055-9d3f-4a39-8da2-f562df8c8d29';

const signerToken1 = '21ade934-0909-40f0-a928-a9af1b0e5fb5';
const signerToken2 = '4d13d1b3-2445-4a06-ad9d-2cdb627c24cc';

let signersToken = [];
signersToken.push(signerToken1, signerToken2);

const signInBatch = new SignBatch(userToken, signersToken);

async function testePlaceSignature() {
    try {
        const docResponse = await signerRequest.signInBatch(signInBatch);
        console.log(docResponse);
        return docResponse;
    } catch(err) {
        console.log('err', err);
    }
}

testePlaceSignature();