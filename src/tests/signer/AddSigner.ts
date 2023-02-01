import { Signer } from "../../body/signer/Signer";
import { JsonConverter } from "../../services/JsonConverter";
import { SignerRequest } from "../../signers/SignerRequest";

const apiToken = '7c3a7080-04fe-43f8-bbb1-42b73bf15abd3216e318-a02b-4685-9822-30929e8a6010';
const docToken = 'bfb65044-affb-429d-9d60-2d8cb8b9634b';

const name: string = 'New Signer Name';
const email: string = "newEmail@test.com";
const auth_mode: string = "assinaturaTela";
const send_automatic_email: boolean = false;
const send_automatic_whatsapp: boolean = false;
const order_group: number = 0;
const custom_message: string = "";
const phone_country: string = "";
const phone_number: string = "";
const lock_email: boolean = false;
const blank_email: boolean = false;
const hide_email: boolean = false;
const lock_phone: boolean = false;
const blank_phone: boolean = false;
const hide_phone: boolean = false;
const lock_name: boolean = false;
const require_selfie_photo: boolean = false;
const selfie_validation_type: string = "none";
const qualification: string = "";
const external_id: string = "";
const redirect_link: string = "";
const sign_url: string = '';
const token: string = '';
const status: string = '';
const times_viewed: number = 0;
const last_view_at: string = '';
const signed_at: string = '';
const geo_latitude: string = '';
const geo_longitude: string = '';
const signature_image: string = '';
const visto_image: string = '';
const document_photo_url: string = '';
const document_verse_photo_url: string = '';
const selfie_photo_url: string = '';
const selfie_photo_url2: string = '';
const send_via: string = '';
const require_document_photo: string = '';

const signer: Signer = new Signer(name, email, auth_mode, send_automatic_email, send_automatic_whatsapp, order_group, custom_message, phone_country, phone_number, lock_email, blank_email, hide_email, lock_phone, blank_phone, hide_phone, lock_name, require_selfie_photo, selfie_validation_type, qualification, external_id, redirect_link, sign_url, token, status, times_viewed, last_view_at, signed_at, geo_latitude, geo_longitude, signature_image, visto_image, document_photo_url, document_verse_photo_url, selfie_photo_url, selfie_photo_url2, send_via, require_document_photo);

async function testeAddSigner() {
    try {
        const signerResponse = await new SignerRequest(apiToken).addSigner(docToken, signer);
        const jsonDocResponse = new JsonConverter().signerToJson(signerResponse);
        console.log(jsonDocResponse);
    } catch (err) {
        console.log(err);
    }
}

testeAddSigner();