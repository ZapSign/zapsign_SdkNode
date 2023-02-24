require('dotenv').config();
import { SignerBuilder } from "../../body/signer/builders/SignerBuilder";
import { JsonConverter } from "../../services/JsonConverter";
import { SignerRequest } from "../../signers/SignerRequest";

const apiToken: any = process.env.APITOKEN;
const docToken: any = process.env.DOCTOKEN;

const name: string = 'New Signer Name 2';
const email: string = "newEmail@test.com";
const auth_mode: string = "assinaturaTela";
const send_automatic_email: boolean = false;
const send_automatic_whatsapp: boolean = false;
const order_group: number = 0;
const custom_message: string = "";
const phone_country: string = "";
const lock_email: boolean = false;
const blank_email: boolean = false;


const signer = new SignerBuilder()
    .withName(name)
    .withEmail(email)
    .withAuthMode(auth_mode)
    .withisSendAutomaticEmail(send_automatic_email)
    .withSendAutomaticWhatsapp(send_automatic_whatsapp)
    .withOrderGroup(order_group)
    .withCustomMessage(custom_message)
    .withPhoneCountry(phone_country)
    .withLockEmail(lock_email)
    .withBlankEmail(blank_email)
    .build();

async function testeAddSigner() {
    try {
        const signerResponse = await new SignerRequest(apiToken).addSigner(docToken, signer);
        const jsonDocResponse = new JsonConverter().signerToJson(signerResponse);
        console.log(jsonDocResponse);
    } catch (err) {
        console.log('err', err);
    }
}

testeAddSigner();