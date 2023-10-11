import Joi from "joi";

const emailSchema = Joi.string()
    .email({tlds: {allow: false}})
    .required()
    .label("Email");

const passwordSchema = Joi.string()
    .min(12)
    .max(20)
    .required()
    .label("Password");

const confirmPasswordSchema = Joi.object({
    password: Joi.string()
        .min(8)
        .required()
        .label('Password'),

    confirmPassword: Joi.string()
        .valid(Joi.ref('password'))
        .required()
        .label('Confirm Password')
        .messages({'any.only': 'Password and Confirm Password must be matched'}),
});

export function validateEmail(email) {
    return emailSchema.validate(email, {abortEarly: false});
}

export function validatePassword(password) {
    return passwordSchema.validate(password, {abortEarly: false});
}

export function validateConfirmPassword(passwords) {
    return confirmPasswordSchema.validate(passwords, {abortEarly: false});
}
