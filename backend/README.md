# EmployWise Backend

The backend of EmployWise is built with Node.js, Express, and MongoDB, providing a robust and scalable API for the HR management system.

## Features

- 🔒 **Security**
  - JWT-based authentication
  - Password hashing with bcrypt
  - Protected routes middleware
  - Input validation

- 📊 **Database**
  - MongoDB with Mongoose
  - Efficient data modeling
  - Indexed queries
  - Data validation

- 🚀 **API**
  - RESTful endpoints
  - Pagination support
  - Error handling
  - Request validation

- 🛠 **Development**
  - TypeScript support
  - Hot reloading
  - Environment configuration
  - Logging system

## Tech Stack

- Node.js
- Express
- TypeScript
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- cors
- dotenv

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```bash
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

4. Start the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:5000`

## Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── db.ts
│   ├── controllers/
│   │   ├── authController.ts
│   │   └── userController.ts
│   ├── middleware/
│   │   ├── auth.ts
│   │   └── errorHandler.ts
│   ├── models/
│   │   └── User.ts
│   ├── routes/
│   │   ├── authRoutes.ts
│   │   └── userRoutes.ts
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── jwt.ts
│   └── app.ts
├── package.json
└── tsconfig.json
```

## API Documentation

### Authentication Endpoints

#### Register User
- **POST** `/api/auth/register`
- **Body:**
  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
  ```

#### Login User
- **POST** `/api/auth/login`
- **Body:**
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```

#### Get Profile
- **GET** `/api/auth/me`
- **Headers:**
  ```
  Authorization: Bearer <token>
  ```

### User Endpoints

#### Get Users
- **GET** `/api/users`
- **Query Parameters:**
  - `page`: number (default: 1)
  - `limit`: number (default: 10)
- **Headers:**
  ```
  Authorization: Bearer <token>
  ```

#### Get User by ID
- **GET** `/api/users/:id`
- **Headers:**
  ```
  Authorization: Bearer <token>
  ```

#### Update User
- **PUT** `/api/users/:id`
- **Headers:**
  ```
  Authorization: Bearer <token>
  ```
- **Body:**
  ```json
  {
    "name": "string",
    "email": "string"
  }
  ```

#### Delete User
- **DELETE** `/api/users/:id`
- **Headers:**
  ```
  Authorization: Bearer <token>
  ```

## Available Scripts

- `npm run dev` - Starts the development server with hot reloading
- `npm run build` - Builds the TypeScript code
- `npm start` - Starts the production server
- `npm run lint` - Runs ESLint
- `npm run test` - Runs tests

## Error Handling

The API uses a centralized error handling system that:
- Validates input data
- Handles authentication errors
- Manages database errors
- Provides meaningful error messages

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

This project is licensed under the MIT License. 