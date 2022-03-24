const express = require('express');
const router = express.Router();

const { todoControllers } = require('../controllers/index');
const logging = require('../middlewares/logging');

router.get('/todo', logging, todoControllers.getAllTodoList);
router.delete('/todo/:id', logging, todoControllers.deleteTodoListById);
router.post('/todo', logging, todoControllers.createTodolist);
router.patch('/todo/:id', logging, todoControllers.editTodoListById);

module.exports = router;
