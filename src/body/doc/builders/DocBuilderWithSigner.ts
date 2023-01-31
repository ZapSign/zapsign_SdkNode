import { Signer } from "src/body/signer/Signer"
import { Doc } from "../Doc";

export class DocBuilderWithSigner {
    doc: Doc

    constructor() {
        this.doc = new Doc();
    }

    withSigner(signer: Signer[]) {
        this.doc.setSigners(signer);
        return this;
    }

    build() {
        return this;
    }
}