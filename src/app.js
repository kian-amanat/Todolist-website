import "dotenv/config";
import {
  sendError,
  authorization,
  getMethodPathIp,
} from "./core/middleware/express-middlewares.js";
import { validationMiddleWare } from "./modules/todos/validations.js";
import express from "express";
import { router as taskRouter } from "./modules/todos/routes.js";
import { router as taskRouter2 } from "./modules/todos/routes.js";
import { router as taskRouter3 } from "./modules/todos/routes.js";
import { router as taskRouter4 } from "./modules/todos/routes.js";
import { router as userRouter } from "./modules/user/routes.js";
import { router as userRouter2 } from "./modules/user/routes.js";
import { router as userRouter3 } from "./modules/user/routes.js";
import { router as userRouter4 } from "./modules/user/routes.js";
import cors from "cors";
import { query } from "./core/database/database-handler.js";

const app = express();
const port = 3001;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.json());
// app.use(validationMiddleWare);

// app.use(getMethodPathIp);

// app.use(cors());

// app.use(authorization);

app.use("/get", taskRouter);
app.use("/post", taskRouter2);
app.use("/delet", taskRouter3);
app.use("/update", taskRouter4);

app.use("/get", userRouter);
app.use("/update", userRouter2);
app.use("/create", userRouter3);
app.use("/api", userRouter4);
// app.use(sendError); //send404errornot found

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
