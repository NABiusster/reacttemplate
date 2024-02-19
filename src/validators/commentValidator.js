import Joi from "joi";

const commentValidator = Joi.object({
    postId:Joi.number().min(1),
    name: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Only letters min 1 max 20 characters'
    }),
    email:Joi.string().email({tlds:{allow:false}}),
    body: Joi.string().max(254).min(3)
})
export {commentValidator}