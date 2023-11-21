import http from 'http';
import app from './app.js';

const server = http.createServer(app);
server.listen(3000, () => console.log(`Listening on port 3000`));
