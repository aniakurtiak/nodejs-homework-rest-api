import Joi from "joi";

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
});

export const updateContactSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.number(),
});
