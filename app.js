const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const projectsRouter = require('./routes/projects');
const tasksRouter = require('./routes/tasks');
const notesRouter = require('./routes/notes');

const errorHandler = require("./plugins/error-handler");

const app = express();

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

// Static folder to fetch files
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/projects', projectsRouter);
app.use('/tasks', tasksRouter);
app.use('/notes', notesRouter);

app.use(errorHandler);

module.exports = app;
