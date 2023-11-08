import Express from "express";
import { deleteUser, getUserById, getUsers, updateUser } from '../Controllers/users/profile.js';

const router = Express.Router();

router.use("/accounts", router);

//User CRUD routes
router.get("/", getUsers);
router.get("/:id", getUserById);
router.put("/update/:id", updateUser);
router.delete("/delete:id", deleteUser);

export default router;