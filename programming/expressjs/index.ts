/*
  File: apps/service-api/index.ts

  This version explicitly tells the Express server to listen on the host '0.0.0.0',
  which is required for Cloud Run's health checks to connect successfully.
*/

import express, { Request, Response } from 'express';

const app = express();

// Cloud Run provides the 'PORT' environment variable.
// We fall back to 3001 for local development.
const port = process.env.PORT || 3001;
const host = '0.0.0.0';

// A simple test route
app.get('/', (req: Request, res: Response) => {
  res.send('Locker Haus API (TypeScript) is running!');
});

// Start the server and explicitly bind it to the correct host.
app.listen(Number(port), host, () => {
  console.log(`Server listening on ${host}:${port}`);
});

raph-abdul@raph-abduls-MacBook-Air service-api % 








