import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();

app.use(express.json());

app.get('/api/users/current-user', (req: Request, res: Response) => {
  res.send('Hi there!!');
});

app.listen(3000, () => {
  console.log('Auth Service!!');
  console.log('Auth service is listening on port 3000');
});
