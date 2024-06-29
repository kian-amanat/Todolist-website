import express from 'express';
import { getTodoByIdController } from './controller.js';
import { getTodos, createTodo } from '../../model/todos/index.js';

const router = express.Router();


router.get('', async (req, res) => {
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

router.get('/:id', getTodoByIdController);

router.post('', async (req, res) => {
  try {
    const {title, description, isCompleted} = req.body;
    await createTodo(title, description, isCompleted);
    res.status(201).json({
      message: `The todo added to the database.`
    });
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