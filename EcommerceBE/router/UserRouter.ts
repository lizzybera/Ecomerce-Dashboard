import express from "express";
import { createUser, getUsers, signInUser } from "../controller/UserController";


const router = express.Router();

router.route("/view-user").get(getUsers)
router.route("/create-user").post(createUser)
router.route("/:userID/sign-in").post(signInUser)


export default router