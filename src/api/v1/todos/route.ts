import express from 'express';
import * as todosController from './controller';

const router = express.Router();

router.get('/', todosController.getAllTodos);
router.get('/:id', todosController.getTodoById);
router.post('/', todosController.createTodo);
router.put('/:id', todosController.updateTodo);
router.delete('/:id', todosController.deleteTodo);

export default router;
