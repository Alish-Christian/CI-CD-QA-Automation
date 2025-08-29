# Authentication Server

This is the backend server for the CI/CD QA Automation project with user authentication functionality.

## Features

- User registration (signup)
- User login
- Profile management
- Password hashing with bcrypt
- Input validation
- MongoDB database integration

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/ci-cd-qa-automation
NODE_ENV=development
```

3. Make sure MongoDB is running on your system

4. Start the server:
```bash
npm run dev
```

## API Endpoints

### Authentication

- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile/:id` - Get user profile
- `PUT /api/auth/profile/:id` - Update user profile

### Request Examples

#### Signup
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "Password123",
  "firstName": "John",
  "lastName": "Doe"
}
```

#### Login
```json
{
  "email": "john@example.com",
  "password": "Password123"
}
```

## Project Structure

```
Backend/
├── Server/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   └── authController.js
│   ├── middleware/
│   │   └── validation.js
│   ├── models/
│   │   └── User.js
│   └── routes/
│       └── authRoutes.js
├── utils/
├── index.js
└── package.json
```

## Dependencies

- express: Web framework
- mongoose: MongoDB ODM
- bcrypt: Password hashing
- cors: Cross-origin resource sharing
- express-validator: Input validation
- dotenv: Environment variables
