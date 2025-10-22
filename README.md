# User CRUD API

This project is a Node.js application that exposes CRUD APIs for a user model. It uses Express for the server framework and Mongoose for MongoDB interactions.

## Project Structure

```
user-crud-api
├── src
│   ├── controllers
│   │   └── userController.js
│   ├── models
│   │   └── user.js
│   ├── routes
│   │   └── userRoutes.js
│   ├── services
│   │   └── userService.js
│   ├── middlewares
│   │   └── authMiddleware.js
│   ├── utils
│   │   └── db.js
│   └── app.js
├── .env
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd user-crud-api
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB connection string and JWT secret:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

## Usage

To start the application, run:
```
npm start
```

The server will start on the specified port (default is 3000).

## API Endpoints

- **POST /api/users**: Create a new user
- **GET /api/users/:id**: Retrieve a user by ID
- **PUT /api/users/:id**: Update a user by ID
- **DELETE /api/users/:id**: Delete a user by ID

## Middleware

The application includes an authentication middleware that checks for a valid JWT token in the request headers to protect the routes.

## License

This project is licensed under the ISC License.