import Joi from 'joi';

const getTodoByIdValidator = async (req, res, next) => {
  try {
    const paramsSchema = Joi.object({
      id: Joi.number().required()
    }).required();
    
    const validatedParams = await paramsSchema.validateAsync(req.params);
    req.validatedParams = validatedParams;
    next();
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

export {
  getTodoByIdValidator
}