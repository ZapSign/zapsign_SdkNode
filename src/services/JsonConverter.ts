import { DocResponse } from "../response/DocResponse";
import { DocsResponse } from "../response/DocsResponse";
import { DocAsyncResponse } from "../response/DocAsyncResponse";
import { ExtraDocResponse } from "../response/ExtraDocResponse";
import { DocFromPdf } from "../body/doc/DocFromPdf";
import { DocFromDocx } from "../body/doc/DocFromDocx";
import { DocFromTemplate } from "../body/doc/DocFromTemplate";
import { ExtraDoc } from "../body/doc/ExtraDoc";
import { Signer } from "../body/signer/Signer";
//import { SignBatch } from "../body/signer/SignBatch";

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

    //public rubricaListToJson(RubricaList rubricaList: ): string {
    //    return objecWriter.writeValueAsString(rubricaList);
    //}

    public signerToJson(signer: Signer): string {
        return JSON.stringify(signer);

    }

    //public signBachToJson(SignBatch signBatch): string {
      //  return objecWriter.writeValueAsString(signBatch);
    //}

     public jsonToDocResponse(jsonResponse: string): DocResponse {
        return JSON.parse(jsonResponse);
        // Object.assign(new Foo, { a: 1 })
     }

    public jsonToDocsResponse(jsonResponse: string): DocsResponse {
        //return this.mapper.readValue(jsonResponse, DocsResponse.class);
        return JSON.parse(jsonResponse);
    }

    public jsonToDocAsyncResponse(jsonResponse: string): DocAsyncResponse {
        //return this.mapper.readValue(jsonResponse, DocAsyncResponse.class);
        return JSON.parse(jsonResponse);

    }

    public jsonToExtraDocResponse(jsonResponse: string): ExtraDocResponse {
        //return this.mapper.readValue(jsonResponse, ExtraDocResponse.class);
        return JSON.parse(jsonResponse);
    }

    public jsonToSigner(jsonResponse: string): Signer {
        // return this.mapper.readValue(jsonResponse, Signer.class);
        return JSON.parse(jsonResponse);
    }
 }
