import { NextFunction, Request, Response } from 'express';

import logger from '@/utils/logger';
import {
  createTodoService,
  getAllTodosService,
  getTodoByIdService,
  updateTodoService,
  deleteTodoService,
} from './service';
import { todoSchema } from './validation';

const createTodo = async (req: Request, res: Response, next: NextFunction) => {
  const { title, completed } = req.body;

  try {
    await todoSchema.validate(title, completed);

    const newTodo = await createTodoService(title, completed);
    return res.status(201).json(newTodo);
  } catch (error: any) {
    logger.error(`${error.name}: ${error.message}`);
    return next(error);
  }
};

const getAllTodos = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const todos = await getAllTodosService();
    return res.status(200).json(todos);
  } catch (error: any) {
    logger.error(`${error.name}: ${error.message}`);
    return next(error);
  }
};

const getTodoById = async (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id, 10);

  try {
    const todo = await getTodoByIdService(id);
    return res.status(200).json(todo);
  } catch (error: any) {
    logger.error(`${error.name}: ${error.message}`);
    return next(error);
  }
};

const updateTodo = async (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id, 10);
  const { title, completed } = req.body;

  try {
    await todoSchema.validate(title, completed);

    const updatedTodo = await updateTodoService(id, title, completed);
    return res.status(200).json(updatedTodo);
  } catch (error: any) {
    logger.error(`${error.name}: ${error.message}`);
    return next(error);
  }
};

const deleteTodo = async (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id, 10);

  try {
    await deleteTodoService(id);
    return res.status(204).json({ message: 'Todo deleted successfully' });
  } catch (error: any) {
    logger.error(`${error.name}: ${error.message}`);
    return next(error);
  }
};

export { createTodo, getAllTodos, getTodoById, updateTodo, deleteTodo };
