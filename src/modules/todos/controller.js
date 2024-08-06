import {
  getTaskById,
  createTask,
  updateTaskById,
  removeTaskById,
} from "../../model/todos/index.js";

const getTaskController = async (req, res) => {
  try {
    const taskId = req.params.id;
    if (!taskId) {
      console.log("you doesnt add your id");
    } else {
      const getTask = await getTaskById(taskId);
      res.json(getTask);
    }
  } catch (error) {
    console.log(error);
  }
};

const createTaskController = async (req, res) => {
  try {
    const { title, description, isCompleted = false } = req.body;
    await createTask(title, description, isCompleted);
    res.json({
      message: " your task is added to the database",
    });
  } catch (error) {
    res.json({
      message: `your tasks doesnt add to database for that resaon => ${error}`,
    });
    console.log(error);
  }
};

const updateTaskController = async (req, res) => {
  try {
    const upId = req.params.id;
    const {
      title,
      description = "Default description",
      isCompleted,
    } = req.body;
    if (!upId) {
      console.log("you doesnt add your id");
    } else {
      const updateTask = await updateTaskById(
        upId,
        title,
        description,
        isCompleted
      );
      res.json({
        message: "your task is updated",
      });
    }
  } catch (error) {
    res.json({
      message: `your tasks doesnt update for that resaon => ${error}`,
    });
    console.log(error);
  }
};

const removeTaskController = async (req, res) => {
  try {
    const remId = req.params.id;
    if (!remId) {
      console.log("you doesnt add your id");
    } else {
      await removeTaskById(remId);
      res.json({
        message: `your task with id : ${remId} is deleted`,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export {
  getTaskController,
  createTaskController,
  removeTaskController,
  updateTaskController,
};
