import express, { Router } from "express";
import {
  getOneUser,
  getUsers,
  registerUser,
  signInUser,
} from "../controller/AuthController";
import { upload } from "../utils/multer";

const router = express.Router();
router.route("/register").post(upload, registerUser);
router.route("/sign-in").post(signInUser);
router.route("/:userID/get-user").get(getOneUser);
router.route("/get-user").get(getUsers);

export default router;
