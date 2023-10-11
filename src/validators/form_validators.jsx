import Joi from "joi";

const emailSchema = Joi.string()
    .email({tlds: {allow: false}}) // Customize the allowed email formats
    .required()
    .label("Email");

const passwordSchema = Joi.string()
    .min(12) // Set a minimum password length
    .max(20)// Set a maximum password length
    .required()
    .label("Password");

export function validateEmail(email) {
    return emailSchema.validate(email);
}

export function validatePassword(password) {
    return passwordSchema.validate(password);
}