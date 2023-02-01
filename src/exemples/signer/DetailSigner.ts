import { SignerRequest } from "../../signers/SignerRequest";

const apiToken = '7c3a7080-04fe-43f8-bbb1-42b73bf15abd3216e318-a02b-4685-9822-30929e8a6010'
const signerToken = 'b07e0ad3-ff1a-415f-8f00-bce85af576dc';

async function testeDetailSigner() {
    try {
        const response = await new SignerRequest(apiToken).detailSigner(signerToken);
        console.log(response)
    } catch (err) {
        console.log('err', err);
    }
}

testeDetailSigner();