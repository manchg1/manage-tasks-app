const express = require('express');
const TaskModel = require('../models/taskModel');
const router = express.Router();

// Show all tasks
router.get('/', (req, res) => {
    TaskModel.getAllTasks((err, tasks) => {
        if (err) {            c
            return res.status(500).send("Error retrieving tasks");
        }

        tasks = tasks.map(task => ({
            ...task,
            ifPending: task.status === 'Pending',
            ifCompleted: task.status === 'Completed'
        }));

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

router.post('/update/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    TaskModel.updateTaskStatus(id, status, (err) => {
        if (err) throw err;
        res.redirect('/tasks');
    });
});

router.post('/delete/:id', (req, res) => {
    const { id } = req.params;
    TaskModel.deleteTask(id, (err) => {
        if (err) throw err;
        res.redirect('/tasks');
    });
});

router.post('/delete-all', (req, res) => {
    TaskModel.deleteAllTasks((err) => {
        if (err) throw err;
        res.redirect('/tasks');
    });
});

module.exports = router;