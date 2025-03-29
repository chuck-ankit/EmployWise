# EmployWise Frontend

The frontend of EmployWise is built with React, TypeScript, and Material-UI, providing a modern and responsive user interface for the HR management system.

## Features

- 🎨 **UI/UX**
  - Modern Material-UI design
  - Responsive layout
  - Dark/Light theme support
  - Custom components

- 🔒 **Authentication**
  - JWT token management
  - Protected routes
  - Login/Register forms
  - Session persistence

- 📊 **Data Management**
  - Redux state management
  - API integration
  - Pagination
  - Search and filtering

- 🛠 **Development**
  - TypeScript support
  - Hot reloading
  - Environment configuration
  - Code splitting

## Tech Stack

- React
- TypeScript
- Material-UI
- Redux Toolkit
- React Router
- Axios
- Formik & Yup
- Styled Components

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the frontend directory:
```bash
REACT_APP_API_URL=http://localhost:5000/api
```

4. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
frontend/
├── public/
│   ├── index.html
│   └── assets/
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   └── features/
│   ├── pages/
│   │   ├── auth/
│   │   ├── dashboard/
│   │   └── users/
│   ├── store/
│   │   ├── slices/
│   │   └── store.ts
│   ├── services/
│   │   ├── api.ts
│   │   └── auth.ts
│   ├── hooks/
│   ├── utils/
│   ├── types/
│   ├── theme/
│   ├── App.tsx
│   └── index.tsx
├── package.json
└── tsconfig.json
```

## Available Scripts

- `npm start` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run test` - Runs tests
- `npm run lint` - Runs ESLint
- `npm run format` - Formats code with Prettier

## Component Documentation

### Common Components

#### Button
- Reusable button component with variants
- Supports loading state
- Customizable styles

#### Input
- Form input component
- Built-in validation
- Error handling
- Custom styling

#### Table
- Data table component
- Sorting
- Pagination
- Custom columns

### Pages

#### Dashboard
- Overview statistics
- Recent activities
- Quick actions
- Charts and graphs

#### User Management
- User list
- User details
- Add/Edit/Delete users
- Search and filter

## State Management

The application uses Redux Toolkit for state management:
- Authentication state
- User data
- UI state
- Form state

## API Integration

API calls are handled through Axios:
- Centralized API configuration
- Request/Response interceptors
- Error handling
- Authentication headers

## Styling

The application uses:
- Material-UI components
- Styled Components for custom styling
- Theme customization
- Responsive design

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

This project is licensed under the MIT License.
