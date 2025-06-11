import { createServer } from "node:http";
import { routes } from './routes/routes.js';
import { json } from './middleware/json.js';

const server = createServer(async (req,res) => {

  await json(req, res)

  const { method, url } = req;

  const route = routes.find(route => {
    return route.method === method && route.path === url;
  });

  if(route){
    route.handler(req, res);
  }
  
})

server.listen(3339);