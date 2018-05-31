import { createServer } from 'http';

export class Test {
  public static run() {
    const server = createServer((req, res) => {
      res.write('Hi');
      res.end();
    });

    server.listen(8080);
  }
}
