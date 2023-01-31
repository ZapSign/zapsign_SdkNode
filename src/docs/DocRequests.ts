import { DocFromDocx } from "src/body/doc/DocFromDocx";
import { DocFromTemplate } from "src/body/doc/DocFromTemplate";
import { ExtraDoc } from "src/body/doc/ExtraDoc";
import { DocsResponse } from "src/response/DocsResponse";
import { DocFromPdf } from "../body/doc/DocFromPdf";
import { HttpRequestFactory } from "../services/HttpRequestFactory";
import { JsonConverter } from "../services/JsonConverter";

export default class DocRequests {
    private apiRoute: string = "https://api.zapsign.com.br/api/v1/";
    private jsonConverter: JsonConverter = new JsonConverter();
    private apiToken: string = '';

    constructor(apiToken: string) {
        this.apiToken = apiToken;
    }

    public DocRequests(apiToken: string) {
        this.apiToken = apiToken;
    }

    public getTokenApi(): string {
        return this.apiToken;
    }

    public setTokenApi(apiToken: string): void {
        this.apiToken = apiToken;
    }

    public async createDocFromUploadPdf(doc: DocFromPdf) {

        const jsonDoc: string = this.jsonConverter.docFromPdfToJson(doc);

        const uri: string = this.apiRoute+"docs/?api_token="+this.apiToken;

        const response = await new HttpRequestFactory().postRequest(uri, jsonDoc);

        return this.jsonConverter.jsonToDocsResponse(response);
    }


    public async getDocs()  {
        const uri: string = this.apiRoute+"docs/?api_token="+this.apiToken;

        const response = await new HttpRequestFactory().getRequest(uri);

        return this.jsonConverter.jsonToDocsResponse(response);
    }


    public async createDocFromUploadDocx(doc: DocFromDocx) {
        const jsonDoc: string = new JsonConverter().docFromDocxToJson(doc);

        const uri: string = this.apiRoute+"docs/?api_token="+this.apiToken;

        const response = await new HttpRequestFactory().postRequest(uri, jsonDoc);

        return this.jsonConverter.jsonToDocResponse(response);
    }

    public async createDocFromUploadAsync(doc: DocFromPdf) {
        const jsonDoc: string = new JsonConverter().docFromPdfToJson(doc);

        const uri: string = this.apiRoute+"docs/async/?api_token="+this.apiToken;

        const response = await new HttpRequestFactory().postRequest(uri, jsonDoc);

        return this.jsonConverter.jsonToDocAsyncResponse(response);
    }

    public async createDocFromTemplate(doc: DocFromTemplate) {
        const jsonDoc: string = new JsonConverter().docFromTemplateToJson(doc);

        const uri: string = this.apiRoute+"models/create-doc/?api_token="+this.apiToken;

        const response = await new HttpRequestFactory().postRequest(uri, jsonDoc);

        return this.jsonConverter.jsonToDocResponse(response);
    }

    public async createDocFromTemplateAsync(doc: DocFromTemplate) {
        const jsonDoc: string = new JsonConverter().docFromTemplateToJson(doc);

        const uri: string = this.apiRoute+"models/create-doc/async/?api_token="+this.apiToken;

        const response = await new HttpRequestFactory().postRequest(uri, jsonDoc);

        return this.jsonConverter.jsonToDocAsyncResponse(response);
    }

    public async addExtraDoc(docToken: string, extraDoc: ExtraDoc) {
        const jsonDoc: string = new JsonConverter().extraDocsToJson(extraDoc);

        const  uri: string = this.apiRoute+"docs/"+docToken+"/upload-extra-doc/?api_token="+this.apiToken;

        const response = await new HttpRequestFactory().postRequest(uri, jsonDoc);

        return this.jsonConverter.jsonToExtraDocResponse(response);
    }

    public async detailDoc(docToken: string) {
        const uri: string = this.apiRoute+"docs/"+docToken+"/?api_token="+this.apiToken;

        const response = await new HttpRequestFactory().getRequest(uri);

        return this.jsonConverter.jsonToDocResponse(response);
    }

    public async deleteDoc(docToken: string) {
        const uri: string = this.apiRoute+"docs/"+docToken+"/?api_token="+this.apiToken;

        const response = await new HttpRequestFactory().deleteRequest(uri);

        return this.jsonConverter.jsonToDocResponse(response);
    }

    // public async placeSignatures(docToken: string, rubricaList: RubricaList): number {
    //     const jsonDoc: string = await = new JsonConverter().rubricaListToJson(rubricaList);

    //     const uri: string = this.apiRoute+"docs/"+docToken+"/place-signatures/?api_token="+this.apiToken;

    //     const response = await new HttpRequestFactory().postRequest(uri, jsonDoc);

    //     return response.statusCode();
    // }
}
