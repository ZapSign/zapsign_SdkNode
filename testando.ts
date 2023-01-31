import DocRequests from "./src/docs/DocRequests";
const apiToken = '7c3a7080-04fe-43f8-bbb1-42b73bf15abd3216e318-a02b-4685-9822-30929e8a6010'

const docRequest =  new DocRequests(apiToken);

async function teste() {
    try {
        const data = await docRequest.getDocs();
        console.log('data', data);
        return data;
    } catch(err) {
        console.log('err', err);
    }
}


// export class GetDocs {
//     apiToken: string = "0a4d6893-f431-4d83-af80-98097029293730b9ddcf-3e60-4b8a-bb4d-5b68448e4038";
    
//     constructor(){
//         console.log('caiu no getDocs');
//     };
    
//     getDocs() {
//         try {
//             const docsResponse = new DocRequests();
//             console.log('docs response', docsResponse);
//             // docsResponse.setTokenApi(this.apiToken);
//             // docsResponse.getDocs();

//             // jsonDocResponse: string = new JsonConverter().docsResponseToJson(docsResponse);
//             // console.log(jsonDocResponse);
//         }
//         catch(err) {
//             console.log(err);
//         }
//     }
// }