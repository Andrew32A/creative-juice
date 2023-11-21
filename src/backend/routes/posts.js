import Express from "express";
import { getPostById, createPost, updatePost, deletePost, getPosts } from "../Controllers/posts.js";
import { checkAuth } from "../middleware/checkAuth.js";

import multer from 'multer';
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, '/uploads/images');
  },
  filename: function(req, file, cb) {
    const uniqueSuffix = Date.now() + '_' + Math.round(Math.random() * 1E9);

    if (file.mimetype === 'image/jpeg') {
      cb(null, file.fieldname + '_' + uniqueSuffix + '.jpg');
    } 
  },
});
const upload = multer({storage: storage});

const router = Express.Router();

router.use("/posts", router);

//Prompt CRUD routes
router.post('/new', upload.single('img'), checkAuth, createPost)
router.get("/all", getPosts);
router.get("/:id", getPostById);
router.put("/update/:id", checkAuth, updatePost);
router.delete("/delete/:id", checkAuth, deletePost);

export default router;