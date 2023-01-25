export class HttpRequestFactory {
    request = require('request');

    public getRequest(url: string) {
        var options = {
            'method': 'GET',
            'url': url,
            'headers': {}
          };

          this.request(options, function (error: any, response: any) {
            // exceptionValidade(response);
            return response;
          });
    }    

    public postRequest(url: string, body: string) {
        let options = {
            'method': 'POST',
            'url': url,
            'headers': {
                'Content-Type': 'application/json'
            }, 
            body: body
        };

        this.request(options, function (error: any, response: any) {
            // this.exceptionValidade(response);
            return response;
        });
    }

    public deleteRequest(url: string) {
        var options = {
            'method': 'DELETE',
            'url': url,
            'headers': {
            }
          };

          this.request(options, function (error: any, response: any) {
            // this.exceptionValidade(response);
            return response;
          });
    }


    // private exceptionValidade(response): void{
    //     if(response.statusCode() != 200) {
    //         throw new Error(response.statusCode() + " - error: " + response.body());
    //     }
    // }
}
