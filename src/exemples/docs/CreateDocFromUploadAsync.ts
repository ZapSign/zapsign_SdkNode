import { JsonConverter } from "../../services/JsonConverter";
import { DocFromPdf } from "../../body/doc/DocFromPdf";
import { Signer } from "../../body/signer/Signer";
import DocRequests from "../../docs/DocRequests";

const apiToken = '7c3a7080-04fe-43f8-bbb1-42b73bf15abd3216e318-a02b-4685-9822-30929e8a6010';

const signer1 = new Signer('My First Signer', 'myFirstSigner@teste.com', 'assinaturaTela', false, false, 0, '', '11', '999999999', false, false, false, false, false, false, false, false, 'none', '', '', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '');

const signer2 = new Signer('My Second Signer', 'mySecondSigner@teste.com', 'assinaturaTela', false, false, 0, '', '11', '999999999', false, false, false, false, false, false, false, false, 'none', '', '', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '');

let signers: Signer[] = [];

signers.push(signer1, signer2);

const docFromPdf = new DocFromPdf(true, 'My Contract', 'pt-br', true, false, '', '', '', '', './', new Date(), false, [], signers, 0 ,'https://zapsign.s3.amazonaws.com/2023/1/pdf/9aca4e32-14a9-4100-b380-1d934bc90cb4/657273eb-4545-4d27-89c0-aa8adf602230.pdf')

async function testeCreateDocFromUploadAsync() {
    try {
        const docAsyncResponse = await new DocRequests(apiToken).createDocFromUploadAsync(docFromPdf);
        const jsonDocResponse = new JsonConverter().docAsyncResponseToJson(docAsyncResponse);
        console.log(jsonDocResponse);

    } catch (err) {
        console.log('err', err);
    }
}

testeCreateDocFromUploadAsync();