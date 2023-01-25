import { DocFromPdf } from "../body/doc/DocFromPdf";
import { HttpRequestFactory } from "../services/HttpRequestFactory";
import { JsonConverter } from "../services/JsonConverter";

export default class DocRequests {
    private apiRoute: string = "https://api.zapsign.com.br/api/v1/";
    private jsonConverter: JsonConverter = new JsonConverter();
    private apiToken: string = '';

    public DocRequests(apiToken: string) {
        this.apiToken = apiToken;
    }

    public getTokenApi(): string {
        return this.apiToken;
    }

    public setTokenApi(apiToken: string): void {
        this.apiToken = apiToken;
    }

    public createDocFromUploadPdf(doc: DocFromPdf) {
        // throw new Error();

        const jsonDoc: string = this.jsonConverter.docFromPdfToJson(doc);

        const uri: string = this.apiRoute+"docs/?api_token="+this.apiToken;

        const response = new HttpRequestFactory().postRequest(uri, jsonDoc);
        // HttpResponse<String> response = new HttpRequestFactory().postRequest(uri, jsonDoc);

        // return this.jsonConverter.jsonToDocResponse(response.body());
    }

//     public DocResponse createDocFromUploadDocx(DocFromDocx doc) throws Exception {
//         String jsonDoc = new JsonConverter().docFromDocxToJson(doc);

//         String uri = this.apiRoute+"docs/?api_token="+this.apiToken;

//         HttpResponse<String> response = new HttpRequestFactory().postRequest(uri, jsonDoc);

//         return this.jsonConverter.jsonToDocResponse(response.body());
//     }

//     public DocAsyncResponse createDocFromUploadAsync(DocFromPdf doc) throws Exception {
//         String jsonDoc = new JsonConverter().docFromPdfToJson(doc);

//         String uri = this.apiRoute+"docs/async/?api_token="+this.apiToken;

//         HttpResponse<String> response = new HttpRequestFactory().postRequest(uri, jsonDoc);

//         return this.jsonConverter.jsonToDocAsyncResponse(response.body());
//     }

//     public DocResponse createDocFromTemplate(DocFromTemplate doc) throws Exception {
//         String jsonDoc = new JsonConverter().docFromTemplateToJson(doc);

//         String uri = this.apiRoute+"models/create-doc/?api_token="+this.apiToken;

//         HttpResponse<String> response = new HttpRequestFactory().postRequest(uri, jsonDoc);

//         return this.jsonConverter.jsonToDocResponse(response.body());
//     }

//     public DocAsyncResponse createDocFromTemplateAsync(DocFromTemplate doc) throws Exception {
//         String jsonDoc = new JsonConverter().docFromTemplateToJson(doc);

//         String uri = this.apiRoute+"models/create-doc/async/?api_token="+this.apiToken;

//         HttpResponse<String> response = new HttpRequestFactory().postRequest(uri, jsonDoc);

//         return this.jsonConverter.jsonToDocAsyncResponse(response.body());
//     }

//     public ExtraDocResponse addExtraDoc(String docToken, ExtraDoc extraDoc) throws Exception {
//         String jsonDoc = new JsonConverter().extraDocsToJson(extraDoc);

//         String uri = this.apiRoute+"docs/"+docToken+"/upload-extra-doc/?api_token="+this.apiToken;

//         HttpResponse<String> response = new HttpRequestFactory().postRequest(uri, jsonDoc);

//         return this.jsonConverter.jsonToExtraDocResponse(response.body());
//     }

//     public DocResponse detailDoc(String docToken) throws Exception {
//         String uri = this.apiRoute+"docs/"+docToken+"/?api_token="+this.apiToken;

//         HttpResponse<String> response = new HttpRequestFactory().getRequest(uri);

//         return this.jsonConverter.jsonToDocResponse(response.body());
//     }

//     public DocsResponse getDocs() throws Exception {
//         String uri = this.apiRoute+"docs/?api_token="+this.apiToken;

//         HttpResponse<String> response = new HttpRequestFactory().getRequest(uri);

//         return this.jsonConverter.jsonToDocsResponse(response.body());
//     }

//     public DocResponse deleteDoc(String docToken) throws Exception {
//         String uri = this.apiRoute+"docs/"+docToken+"/?api_token="+this.apiToken;

//         HttpResponse<String> response = new HttpRequestFactory().deleteRequest(uri);

//         return this.jsonConverter.jsonToDocResponse(response.body());
//     }

//     public int placeSignatures(String docToken, RubricaList rubricaList) throws Exception {
//         String jsonDoc = new JsonConverter().rubricaListToJson(rubricaList);

//         String uri = this.apiRoute+"docs/"+docToken+"/place-signatures/?api_token="+this.apiToken;

//         HttpResponse<String> response = new HttpRequestFactory().postRequest(uri, jsonDoc);

//         return response.statusCode();
//     }
}
