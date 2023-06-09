require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT;

mongoose
	.connect(process.env.DB_URI)
	.then(() => {
		app.listen(PORT || 3000, () => {
			console.log(`Connected to the DB & Server is running on port: ${PORT}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
