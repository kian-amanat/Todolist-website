import 'dotenv/config';
import express from 'express';

// Backend modules
import {router as todoRouter} from './modules/todos/routes.js';

const app = express();
const serverPort = 3000;

app.get('/test', (req, res) => {
  res.json({
    message: 'Express js app is running'
  });
});

// attach routers to express app
app.use(todoRouter);


app.listen(serverPort, () => {
  console.log(`server is running on port ${serverPort}`);
});