import { DocResponse } from '../response/DocResponse';
import { DocsResponse } from '../response/DocsResponse';
import { DocAsyncResponse } from '../response/DocAsyncResponse';
import { ExtraDocResponse } from '../response/ExtraDocResponse';
import { DocFromPdf } from '../body/doc/DocFromPdf';
import { DocFromDocx } from '../body/doc/DocFromDocx';
import { DocFromTemplate } from '../body/doc/DocFromTemplate';
import { ExtraDoc } from '../body/doc/ExtraDoc';
import { Signer } from '../body/signer/Signer';
import { RubricasArray } from 'src/body/doc/RubricasArray';
import { SignBatch } from '../body/signer/SignBatch';

 export class JsonConverter {        

    public docResponseToJson(docResponse: DocResponse): string {
        return JSON.stringify(docResponse);
    }

    public docsResponseToJson(docsResponse: DocsResponse ): string {
        return JSON.stringify(docsResponse);
    }

    public docAsyncResponseToJson(docAsyncResponse: DocAsyncResponse): string {
        return JSON.stringify(docAsyncResponse);
    }

    public extraDocToJson(extraDocResponse: ExtraDocResponse): string {
        return JSON.stringify(extraDocResponse);
    }

    public docFromPdfToJson(docFromPdf: DocFromPdf): string {
        return JSON.stringify(docFromPdf);
    }

    public docFromDocxToJson(docFromDocx: DocFromDocx): string {
        return JSON.stringify(docFromDocx);
    }

    public docFromTemplateToJson(docFromTemplate: DocFromTemplate): string {
        return JSON.stringify(docFromTemplate);
    }

    public extraDocsToJson(extraDoc: ExtraDoc): string {
        return JSON.stringify(extraDoc);
    }

    public rubricaListToJson(rubricasArray: RubricasArray ): string {
        return JSON.stringify(rubricasArray);
    }

    public signerToJson(signer: Signer): string {
        return JSON.stringify(signer);
    }

    public signBachToJson(signBatch: SignBatch): string {
        return JSON.stringify(signBatch);
    }

     public jsonToDocResponse(jsonResponse: string): DocResponse {
        return JSON.parse(JSON.stringify(jsonResponse));
     }

    public jsonToDocsResponse(jsonResponse: string) {
        return JSON.parse(JSON.stringify(jsonResponse));
    }

    public jsonToDocAsyncResponse(jsonResponse: string): DocAsyncResponse {
        return JSON.parse(JSON.stringify(jsonResponse));

    }

    public jsonToExtraDocResponse(jsonResponse: string): ExtraDocResponse {
        return JSON.parse(JSON.stringify(jsonResponse));
    }

    public jsonToSigner(jsonResponse: string): Signer {
        return JSON.parse(JSON.stringify(jsonResponse));
    }
 }
