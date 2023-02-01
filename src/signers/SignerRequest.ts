import { SignBatch } from "src/body/signer/SignBatch";
import { Signer } from "../body/signer/Signer";
import { HttpRequestFactory } from "../services/HttpRequestFactory";
import { JsonConverter } from "../services/JsonConverter";

export class SignerRequest {
    private apiRoute: string = "https://api.zapsign.com.br/api/v1/";
    private jsonConverter = new JsonConverter();
    private apiToken: string;

    constructor(apiToken: string) {
        this.apiToken = apiToken;
    }

    public getApiToken(): string {
        return this.apiToken;
    }

    public setApiToken(apiToken: string): void {
        this.apiToken = apiToken;
    }

    public async detailSigner(signerToken: string): Promise<Signer> {
        const uri: string = this.apiRoute+"signers/"+signerToken+"/?api_token="+this.apiToken;

        const response = await new HttpRequestFactory().getRequest(uri);

        return this.jsonConverter.jsonToSigner(response);
    }

    public async updateSigner(signerToken: string, signer: Signer): Promise<Signer> {
        const jsonDoc: string = this.jsonConverter.signerToJson(signer);

        const uri: string = this.apiRoute+"signers/"+signerToken+"/?api_token="+this.apiToken;

        const response = await new HttpRequestFactory().postRequest(uri, jsonDoc);

        return this.jsonConverter.jsonToSigner(response);
    }

    public async addSigner(docToken: string, signer: Signer): Promise<Signer> {
        const jsonDoc: string = this.jsonConverter.signerToJson(signer);

        const uri: string = this.apiRoute+"docs/"+docToken+"/add-signer/?api_token="+this.apiToken;

        const response = await  new HttpRequestFactory().postRequest(uri, jsonDoc);

        return this.jsonConverter.jsonToSigner(response);
    }

    public async deleteSigner(docToken: string): Promise<string> {
        const uri: string = this.apiRoute+"signer/"+docToken+"/remove/?api_token="+this.apiToken;

        const response = await new HttpRequestFactory().deleteRequest(uri);

        return response;
    }

    public async signInBatch(signBatch: SignBatch): Promise<string> {
        const jsonDoc: string = this.jsonConverter.signBachToJson(signBatch);

        const uri: string = this.apiRoute+"sign/?api_token="+this.apiToken;

        const response = new HttpRequestFactory().postRequest(uri, jsonDoc);

        return response;
    }
}