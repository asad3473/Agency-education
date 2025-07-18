// routes/admin.routes.js

import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { isAdmin } from "../middlewares/role.middlewares.js";
import {
  deleteUser,
  activeUsers,
  deleteApplication,
  updateRole
} from "../controllers/admin.controller.js";

const router = Router();


//router.use(verifyJWT, isAdmin); // Protect all admin routes

router.route("/users").get( activeUsers);
router.route("/delete-user").delete( deleteUser);
router.route("/application/:id").delete( deleteApplication);
router.route("/update-role").post(updateRole)

export default router;
