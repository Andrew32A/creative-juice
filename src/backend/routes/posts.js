import Express from "express";
import { getPostById, createPost, updatePost, deletePost, getPosts } from "../Controllers/posts.js";
import { checkAuth } from "../middleware/checkAuth.js";

const router = Express.Router();

router.use("/posts", router);

//Prompt CRUD routes
router.post('/new', checkAuth, createPost)
router.get("/all", getPosts);
router.get("/:id", getPostById);
router.put("/update/:id", checkAuth, updatePost);
router.delete("/delete/:id", checkAuth, deletePost);

export default router;