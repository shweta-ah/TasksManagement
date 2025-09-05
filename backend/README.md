# Task Management Backend

A Node.js backend API for a task management system with JWT authentication and role-based access control.

## Features

- 🔐 JWT Authentication
- 👥 Role-based access control (Admin/User)
- 📝 Task management (CRUD operations)
- 👤 User management (Admin only)
- 🛡️ Input validation and security
- 🗄️ MySQL database integration

## Prerequisites

- Node.js (v14 or higher)
- MySQL (v8.0 or higher)
- npm or yarn

## Installation

1. **Clone the repository and navigate to backend:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env`
   - Update the database configuration:
     ```
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=your_password
     DB_NAME=task_management
     ```

4. **Create MySQL database:**
   ```sql
   CREATE DATABASE task_management;
   ```

5. **Start the server:**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## Default Admin User

The system automatically creates a default admin user:
- **Email:** admin@taskmanagement.com
- **Password:** admin123

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (authenticated)

### Users (Admin only)
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Tasks
- `POST /api/tasks` - Create a new task
- `GET /api/tasks` - Get all tasks (role-based)
- `GET /api/tasks/:id` - Get task by ID
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task
- `GET /api/tasks/status/:status` - Get tasks by status
- `GET /api/tasks/priority/:priority` - Get tasks by priority

## Role-based Access

### Admin
- Can view and manage all users
- Can view and manage all tasks
- Can assign tasks to any user
- Can delete users and tasks

### User
- Can only view and manage their own tasks
- Cannot access user management
- Cannot assign tasks to other users

## Database Schema

### Users Table
- `id` - Primary key
- `username` - Unique username
- `email` - Unique email
- `password` - Hashed password
- `role` - User role (admin/user)
- `created_at` - Creation timestamp
- `updated_at` - Last update timestamp

### Tasks Table
- `id` - Primary key
- `title` - Task title
- `description` - Task description
- `status` - Task status (pending/in_progress/completed)
- `priority` - Task priority (low/medium/high)
- `due_date` - Task due date
- `user_id` - Assigned user ID
- `created_by` - Task creator ID
- `created_at` - Creation timestamp
- `updated_at` - Last update timestamp

## Security Features

- JWT token authentication
- Password hashing with bcrypt
- Input validation with express-validator
- CORS protection
- Helmet security headers
- Role-based access control

## Error Handling

The API returns consistent error responses:
```json
{
  "message": "Error description",
  "errors": [] // Validation errors (if any)
}
```

## Development

- **Port:** 5000 (configurable via PORT env variable)
- **Environment:** development/production
- **Logging:** Morgan for HTTP request logging
- **Hot reload:** Nodemon for development
