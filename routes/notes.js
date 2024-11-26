const express = require("express");
const noteCtr = require("../controllers/notes");
const authCtr = require("../controllers/auth");

const router = express.Router();

router.use(authCtr.protect);
router.get("/:id", noteCtr.getNotes);
router.post("/", noteCtr.createNote);
router.put("/:id", noteCtr.updateNote);
router.delete("/:id", noteCtr.deleteNote);

module.exports = router;