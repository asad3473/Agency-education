// routes/admin.routes.js

import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { isAdmin } from "../middlewares/role.middlewares.js";
import {
  deleteUser,
  activeUsers,
  deleteApplication,
} from "../controllers/admin.controller.js";

const router = Router();


//router.use(verifyJWT, isAdmin); // Protect all admin routes

router.get("/users", activeUsers);
router.delete("/user/:id", deleteUser);
router.delete("/application/:id", deleteApplication);

export default router;
