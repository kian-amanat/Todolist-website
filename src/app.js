import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { EXPRESS_APP } from "./core/config/index.js";
import { apiLoggerMiddleware, notFoundErrorHandlerMiddleware } from './core/middleware/express-middlewares.js';

// Backend modules
import {router as todoRouter} from './modules/todos/routes.js';

const app = express();
const serverPort = EXPRESS_APP.port || 3000;

app.use(cors());
app.use(express.json()); // for parsing application/json

app.use(apiLoggerMiddleware);

app.get('/test', (req, res) => {
  res.json({
    message: 'Express js app is running'
  });
});

// attach routers to express app
app.use('/api/todo', todoRouter);

app.use(notFoundErrorHandlerMiddleware);

app.listen(serverPort, () => {
  console.log(`server is running on port ${serverPort}`);
});