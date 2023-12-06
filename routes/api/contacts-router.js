import express from "express";

import contactsController from "../../controller/contacts-controller.js";

import { isEmptyBody, isValidId } from "../../middlewares/index.js";

import { validateBody } from "../../decorators/index.js";

import {
  addContactSchema,
  favoriteContactSchema,
  updateContactSchema,
} from "../../models/Contact.js";

const router = express.Router();

router.get("/", contactsController.getAllContacts);

router.get("/:contactId", isValidId, contactsController.getById);

router.post(
  "/",
  isEmptyBody,
  validateBody(addContactSchema),
  contactsController.add
);

router.delete("/:contactId", contactsController.deleteById);

router.put(
  "/:contactId",
  isEmptyBody,
  isValidId,
  validateBody(updateContactSchema),
  contactsController.updateById
);

router.patch(
  "/:contactId/favorite",
  isEmptyBody,
  isValidId,
  validateBody(favoriteContactSchema),
  contactsController.updateById
);

export default router;
