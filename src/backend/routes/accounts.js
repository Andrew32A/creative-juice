import Express from "express";
import { deleteUser, getUserById, getUsers, updateUser } from '../Controllers/users/profile.js';
import { checkAuth } from "../middleware/checkAuth.js";
import { login, logout, register } from "../Controllers/users/auth.js";

const router = Express.Router();

router.use("/accounts", router);

//User registration routes
router.post("/register", register);
router.post("/login", login);
router.post("/logout", checkAuth, logout);

//User CRUD routes
router.get("/all", getUsers);
router.get("/:id", getUserById);
router.put("/update/:id", checkAuth, updateUser);
router.delete("/delete/:id", checkAuth, deleteUser);

export default router;