import { CreateBy } from "../../../body/CreateBy";

export class CreateByBuilder {
    createBy: CreateBy;

    constructor() {
        this.createBy = new CreateBy();
    }

    withEmail(email: string) {
        this.createBy.setEmail(email);
        return this;
    }

    build() {
        return this.createBy;
    }
}

module.exports = new CreateByBuilder
