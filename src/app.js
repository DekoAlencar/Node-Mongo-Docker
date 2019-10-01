import express from 'express';
import bodyParser from 'body-parser';
import environment from './environment/environment';
import router from  './routers';
const app = express();

const HOST = '0.0.0.0';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', router);

app.listen(environment.port, function() {
  console.log('Servidor rodandos na porta '+environment.port);
});

export default app;