import express from 'express';
import { main } from './connection/connection';
import { routes } from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger-output.json';

const app = express();

const port = process.env.PORT;

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

main();
routes(app);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${3000}`);
});
