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

module.exports = router;