const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const app = express();

const userRoutes = require('./routes/users');

// MIDDLEWARE
app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.get('/', (req, res) => {
	res.send('API IS RUNNING');
});

// ROUTES
app.use('/users', userRoutes);

module.exports = app;
