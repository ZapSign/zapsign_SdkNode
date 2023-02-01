import { Signer } from "src/body/signer/Signer"
import { Doc } from "../Doc";

export class DocBuilderWithSigner {
    doc: Doc

    constructor() {
        this.doc = new Doc(false, '', '', false, false, '', '', '', '', '', new Date(), false, [],
        [new Signer('', '', '', false, false, 0, '', '', '', false, false, false, false, false, false, false, false, '', '', '', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '')], 0);
    }

    withSigner(signer: Signer[]) {
        this.doc.setSigners(signer);
        return this;
    }

    build() {
        return this;
    }
}