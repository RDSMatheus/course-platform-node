import express from 'express';
import { main } from './connection/connection';
import { routes } from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger-output.json';
import cors from 'cors';

const app = express();

const port = process.env.PORT;

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(cors({ origin: '*' }));

main();
routes(app);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${3000} http://localhost:${3000}`);
});
