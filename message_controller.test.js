import request from 'supertest';
import app from './app.js';
import { jest } from '@jest/globals';

const server = request(app());

jest.unstable_mockModule('./module_to_mock.js', () => 
  jest.fn().mockReturnValue(true) 
);

test('Send successfully', async () => {
  const messageToSend = 'hi mom';
  const response = await server.post('/message')
    .send({
      message: messageToSend
    });

  expect(response.body.message).toEqual(`Mock works: ${messageToSend}`);
});