import { query } from "../../core/database/database-handler.js";

async function getTaskById(id) {
  const sql = ` select * from task
  where id = $1  `;
  const result = await query(sql, [id]);
  return result;
}

async function createTask(title, description, isCompleted) {
  const sql = `
  insert into task
  (title, description, is_completed) 
  values 
  ($1 , $2 , $3) ;
  `;
  const result = await query(sql, [title, description, isCompleted]);
  return result;
}

async function updateTaskById(id, title, description, isCompleted) {
  const sql = `
  update task
  set title = $2, description = $3, is_completed = $4
  where id = $1
`;
  const result = await query(sql, [id, title, description, isCompleted]);
  return result;
}

async function removeTaskById(id) {
  const sql = `
    delete from task
    where id = $1
  `;
  const result = await query(sql, [id]);
  return result;
}

export { getTaskById, createTask, updateTaskById, removeTaskById };
