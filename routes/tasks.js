const express = require("express");
const taskCtr = require("../controllers/tasks");
const authCtr = require("../controllers/auth");

const router = express.Router();

router.use(authCtr.protect);
router.get("/project/:id", taskCtr.getProjectsTasks);
router.get("/me", taskCtr.getMeProjectsTasks);
router.get("/one/:id", taskCtr.getTaskById);
router.post("/", taskCtr.createTask);
router.put("/:id", taskCtr.updateTask);
router.delete("/:id", taskCtr.deleteTask);

module.exports = router;