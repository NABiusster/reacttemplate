import Joi from "joi";

const carValidator=Joi.object({
    brand:Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/),
    price: Joi.number().integer().min(0).max(1000000),
    year: Joi.number().integer().min(1900).max( new Date().getFullYear()),

})
export {carValidator}