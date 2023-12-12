import express from "express";

import contactsController from "../../controller/contacts-controller.js";

import { authenticate, isEmptyBody, isValidId } from "../../middlewares/index.js";

import { validateBody } from "../../decorators/index.js";

import {
  addContactSchema,
  favoriteContactSchema,
  updateContactSchema,
} from "../../models/Contact.js";

const router = express.Router();

router.use(authenticate)


router.get("/", contactsController.getAllContacts);

router.get("/:contactId", isValidId, contactsController.getById);

router.post(
  "/",
  isEmptyBody.isEmptyBody,
  validateBody(addContactSchema),
  contactsController.add
);

router.delete("/:contactId", isValidId, contactsController.deleteById);

router.put(
  "/:contactId",
  isEmptyBody.isEmptyBody,
  isValidId,
  validateBody(updateContactSchema),
  contactsController.updateById
);

router.patch(
  "/:contactId/favorite",
  isEmptyBody.isEmptyBodyFavorite,
  isValidId,
  validateBody(favoriteContactSchema),
  contactsController.updateById
);

export default router;
