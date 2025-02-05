const joi = require('joi');

const registerSchema = joi.object({
    email: joi.string()
    .min(6)
    .max(60)
    .email({
        tlds: { allow: ['com', 'net'] },
    })
    .required(),
    password: joi.string()
    .required()
    .pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$')),
    });