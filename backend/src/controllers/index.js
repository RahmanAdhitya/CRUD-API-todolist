const { todoDB } = require('../database');
const { nanoid } = require('nanoid');

const todoControllers = {
  getAllTodoList: (req, res) => {
    if (!todoDB) {
      res.status(404).json({
        message: 'data not found',
      });
      return;
    }

    res.status(200).json({
      message: 'get all todolist',
      result: todoDB,
    });
  },
  createTodolist: (req, res) => {
    const newData = req.body;

    if (!newData) {
      res.status(400).json({
        message: 'data is required',
      });
      return;
    }
    if (!newData.action) {
      res.status(400).json({
        message: 'action is required',
      });
      return;
    }

    newData.id = nanoid();
    todoDB.push(newData);

    res.status(200).json({
      message: 'new data created',
      result: todoDB,
    });
  },
  editTodoListById: (req, res) => {
    const todoId = req.params.id;
    const editTodoData = req.body;

    const findIdx = todoDB.findIndex((val) => {
      return val.id == todoId;
    });

    if (findIdx == -1) {
      res.status(404).json({
        message: 'list not found',
      });
      return;
    }

    todoDB[findIdx] = {
      ...todoDB[findIdx],
      ...editTodoData,
    };

    res.status(200).json({
      message: 'Status Change',
      result: todoDB,
    });
  },
  deleteTodoListById: (req, res) => {
    const todoId = req.params.id;

    const findIndex = todoDB.findIndex((val) => {
      return val.id == todoId;
    });

    if (findIndex == -1) {
      res.status(404).json({
        message: 'data not found',
      });
      return;
    }
    todoDB.splice(findIndex, 1);

    res.status(200).json({
      message: 'data deleted',
      result: todoDB,
    });
  },
};

module.exports = { todoControllers };
