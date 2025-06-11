import { createServer } from "node:http";

const server = createServer((req,res) => {
  res.statusCode = 200;

  res.end('Hello papito');
})

server.listen(3339);