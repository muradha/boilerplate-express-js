import { Router } from "express";
import { validate } from "@common/middleware/validate";
import { createUserSchema } from "./dto/user.schema";
import * as userController from "./controller";

const router = Router();
router.post("/", validate(createUserSchema), userController.getUsers);
router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.put("/:id", validate(createUserSchema), userController.updateUser);
router.delete("/:id", userController.deleteUser);
export default router;
