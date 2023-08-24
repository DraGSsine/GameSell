import Joi from "joi";
export default function validation(data:string){
    const schema = Joi.object({
        email: Joi.string().email().min(6).required(),
        password: Joi.string().min(6).required(),
    });
    return  schema.validate(data)
}