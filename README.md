# Task Management System

A full-stack task management application built with Node.js, MySQL, Express, and React. Features JWT authentication, role-based access control, and separate dashboards for admin and user roles.

## 🚀 Features

### Authentication & Authorization
- JWT-based authentication
- Role-based access control (Admin/User)
- Secure password hashing with bcrypt
- Protected routes and API endpoints

### Task Management
- Create, read, update, and delete tasks
- Task status tracking (Pending, In Progress, Completed)
- Priority levels (Low, Medium, High)
- Due date management
- Task assignment to users

### User Management (Admin Only)
- Create, edit, and delete users
- Role assignment
- User statistics and overview

### Dashboard Features
- **Admin Dashboard**: View all users and tasks, comprehensive statistics
- **User Dashboard**: View and manage own tasks only
- Real-time statistics and task overview
- Search and filtering capabilities

### UI/UX Features
- Modern, responsive design with Tailwind CSS
- Intuitive navigation with sidebar
- Form validation and error handling
- Toast notifications for user feedback
- Mobile-friendly interface

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MySQL** - Database
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **express-validator** - Input validation
- **cors** - Cross-origin resource sharing
- **helmet** - Security headers
- **morgan** - HTTP request logging

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **React Hook Form** - Form handling
- **Axios** - HTTP client
- **Tailwind CSS** - Styling framework
- **Lucide React** - Icon library
- **React Hot Toast** - Notifications

## 📋 Prerequisites

- Node.js (v16 or higher)
- MySQL (v8.0 or higher)
- npm or yarn

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd TaskManagement
```

### 2. Database Setup
```sql
CREATE DATABASE task_management;
```

### 3. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=task_management
DB_PORT=3306

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRES_IN=24h

# CORS Configuration
CORS_ORIGIN=http://localhost:3000
```

Start the backend server:
```bash
npm run dev
```

### 4. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### 5. Access the Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 👤 Default Admin Account

The system automatically creates a default admin user:
- **Email**: admin@taskmanagement.com
- **Password**: admin123

## 📁 Project Structure

```
TaskManagement/
├── backend/                 # Node.js/Express backend
│   ├── src/
│   │   ├── config/         # Database and app configuration
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/     # Custom middleware
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   ├── utils/          # Utility functions
│   │   ├── app.js          # Express app setup
│   │   └── server.js       # Server entry point
│   ├── package.json
│   └── .env
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React context
│   │   ├── services/       # API services
│   │   ├── utils/          # Utility functions
│   │   ├── App.jsx         # Main app component
│   │   └── index.js        # Entry point
│   ├── package.json
│   └── index.html
└── README.md
```

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Tasks
- `GET /api/tasks` - Get all tasks (role-based)
- `POST /api/tasks` - Create new task
- `GET /api/tasks/:id` - Get task by ID
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task
- `GET /api/tasks/status/:status` - Get tasks by status
- `GET /api/tasks/priority/:priority` - Get tasks by priority

### Users (Admin Only)
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## 🔒 Security Features

- JWT token authentication
- Password hashing with bcrypt
- Input validation and sanitization
- CORS protection
- Security headers with helmet
- Role-based access control
- Protected API endpoints

## 🎨 UI Components

### Reusable Components
- **Button** - Configurable button with variants
- **Input** - Form input with validation
- **Select** - Dropdown select component
- **Textarea** - Multi-line text input
- **Card** - Content container
- **Badge** - Status indicators
- **Layout** - Main layout with navigation

### Pages
- **Login/Register** - Authentication pages
- **Dashboard** - Overview and statistics
- **Tasks** - Task management interface
- **Users** - User management (Admin only)

## 🚀 Deployment

### Backend Deployment
1. Set up a MySQL database
2. Configure environment variables
3. Install dependencies: `npm install`
4. Start the server: `npm start`

### Frontend Deployment
1. Build the application: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Configure API URL for production

## 🧪 Testing

### Backend Testing
```bash
cd backend
npm test
```

### Frontend Testing
```bash
cd frontend
npm test
```

## 📝 Environment Variables

### Backend (.env)
```env
PORT=5000
NODE_ENV=development
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=task_management
DB_PORT=3306
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRES_IN=24h
CORS_ORIGIN=http://localhost:3000
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation in each folder
- Review the API endpoints documentation

## 🔄 Updates

Stay updated with the latest changes:
- Check the changelog
- Follow the repository for updates
- Review breaking changes in releases

---

**Happy Task Managing! 🎉** 