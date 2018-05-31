import { request, IncomingMessage } from 'http';

describe('index', () => {
  describe('when requesting a page', () => {
    let responseCode: number,
      responseBody: string;

    beforeEach((done) => {
      request({
        method: 'GET',
        port: 8080
      }, (res: IncomingMessage) => {
        responseCode = res.statusCode;
        responseBody = '';
        
        res.setEncoding('utf8');
        
        res.on('data', (chunk) => {
          responseBody += chunk;
        });

        res.on('end', () => {
          done();
        });
      }).end();
    });

    it('should succeed', () => {
      expect(responseCode).toBe(200);
    });

    it('should return hi', () => {
      expect(responseBody).toBe('Hi');
    });
  })
});
