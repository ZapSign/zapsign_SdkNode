require('dotenv').config();
import { SignerRequest } from "../../signers/SignerRequest";

const apiToken: any = process.env.APITOKEN;
const signerToken: any = process.env.SIGNER_TOKEN;

async function testeDetailSigner() {
    try {
        const response = await new SignerRequest(apiToken).detailSigner(signerToken);
        console.log(response)
    } catch (err) {
        console.log('err', err);
    }
}

testeDetailSigner();