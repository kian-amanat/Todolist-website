import { 
  getTodoById as getTodoByIdDataService
} from '../../model/todos/index.js';


async function getTodoByIdService(todoId) {
  const todo = await getTodoByIdDataService(todoId);
  if (todo === null || todo === undefined || todo.length === 0) {
    return null;
  }
  return todo[0];
}

export {
  getTodoByIdService
}