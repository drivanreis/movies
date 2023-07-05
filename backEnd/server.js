import pkg from 'json-server';
const { create, router: _router, defaults } = pkg;
const server = create();

const router = _router('db.json');
const middlewares = defaults();

const port = process.env.port || 8080;

server.use(middlewares);
server.use(router);
server.listen(port, ()=>{
    console.log(`Json Server Rodando em ${port}`);
});