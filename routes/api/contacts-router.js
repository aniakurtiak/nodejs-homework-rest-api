import express from "express";

import contactsController from "../../controller/contacts-controller.js";

import { isEmptyBody } from "../../middlewares/index.js";

import { validatorBody } from "../../decorators/index.js";

import {
  addContactSchema,
  updateContactSchema,
} from "../../schemas/contacts-schema.js";

const router = express.Router();

router.get("/", contactsController.getAllContacts);

router.get("/:contactId", contactsController.getById);

router.post(
  "/",
  isEmptyBody,
  validatorBody(addContactSchema),
  contactsController.add
);

router.delete("/:contactId", contactsController.deleteById);

router.put(
  "/:contactId",
  isEmptyBody,
  validatorBody(updateContactSchema),
  contactsController.updateById
);

export default router;
