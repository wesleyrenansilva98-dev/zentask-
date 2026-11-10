import express from "express";
import { createTaskController } from "../../controllers/task/create_taskcontroller.js";
import { listTaskController } from "../../controllers/task/list_taskcontroller.js";
import { completedTaskController } from "../../controllers/task/patch_taskcontroller.js";
import { progressTaskController } from "../../controllers/task/progress_taskcontroller.js";
import { deleteTaskController } from "../../controllers/task/delete_taskcontroller.js";
import { authJwt } from "../../middlewares/validate_jwt.js";
import { validate } from "../../middlewares/validate.js"
import { inputRegisterTask, inputCompletedTask, inputProgressTask, inputTaskId } from "../../schema/task/task_schema.js";

const router = express.Router();

router.use(authJwt);
router.post("/newtask", validate(inputRegisterTask), createTaskController);
router.get("/listTask", listTaskController);
router.patch("/updateCompleted", validate(inputCompletedTask), completedTaskController);
router.patch("/updateProgress", validate(inputProgressTask), progressTaskController);
router.delete("/deleteTask", validate(inputTaskId), deleteTaskController);

export default router;