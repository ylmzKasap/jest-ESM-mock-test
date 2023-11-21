import request from 'supertest';
import app from './app.js';
import { jest } from '@jest/globals';

const server = request(app());

// This is supposed to be mocking 'moduleToMock' imported in './message_controller.js'
jest.unstable_mockModule('./module_to_mock.js', () => 
  jest.fn().mockReturnValue(true) 
);

test('Mock successfully', async () => {
  const messageToSend = '';
  const response = await server.post('/message').send(
    {message: messageToSend}
  );

  expect(response.body.message).toEqual(`Mock works: ${messageToSend}`);
});