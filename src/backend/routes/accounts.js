import Express from "express";
import { getUsers } from '../Controllers/users/profile.js';

const router = Express.Router();

router.use("/accounts", router);

//get all users
router.get("/users", getUsers)

export default router;