// routes/admin.routes.js

import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { isAdmin } from "../middlewares/role.middlewares.js";
import {
  getAllUsers,
  deleteUser,
  getAllApplications,
  deleteApplication,
} from "../controllers/admin.controller.js";

const router = Router();

router.use(verifyJWT, isAdmin); // Protect all admin routes

router.get("/users", getAllUsers);
router.delete("/user/:id", deleteUser);
router.get("/applications", getAllApplications);
router.delete("/application/:id", deleteApplication);

export default router;
