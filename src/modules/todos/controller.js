import {
  getTodoByIdService
} from './service.js';

const getTodoById = async (req, res, next) => {
  try {
    const todoId = req.params.id;
    const todo = await getTodoByIdService(todoId);
    if (todo === null) {
      res.status(404).json({
        message: `The todo with id=${todoId} is not exists`
      });
    } else {
      res.json(todo);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
}

export {
  getTodoById
}
