import DocRequests from "./src/docs/DocRequests";
// import teste = require("./src/docs/DocRequests");

const docRequest = new DocRequests();
// const oi = teste.default;
docRequest.setTokenApi('7c3a7080-04fe-43f8-bbb1-42b73bf15abd3216e318-a02b-4685-9822-30929e8a6010');
console.log('docRequest', docRequest.getTokenApi());
console.log('teste')