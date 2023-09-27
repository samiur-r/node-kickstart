import { NextFunction, Request, Response } from 'express';

import logger from '@/utils/logger';
import ErrorHandler from '@/utils/ErrorHandler';
import {
  createTodoService,
  getAllTodosService,
  getTodoByIdService,
  updateTodoService,
  deleteTodoService,
} from './service';
import { todoSchema } from './validation';

const createTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, completed } = req.body;
    await todoSchema.validate({ title, completed });

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
  try {
    const id = parseInt(req.params.id, 10);

    const todo = await getTodoByIdService(id);

    if (!todo) throw new ErrorHandler(404, `Todo with the id ${id} not found`);

    return res.status(200).json(todo);
  } catch (error: any) {
    logger.error(`${error.name}: ${error.message}`);
    return next(error);
  }
};

const updateTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { title, completed } = req.body;

    await todoSchema.validate({ title, completed });

    const todo = await getTodoByIdService(id);
    if (!todo) throw new ErrorHandler(404, `Todo with the id ${id} not found`);

    const updatedTodo = await updateTodoService(id, title, completed);
    return res.status(200).json(updatedTodo);
  } catch (error: any) {
    logger.error(`${error.name}: ${error.message}`);
    return next(error);
  }
};

const deleteTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);

    const todo = await getTodoByIdService(id);
    if (!todo) throw new ErrorHandler(404, `Todo with the id ${id} not found`);

    await deleteTodoService(id);
    return res.status(204).json({ message: 'Todo deleted successfully' });
  } catch (error: any) {
    logger.error(`${error.name}: ${error.message}`);
    return next(error);
  }
};

export { createTodo, getAllTodos, getTodoById, updateTodo, deleteTodo };
