import express from 'express';
import { getTodos, getTodoById } from '../../model/todos/index.js';

const router = express.Router();


router.get('/api/todo', async (req, res) => {
  try {
    const todoList = await getTodos();
    res.json(todoList);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
});

router.get('/api/todo/:id', async (req, res) => {
  try {
    const todoId = req.params.id;
    const todo = await getTodoById(todoId);
    if (!todo || todo.length <= 0) {
      res.status(404).json({
        message: `The todo with id=${todoId} is not exists`
      });
    } else {
      res.json(todo[0]);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
})


export {
  router
};