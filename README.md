# EmployWise - HR Management System

EmployWise is a comprehensive HR management system built with modern web technologies. It provides a robust platform for managing employees, handling HR processes, and maintaining organizational data efficiently.

## 🌟 Features

- 👥 **User Management**
  - Employee profiles
  - Role-based access control
  - User authentication
  - Profile management

- 📊 **Dashboard**
  - Overview statistics
  - Quick actions
  - Recent activities
  - Performance metrics

- 🔒 **Security**
  - JWT authentication
  - Protected routes
  - Role-based permissions
  - Secure data handling

- 📱 **Responsive Design**
  - Mobile-first approach
  - Cross-browser compatibility
  - Modern UI/UX
  - Adaptive layouts

## 🚀 Tech Stack

### Frontend
- React
- TypeScript
- Material-UI
- Redux Toolkit
- React Router
- Axios
- Formik & Yup
- Styled Components

### Backend
- Node.js
- Express
- TypeScript
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- cors
- dotenv

## 📁 Project Structure

```
employwise/
├── frontend/           # React frontend application
├── backend/           # Node.js backend application
└── README.md          # This file
```

## 🛠 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/chuckankit/employwise.git
cd employwise
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. Set up environment variables:

Backend (`.env`):
```bash
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

Frontend (`.env`):
```bash
REACT_APP_API_URL=http://localhost:5000/api
```

5. Start the development servers:

Backend:
```bash
cd backend
npm run dev
```

Frontend:
```bash
cd frontend
npm start
```

The application will be available at:
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000`

## 📚 Documentation

- [Frontend Documentation](./frontend/README.md)
- [Backend Documentation](./backend/README.md)
- [API Documentation](./backend/README.md#api-documentation)

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm run test
```

### Frontend Tests
```bash
cd frontend
npm run test
```

## 📦 Deployment

### Backend Deployment
1. Build the TypeScript code:
```bash
cd backend
npm run build
```

2. Start the production server:
```bash
npm start
```

### Frontend Deployment
1. Build the React application:
```bash
cd frontend
npm run build
```

2. Deploy the `build` folder to your hosting service

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Material-UI for the beautiful components
- MongoDB for the database
- All contributors who have helped shape this project

## Contact

Your Name - [@snobby_coder](https://x.com/snobby_coder) - ankitkumar9864@gmail.com

Project Link: [https://github.com/chuckankit/EmployWise](https://github.com/chuckankit/EmployWise) 