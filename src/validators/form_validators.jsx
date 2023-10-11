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
        .min(12)
        .max(20)
        .required()
        .label('Password'),

    confirmPassword: Joi.string()
        .valid(Joi.ref('password'))
        .required()
        .label('Confirm Password')
        .messages({'any.only': 'Password and Confirm Password must be matched'}),
});

const firstNameSchema = Joi.string()
    .min(2)
    .max(50)
    .required()
    .label('First Name');

const lastNameSchema = Joi.string()
    .min(2)
    .max(50)
    .required()
    .label('Last Name');

const ageSchema = Joi.number()
    .integer()
    .min(0)
    .required()
    .label('Age');

const usernameSchema = Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
    .label('Username');

export function validateUserData(userData) {
    return Joi.object({
        first_name: firstNameSchema,
        last_name: lastNameSchema,
        age: ageSchema,
        username: usernameSchema,
    }).validate(userData, {abortEarly: false});
}

export function validateEmail(email) {
    return emailSchema.validate(email, {abortEarly: false});
}

export function validatePassword(password) {
    return passwordSchema.validate(password, {abortEarly: false});
}

export function validateConfirmPassword(passwords) {
    return confirmPasswordSchema.validate(passwords, {abortEarly: false});
}
