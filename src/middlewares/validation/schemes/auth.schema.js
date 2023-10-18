// NPM modules
import Joi from 'joi';

const AuthSchema = {
    loginSchema: {
        body: Joi.object({
            username: Joi.string().min(3),
            password: Joi.string().min(3).required(),
        }).or('username')
    }
};

export default AuthSchema;
