import { prisma } from '@/config/db';
import { Todo } from './interfaces';

const createTodoService = async (
  title: string,
  completed: boolean,
): Promise<Todo> => {
  const newTodo = await prisma.todo.create({
    data: {
      title,
      completed,
    },
  });
  return newTodo;
};

const getAllTodosService = async (): Promise<Todo[]> => {
  const todos = await prisma.todo.findMany();
  return todos;
};

const getTodoByIdService = async (id: number): Promise<Todo | null> => {
  const todo = await prisma.todo.findUnique({
    where: { id },
  });
  return todo;
};

const updateTodoService = async (
  id: number,
  title: string,
  completed: boolean,
): Promise<Todo | null> => {
  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { title, completed },
  });
  return updatedTodo;
};

const deleteTodoService = async (id: number): Promise<void> => {
  await prisma.todo.delete({
    where: { id },
  });
};

export {
  createTodoService,
  getAllTodosService,
  getTodoByIdService,
  updateTodoService,
  deleteTodoService,
};
