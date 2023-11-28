import contactService from "../models/contacts.js";
import { HttpError } from "../helpers/index.js";

import {
  addContactSchema,
  updateContactSchema,
} from "../schemas/contacts-schema.js";

const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await contactService.listContacts();
    res.json(contacts);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const oneContact = await contactService.getContactById(contactId);
    if (!oneContact) {
      throw HttpError(404, `Contact with id=${id} not found`);
    }
    res.json(oneContact);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    const { error } = addContactSchema.validate(req.body);
    if (error) {
      throw HttpError(400, "Missing required name field");
    }
    const result = await contactService.addContact(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const updateById = async (req, res, next) => {
  try {
    const { error } = updateContactSchema.validate(req.body);
    if (error) {
      throw HttpError(400, "Missing required name field");
    }
    const { contactId } = req.params;
    const result = await contactService.updateContactById(contactId, req.body);
    if (!result) {
      throw HttpError(404, `Contact with id=${id} not found`);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const deleteById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactService.removeContact(contactId);
    if (!result) {
      throw HttpError(404, `Contact with id=${id} not found`);
    }
    res.json({
      message: "Contact deleted",
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getAllContacts,
  getById,
  add,
  updateById,
  deleteById,
};
