import express, {
  type Express,
  type NextFunction,
  type Request,
  type Response,
} from 'express';

import routes from './routes/routes.ts';
import { errorHandler } from './middlewares/error-handler.ts';
import { NotFoundError } from './errors/not-found-error.ts';

const app: Express = express();

app.use(express.json());

app.use('/api', routes);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'App is running...' });
});

app.use(async (req: Request, res: Response, next: NextFunction) => {
  throw new NotFoundError();
});
app.use(errorHandler);

app.listen(3000, () => {
  console.log('Auth Service!!');
  console.log('Auth service is listening on port 3000');
});
