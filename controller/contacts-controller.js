import { HttpError } from "../helpers/index.js";
import { ctrlWrapper } from "../decorators/index.js";
import Contact from "../models/Contact.js";

const getAllContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const oneContact = await Contact.findById(contactId);
  if (!oneContact) {
    throw HttpError(404, `Contact with id=${contactId} not found`);
  }
  res.json(oneContact);
};

const add = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body);
  if (!result) {
    throw HttpError(404, `Contact with id=${contactId} not found`);
  }
  res.json(result);
};

const deleteById = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndDelete(contactId);
    if (!result) {
      throw HttpError(404, `Contact with id=${id} not found`);
    }
    res.json({
      message: "Contact deleted",
    });
};

export default {
  getAllContacts: ctrlWrapper(getAllContacts),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  deleteById: ctrlWrapper(deleteById),
};
