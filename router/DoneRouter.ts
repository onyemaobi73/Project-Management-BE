import express, { Router } from "express"
import { createDoneTask, deleteDoneTask, readDoneTask, readOneDoneTask } from "../controller/DoneController"

const router: Router = express()

router.route("/create-done-task").post(createDoneTask)
router.route("/read-done-task").get(readDoneTask)
router.route("/:id/read-one-done-task").post(readOneDoneTask)
router.route("/:id/delete-done-task").delete(deleteDoneTask)

export default router