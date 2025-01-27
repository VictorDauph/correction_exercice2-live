import express from "express"
import { createTodo, getAllFalses, getAllTodos, modifyTodo } from "../controllers/TodoController";

const router = express.Router()

router.post('/', createTodo)
router.get('/', getAllTodos)
router.put('/:id', modifyTodo)
router.get('/false', getAllFalses)

export default router;