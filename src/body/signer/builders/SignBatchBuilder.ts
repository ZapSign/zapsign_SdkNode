import { SignBatch } from "../SignBatch";

export class SignBatchBuilder {
    signerBatch: SignBatch;

    constructor() {
        this.signerBatch = new SignBatch();
    }

    withUserToken(userToken: string) {
        this.signerBatch.setUserToken(userToken);
    }

    withSignerTokens(signerTokens: string[]) {
        this.withSignerTokens(signerTokens);
    }
}