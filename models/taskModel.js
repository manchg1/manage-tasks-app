const db = require('../database');

class TaskModel {
    static getAllTasks(callback) {
        db.all("SELECT * FROM tasks", [], callback);
    }
}

    static addTask(title, description, due_date, priority, callback) {
        db.run("INSERT INTO tasks (title, description, due_date, priority, status) VALUES (?, ?, ?, ?, 'Pending')",
            [title, description, due_date, priority], callback);
    }   


module.exports = TaskModel;