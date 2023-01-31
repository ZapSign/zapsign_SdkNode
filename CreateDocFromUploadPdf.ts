import DocRequests from "src/docs/DocRequests";
import { JsonConverter } from "src/services/JsonConverter";

export class GetDocs {
    apiToken: string = "0a4d6893-f431-4d83-af80-98097029293730b9ddcf-3e60-4b8a-bb4d-5b68448e4038";
    
    constructor(){
        console.log('caiu no getDocs');
    };
    
    getDocs() {
        try {
            const docsResponse = new DocRequests();
            console.log('docs response', docsResponse);
            // docsResponse.setTokenApi(this.apiToken);
            // docsResponse.getDocs();

            // jsonDocResponse: string = new JsonConverter().docsResponseToJson(docsResponse);
            // console.log(jsonDocResponse);
        }
        catch(err) {
            console.log(err);
        }
    }
}