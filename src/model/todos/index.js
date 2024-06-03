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

export {
  getTodos,
  getTodoById
};