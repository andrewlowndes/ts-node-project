import * as mockery from 'mockery';

let httpMock = {
  createServer: null
};

mockery.enable({
  warnOnUnregistered: false
});

mockery.registerMock('http', httpMock);

import { Test } from './Test';

describe('Test', () => {
  afterAll(() => {
    mockery.disable();
  });
  
  describe('when run is called', () => {
    let listenSpy,
      serverFunc;
    
    beforeAll(() => {
      httpMock.createServer = jasmine.createSpy('createServer');
      
      listenSpy = jasmine.createSpy('listen');
      
      httpMock.createServer.and.callFake((cb) => {
        serverFunc = cb;
        
        return { listen: listenSpy };
      });
      
      Test.run();
    });
    
    it('should create a new server', () => {
      expect(httpMock.createServer).toHaveBeenCalledWith(jasmine.any(Function));
    });
    
    it('should listen on port 8080', () => {
      expect(listenSpy).toHaveBeenCalledWith(8080);
    });
    
    describe('when a request is made to the server', () => {
      let resSpy;
      
      beforeAll(() => {
        resSpy = jasmine.createSpyObj('res', ['write', 'end']);
        
        serverFunc(null, resSpy);
      });
      
      it('should write Hi in the response', () => {
        expect(resSpy.write).toHaveBeenCalledWith('Hi');
        expect(resSpy.end).toHaveBeenCalledWith();
      });
    });
  });
});
