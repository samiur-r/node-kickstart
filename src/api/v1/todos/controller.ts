import { Request, Response } from 'express';

import logger from '@/utils/logger';
import {
  createTodoService,
  getAllTodosService,
  getTodoByIdService,
  updateTodoService,
  deleteTodoService,
} from './service';

export const createTodo = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { title, completed } = req.body;
    const newTodo = await createTodoService(title, completed);
    res.json(newTodo);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: 'Error creating todo' });
  }
};

export const getAllTodos = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  try {
    const todos = await getAllTodosService();
    res.json(todos);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: 'Error retrieving todos' });
  }
};

export const getTodoById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const id = parseInt(req.params.id, 10);
  try {
    const todo = await getTodoByIdService(id);
    if (!todo) {
      res.status(404).json({ error: 'Todo not found' });
    } else {
      res.json(todo);
    }
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: 'Error retrieving todo' });
  }
};

export const updateTodo = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const id = parseInt(req.params.id, 10);
  const { title, completed } = req.body;
  try {
    const updatedTodo = await updateTodoService(id, title, completed);
    if (!updatedTodo) {
      res.status(404).json({ error: 'Todo not found' });
    } else {
      res.json(updatedTodo);
    }
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: 'Error updating todo' });
  }
};

export const deleteTodo = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const id = parseInt(req.params.id, 10);
  try {
    await deleteTodoService(id);
    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: 'Error deleting todo' });
  }
};
