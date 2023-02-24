require('dotenv').config();
import { SignBatchBuilder } from 'src/body/signer/builders/SignBatchBuilder';
import { SignerRequest } from '../../signers/SignerRequest';

const apiToken: any = process.env.APITOKEN;

const signerRequest =  new SignerRequest(apiToken);

const userToken: any = process.env.USER_TOKEN;

const signerToken1: any = process.env.SIGNER_TOKEN_1;
const signerToken2: any = process.env.SIGNER_TOKEN_2;

let signersToken = [];
signersToken.push(signerToken1, signerToken2);

const signInBatch = new SignBatchBuilder().withUserToken(userToken);

// async function testePlaceSignature() {
//     try {
//         const docResponse = await signerRequest.signInBatch(signInBatch);
//         console.log(docResponse);
//         return docResponse;
//     } catch(err) {
//         console.log('err', err);
//     }
// }

// testePlaceSignature();