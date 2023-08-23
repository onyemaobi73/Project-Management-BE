import express, {Router} from "express"
import { createTask, deleteTask, readOneTask, readTask, updateOneTask } from "../controller/TaskController"

const router: Router = express()
router.route("/:id/create-task").post(createTask)
router.route("/read-task").get(readTask)
router.route("/:id/read-one-task").get(readOneTask)
router.route("/:taskId/update-one-task").patch(updateOneTask)
router.route("/:id/delete-task").delete(deleteTask)

export default router