const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'CoursePlatformApi',
    description: 'Documentação da api de uma plataforma de cursos.',
  },
  host: 'localhost:3000',
  definitions: {
    UserPost: {
      name: 'string',
      email: 'email@email.com',
      cpf: '000.000.000-00',
      password: 'string',
      passwordCheck: 'string',
      premiumAccess: 'boolean',
      paidAccess: 'boolean',
    },
    UserUpdate: {
      name: 'string',
      email: 'email@email.com',
      cpf: '000.000.000-00',
      password: 'string',
      passwordCheck: 'string',
      signUpDate: 'date',
      premiumAccess: 'boolean',
      paidAccess: 'boolean',
    },
    UserGet: {
      _id: 'string',
      name: 'string',
      email: 'email@email.com',
      cpf: '000.000.000-00',
      password: 'string',
      signUpDate: 'date',
      premiumAccess: 'boolean',
      paidAccess: 'boolean',
      createdAt: 'string',
      updatedAt: 'string',
    },
    VideoGet: {
      _id: 'string',
      title: 'string',
      description: 'string',
      url: 'string',
    },
  },
};

const outputFile = './swagger-output.json';
const routes = [
  './lib/routes/user-routes.js',
  './lib/routes/video-routes.js',
  './lib/routes/auth-routes.js',
];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);
