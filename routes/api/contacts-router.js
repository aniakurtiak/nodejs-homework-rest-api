import express from "express";
import contactsController from "../../controller/contacts-controller.js";
import { isEmptyBody } from "../../middlewares/index.js";

const router = express.Router();

router.get("/", contactsController.getAllContacts);

router.get("/:contactId", contactsController.getById);

router.post("/", isEmptyBody, contactsController.add);

router.delete("/:contactId", contactsController.deleteById);

router.put("/:contactId", isEmptyBody, contactsController.updateById);

export default router;
