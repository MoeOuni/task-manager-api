const express = require('express');
const projectCtr = require("../controllers/projects");
const authCtr = require("../controllers/auth");

const router = express.Router();

router.use(authCtr.protect);
router.get('/', projectCtr.getAllProjects);
router.get('/me', projectCtr.getMeProjects);
router.get('/one/:id', projectCtr.getProjectById);
router.post('/', projectCtr.saveProject);
router.put('/:id', projectCtr.updateProject);
router.delete('/:id', projectCtr.deleteProject);

module.exports = router;
