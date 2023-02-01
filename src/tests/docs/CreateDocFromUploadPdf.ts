import { Signer } from "../../body/signer/Signer";
import DocRequests from "../../docs/DocRequests";
import { JsonConverter } from "../../services/JsonConverter";
import { DocFromPdf } from "../../body/doc/DocFromPdf";

const apiToken = '7c3a7080-04fe-43f8-bbb1-42b73bf15abd3216e318-a02b-4685-9822-30929e8a6010';

const signer1 = new Signer('First Signer - Create Doc From Upload PDF', 'myFirstSigner@teste.com', 'assinaturaTela', false, false, 0, '', '11', '999999999', false, false, false, false, false, false, false, false, 'none', '', '', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '');

const signer2 = new Signer('Second Signer - Create Doc From Upload PDF', 'mySecondSigner@teste.com', 'assinaturaTela', false, false, 0, '', '11', '999999999', false, false, false, false, false, false, false, false, 'none', '', '', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '');

let signers: Signer[] = [];

signers.push(signer1, signer2);

const docFromPdf = new DocFromPdf(true, 'My New Doc From Upload Pdf', 'pt-br', true, false, '', '', '', '', './', new Date(), false, [], signers, 0, 'https://zapsign.s3.amazonaws.com/2023/1/docs/2574d14c-ae87-497e-b0f5-7908ef1a6c95/7dc4023d-240b-4402-aaa7-8d6b8fd36e94.pdf')

async function testeCreateDocFromUploadPdf() {
    try {
        const docResponse = await new DocRequests(apiToken).createDocFromUploadPdf(docFromPdf);
        const jsonDocResponse = new JsonConverter().docResponseToJson(docResponse);
        console.log(jsonDocResponse);
    } catch (err) {
        console.log('err', err);
    }
}

testeCreateDocFromUploadPdf();