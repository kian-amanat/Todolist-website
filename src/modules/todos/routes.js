import express from 'express';
import {getTodos} from '../../model/todos/index.js';

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


export {
  router
};