import { test, beforeEach, afterEach } from 'vitest';
import { app } from '../src/server';
import * as http from "http";

import request from 'supertest';
let server: http.Server;

beforeEach(() => {
  server = app.listen();
});

afterEach(() => {
  server.close();
});

test('Server connected', async ({ expect }) => {
  const response = await request(server).get('/');

  expect(response.statusCode).toBe(200);
  expect(response.body).toBe('It is alive! 🧟');
  server.close();
});