
const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const taskController = require('./controllers/taskController');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use('/tasks', taskController);

app.get('/', (req, res) => {
    res.redirect('/tasks');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

