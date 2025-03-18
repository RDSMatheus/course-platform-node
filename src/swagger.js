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
      premiumAccess: false,
      paidAccess: false,
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
    ModulePost: {
      title: 'string',
      description: 'string',
      videos: ['video_id'],
      introVideo: 'video_id',
    },
    ModuleGet: {
      _id: 'string',
      title: 'string',
      description: 'string',
      videos: ['video_id'],
      introVideo: 'video_id',
    },
    CourseGet: {
      _id: 'string',
      title: 'string',
      description: 'string',
      price: 'string',
      modules: ['module_id'],
      lifetime: false,
      premium: false,
      createdAt: 'string',
      updatedAt: 'string',
    },
    CoursePost: {
      title: 'string',
      description: 'string',
      price: 'string',
      modules: ['module_id'],
      lifetime: false,
      premium: false,
    },
    VideoProgressPost: {
      courseId: 'string',
      userId: 'string',
      videoId: 'string',
    },
    VideoProgressResponse: {
      _id: 'string',
      course: 'id',
      user: 'id',
      completedModule: ['id'],
      completedVideos: ['id'],
      lastAccessedAt: 'date',
    },
    ModuleProgressPost: {
      courseId: 'string',
      userId: 'string',
      moduleId: 'string',
    },
    ProgressGet: {
      _id: 'string',
      course: 'id',
      user: 'id',
      completedModule: [{ $ref: '#/definitions/ModuleGet' }],
      completedVideos: [{ $ref: '#/definitions/VideoGet' }],
      lastAccessedAt: 'date',
    },
  },
};

const outputFile = './swagger-output.json';
const routes = [
  './lib/routes/user-routes.js',
  './lib/routes/video-routes.js',
  './lib/routes/auth-routes.js',
  './lib/routes/module-routes.js',
  './lib/routes/course-routes.js',
  './lib/routes/progress-routes.js',
];

swaggerAutogen(outputFile, routes, doc);
