import express from 'express';
import * as todosController from './controller';

const router = express.Router();

router.get('/todos', todosController.getAllTodos);
router.get('/todos/:id', todosController.getTodoById);
router.post('/todos', todosController.createTodo);
router.put('/todos/:id', todosController.updateTodo);
router.delete('/todos/:id', todosController.deleteTodo);

export default router;
