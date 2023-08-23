import express, { Router } from "express"
import { createDoneUsers, deleteDoneUser, readDoneUsers, readOneDoneUsers } from "../controller/DoneController"

const router: Router = express()

router.route("/create-done-users").post(createDoneUsers)
router.route("/read-done-users").post(readDoneUsers)
router.route("/read-one-done-user").post(readOneDoneUsers)
router.route("/delete-done-user").post(deleteDoneUser)

export default router