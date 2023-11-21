import express from 'express';
import http from 'http';
import messageController from './message_controller.js';

export default () => {
  const app = express();
  const server = http.createServer(app);
  app.use(express.json());

  app.post('/message', messageController);

  return server;
}