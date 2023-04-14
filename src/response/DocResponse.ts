import { Doc } from "../body/doc/Doc";
import { Answers } from "../body/Answers";
import { CreateBy } from "../body/CreateBy";
import { Template } from "../body/Template";
import { ExtraDocResponse } from "./ExtraDocResponse";

export class DocResponse extends Doc {

    private open_id: number = 0;
    private token: string = '';
    private status: string = '';
    private original_file: string = '';
    private signed_file: string = '';
    private created_through: string = '';
    private extra_docs: ExtraDocResponse[] = [new ExtraDocResponse('', '', '', '', '')];
    private deleted: boolean = false;
    private deleted_at: string = '';
    private created_at: string = '';
    private last_update_at: string = '';
    private created_by: CreateBy = new CreateBy();
    private template: Template = new Template('');
    private answers: Answers[] = [new Answers('', '')];
    private auto_reminder: number = 0;

    constructor(
        open_id: number,
        token: string,
        status: string,
        original_file: string,
        signed_file: string,
        created_through: string,
        extra_docs: ExtraDocResponse[],
        deleted: boolean,
        deleted_at: string,
        created_at: string,
        last_update_at: string,
        created_by: CreateBy,
        template: Template,
        answers: Answers[],
        auto_reminder: number 
        ) {
        super();
        this.open_id = open_id;
        this.token = token;
        this.status = status;
        this.original_file = original_file;
        this.signed_file = signed_file;
        this.created_through = created_through;
        this.extra_docs = extra_docs;
        this.deleted = deleted;
        this.deleted_at = deleted_at;
        this.created_at = created_at;
        this.last_update_at = last_update_at;
        this.created_by = created_by;
        this.template = template;
        this.answers = answers;
        this.auto_reminder = auto_reminder
    }

    public getOpen_id(): number {
        return this.open_id;
    }

    public setOpen_id(open_id: number): void {
        this.open_id = open_id;
    }

    public getToken(): string {
        return this.token;
    }

    public setToken(token: string): void {
        this.token = token;
    }

    public getStatus(): string {
        return this.status;
    }

    public setStatus(status: string): void {
        this.status = status;
    }

    public getOriginal_file(): string{
        return this.original_file;
    }

    public setOriginal_file(original_file: string): void {
        this.original_file = original_file;
    }

    public getSigned_file(): string {
        return this.signed_file;
    }

    public setSigned_file(signed_file: string): void {
        this.signed_file = signed_file;
    }

    public getCreated_through(): string {
        return this.created_through;
    }

    public setCreated_through(created_through: string): void {
        this.created_through = created_through;
    }

    public getExtra_docs(): ExtraDocResponse[] {
        return this.extra_docs;
    }

    public setExtra_docs(extra_docs: ExtraDocResponse[]): void {
        this.extra_docs = extra_docs;
    }

    public isDeleted(): boolean {
        return this.deleted;
    }

    public setDeleted(deleted: boolean): void {
        this.deleted = deleted;
    }

    public getDeleted_at(): string {
        return this.deleted_at;
    }

    public setDeleted_at(deleted_at: string): void {
        this.deleted_at = deleted_at;
    }

    public getCreated_at(): string {
        return this.created_at;
    }

    public setCreated_at(created_at: string): void {
        this.created_at = created_at;
    }

    public getLast_update_at(): string {
        return this.last_update_at;
    }

    public setLast_update_at(last_update_at: string): void {
        this.last_update_at = last_update_at;
    }

    public getCreated_by(): CreateBy {
        return this.created_by;
    }

    public setCreated_by(created_by: CreateBy): void {
        this.created_by = created_by;
    }

    public getTemplate(): Template {
        return this.template;
    }

    public setTemplate(template: Template): void {
        this.template = template;
    }

    public getAnswers(): Answers[] {
        return this.answers;
    }

    public setAnswers(answers: Answers[]): void {
        this.answers = answers;
    }

    public getAutReminder(): number {
        return this.auto_reminder;
    }

    public setAutoReminder(autoReminder: number): void {
        this.auto_reminder = autoReminder;
    }
}
