import { Schema, model } from "mongoose";
import { handleSaveError, preUpdate } from "./hooks.js";
import Joi from "joi";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleSaveError);
contactSchema.post("findOneAndUpdate", handleSaveError);

contactSchema.pre("findOneAndUpdate", preUpdate);

const Contact = model("contact", contactSchema);

export const addContactSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `"name" must be exist`,
    "string.base": `"name" must be text`,
  }),
  email: Joi.string().required().messages({
    "any.required": `"email" must be exist`,
  }),
  phone: Joi.number().required().messages({
    "any.required": `"phone" must be exist`,
    "string.base": `"phone" must be number`,
  }),
  favorite: Joi.boolean(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.number(),
  favorite: Joi.boolean(),
});

export const favoriteContactSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

export default Contact;
