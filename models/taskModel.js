const db = require('../database');

class TaskModel {
    static getAllTasks(callback) {
        db.all("SELECT * FROM tasks", [], callback);
    }
}

module.exports = TaskModel;