const Joi = require('@hapi/joi');
const registerValidation = (data) =>{
    const schema  = {
        name : Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(6)
    };
    return Joi.valid(data, schema);
};

const loginValidation = (data) =>{
    const schema  = {
        email: Joi.string().required().email(),
        password: Joi.string().required().min(6)
    };
    return Joi.valid(data, schema);
};
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;