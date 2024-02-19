import Joi from "joi";

const userValidator = Joi.object({
        username: Joi.string().pattern(/^[a-z]{3,20}$/).required().messages({
            'string.pattern.base': 'Only latin low register letters. Min 3, max 20 characters.'
        }),
        email: Joi.string().email({ tlds: { allow: false } }),
        name: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
            'string.pattern.base': 'Only letters min 1 max 20 characters'
        })
    }
)
export {userValidator}