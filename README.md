# Crammer Education API

This is a RESTful API for managing flashcards. It allows users to create, read, and delete flashcards, as well as sign up and log in to the system.

## Prerequisites

Before you begin, ensure that you have the following installed:

- Node.js (v14 or above)
- npm (Node Package Manager)

## Installation

Follow the steps below to clone the repository, install the required packages, and set up the database.

1. Clone the repository:

   `git clone git@github.com:Tellur89/Crammer_Education_server.git`

2. Navigate to the project directory:

   `cd Crammer_Education_server`

3. Install the dependencies:

   `npm install`

4. Create a .env file in the root directory of the project and set the following environment variables:

   - PORT - The port number on which the server will run (e.g., 3000)
   - DB_URI - The MongoDB connection URI

## Database Setup

This API uses MongoDB as the database. Follow the instructions below to set up the database using MongoDB Atlas.

1. Sign up or log in to MongoDB Atlas.

2. Create a new cluster and configure it according to your preferences.

3. In the cluster overview page, click on the "Connect" button.

4. Select "Connect your application" as the connection method.

5. Copy the connection string provided.

6. Replace <username> and <password> in the connection string with your actual MongoDB Atlas credentials.

7. Paste the updated connection string as the value of the DB_URI environment variable in the .env file.

## Usage

To start the server, run the following command:

`npm run dev`

The server will start running on the specified port (default is 3000).

## API Endpoints

The API provides the following endpoints:

### Flashcard Endpoints

- `GET /api/flashcards` - Get all flashcards of the authenticated user.
- `POST /api/flashcards` - Create a new flashcard.
- `PATCH /api/flashcards` - Update a flashcard.
- `DELETE /api/flashcards/:id` - Delete a flashcard by its ID.

### User Endpoints

- `POST /api/signup` - Sign up as a new user.
- `POST /api/login` - Log in as an existing user.

Note: All requests to the flashcard endpoints require authentication. You need to include a valid JWT token in the `Authorization` header of your requests.

## Models

### Flashcard Model

```js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flashcardSchema = new Schema(
	{
		frontSide: {
			type: String,
			required: true,
		},
		backSide: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		username: {
			type: String,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Flashcard', flashcardSchema);
```

### User Model

```js
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

userSchema.statics.signup = async function (username, email, password) {
	// ...
};

userSchema.statics.login = async function (username, password) {
	// ...
};

module.exports = mongoose.model('User', userSchema);
```

## Testing

To run the tests, use the following command:

`npm run test`

The tests are implemented using Jest and Supertest. They cover the basic functionality of the API.

## License

This project is licensed under the `ISC License`.

## Bugs Reports

No bugs have been identified at this time. The application is running smoothly without any known issues.
