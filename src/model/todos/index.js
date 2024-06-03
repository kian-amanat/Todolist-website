import { query } from '../../core/database/database-handler.js';

async function getTodos() {
  const sql = `select * from public.todos;`;
  const result = await query(sql);
  return result.rows;
}

async function getTodoById(id) {
  const sql = `
    select * 
    from public.todos
    where id = $1;
  `;
  const result = await query(sql, [id]);
  return result.rows;
}

async function createTodo(title, description, isCompleted) {
  const sql = `
    insert into public.todos
    (title, description, is_completed)
    values
    ($1, $2, $3);
  `;
  const result = await query(sql, [title, description, isCompleted]);
  return result;
}

export {
  getTodos,
  getTodoById,
  createTodo
};