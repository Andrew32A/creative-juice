import Express from "express";
import { getPromptById, createPrompt, updatePrompt, deletePrompt, getPrompts } from "../Controllers/prompts.js";
import { checkAuth } from "../middleware/checkAuth.js";

const router = Express.Router();

router.use("/prompts", router);

//Prompt CRUD routes
router.post('/new', checkAuth, createPrompt)
router.get("/all", getPrompts);
router.get("/:id", getPromptById);
router.put("/update/:id", checkAuth, updatePrompt);
router.delete("/delete/:id", checkAuth, deletePrompt);

export default router;