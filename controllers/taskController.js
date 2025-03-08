const express = require('express');
const TaskModel = require('../models/taskModel');
const router = express.Router();

// Show all tasks
router.get('/', (req, res) => {
    TaskModel.getAllTasks((err, tasks) => {
        if (err) throw err;
        res.render('index', { tasks });
    });
});

router.post('/add', (req, res) => {
    const { title, description, due_date, priority } = req.body;
    TaskModel.addTask(title, description, due_date, priority, (err) => {
        if (err) throw err;
        res.redirect('/tasks');
    });
});

module.exports = router;