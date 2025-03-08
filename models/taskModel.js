const db = require('../database');

class TaskModel {
    static getAllTasks(callback) {
        db.all("SELECT * FROM tasks", [], callback);
    }

    static addTask(title, description, due_date, priority, callback) {
        db.run("INSERT INTO tasks (title, description, due_date, priority, status) VALUES (?, ?, ?, ?, 'Pending')",
            [title, description, due_date, priority], callback);
    }

    static updateTaskStatus(id, status, callback) {
        db.run("UPDATE tasks SET status = ? WHERE id = ?", [status, id], callback);
    }
    
    static deleteTask(id, callback) {
        db.run("DELETE FROM tasks WHERE id = ?", [id], callback);
    }
    
    static deleteAllTasks(callback) {
        db.run("DELETE FROM tasks", callback);
    }    
}

module.exports = TaskModel;