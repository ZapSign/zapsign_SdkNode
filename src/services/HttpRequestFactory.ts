export class HttpRequestFactory {
    request = require('request');

    public async getRequest(url: string) {
        const options = {
            'method': 'GET',
            'url': url,
            'headers': {}
          };

          const response = await this.request(options, function (error: any, response: any, body: any) {
                return body;
            });
        return response
    }    

    public async postRequest(url: string, body: string) {
        const options = {
            'method': 'POST',
            'url': url,
            'headers': {
                'Content-Type': 'application/json'
            }, 
            body: body
        };

        const response = await this.request(options, function (error: any, response: any, body: any) {
            console.log(response.statusCode);
            return body;
        });
    return response
    }

    public async deleteRequest(url: string) {
        const options = {
            'method': 'DELETE',
            'url': url,
            'headers': {
            }
          };

          const response = await this.request(options, function (error: any, response: any, body: any) {
            return body;
        });
    return response
    }


    // private exceptionValidade(response): void{
    //     if(response.statusCode() != 200) {
    //         throw new Error(response.statusCode() + " - error: " + response.body());
    //     }
    // }
}
