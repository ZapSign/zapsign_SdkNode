require('dotenv').config();
import { SignerRequest } from "../../signers/SignerRequest";

const apiToken: any = process.env.APITOKEN;
const signerToken: any = process.env.SIGNER_TOKEN_TO_BE_DELETED;

async function testeDeleteSigner() {
    try {
        const response = await new SignerRequest(apiToken).deleteSigner(signerToken);
        console.log(response)
    } catch (err) {
        console.log('err', err);
    }
}

testeDeleteSigner();