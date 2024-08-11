import {
  getUsersController,
  createUserController,
  updateUserController,
  loginUserController,
  getUserbyUserNameController,
} from "./controller.js";

import { createUserService } from "../../services/user/service.js";

import express from "express";
const router = express.Router();

router.get("/get/userName", getUserbyUserNameController);
router.get("/user/:id", getUsersController);
router.post("/user", createUserController);
router.post("/signIn", loginUserController);
router.put("/user/:id", updateUserController);

export { router };
