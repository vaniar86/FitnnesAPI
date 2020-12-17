const Joi = require('@hapi/joi');

const numbers = Joi.number().positive().required();

const schemas = {
    create : Joi.object().keys({
        title : Joi.string().required(),
        description : Joi.string().required(),
        img : Joi.string().required(),
        leftColor : Joi.string().required(),
        rightColor : Joi.string().required()
    })
};

module.exports = {schemas}