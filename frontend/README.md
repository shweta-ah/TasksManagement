# Task Management Frontend

A modern React frontend for the Task Management System with role-based dashboards and intuitive user interface.

## Features

- 🔐 JWT Authentication with protected routes
- 👥 Role-based access control (Admin/User dashboards)
- 📝 Task management with CRUD operations
- 👤 User management (Admin only)
- 🎨 Modern UI with Tailwind CSS
- 📱 Responsive design
- 🔍 Search and filtering capabilities
- 📊 Dashboard with statistics
- 🎯 Form validation with React Hook Form
- 🔔 Toast notifications

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **React Hook Form** - Form handling and validation
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **React Hot Toast** - Toast notifications
- **CLSX** - Conditional className utility

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Backend API running (see backend README)

## Installation

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx
│   ├── Input.jsx
│   ├── Select.jsx
│   ├── Textarea.jsx
│   ├── Card.jsx
│   ├── Badge.jsx
│   ├── Layout.jsx
│   ├── TaskModal.jsx
│   └── UserModal.jsx
├── pages/              # Page components
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Dashboard.jsx
│   ├── Tasks.jsx
│   └── Users.jsx
├── context/            # React context
│   └── AuthContext.jsx
├── services/           # API services
│   └── api.js
├── utils/              # Utility functions
├── hooks/              # Custom React hooks
├── App.jsx             # Main app component
├── index.js            # Entry point
└── index.css           # Global styles
```

## Components

### Reusable Components
- **Button** - Configurable button with variants and loading states
- **Input** - Form input with label and error handling
- **Select** - Dropdown select with options
- **Textarea** - Multi-line text input
- **Card** - Container component for content
- **Badge** - Status and priority indicators
- **Layout** - Main layout with navigation and sidebar

### Page Components
- **Login** - User authentication
- **Register** - User registration
- **Dashboard** - Overview with statistics
- **Tasks** - Task management interface
- **Users** - User management (Admin only)

## Features by Role

### Admin Dashboard
- View all users and their tasks
- Create, edit, and delete users
- Assign tasks to any user
- View comprehensive statistics
- Access to all system features

### User Dashboard
- View and manage own tasks only
- Create tasks for themselves
- Update task status and details
- View personal statistics
- Limited access to system features

## API Integration

The frontend integrates with the backend API through the `api.js` service:

- **Authentication** - Login, register, profile
- **Tasks** - CRUD operations with role-based access
- **Users** - Admin-only user management

## Styling

The application uses Tailwind CSS for styling with:
- Custom color palette
- Responsive design
- Component-based styling
- Dark mode support (ready for implementation)

## State Management

- **React Context** for authentication state
- **Local State** for component-specific data
- **React Hook Form** for form state management

## Security Features

- JWT token storage in localStorage
- Automatic token refresh
- Protected routes based on authentication and roles
- Input validation and sanitization
- CSRF protection through proper API calls

## Development

### Environment Variables
Create a `.env` file in the frontend directory:
```
VITE_API_URL=http://localhost:5000/api
```

### Code Style
- Use functional components with hooks
- Follow React best practices
- Use TypeScript for better type safety (optional)
- Implement proper error handling

### Testing
- Unit tests for components (recommended)
- Integration tests for API calls
- E2E tests for user workflows

## Deployment

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service

3. **Configure environment variables** for production

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Follow the existing code style
2. Add proper error handling
3. Test your changes
4. Update documentation if needed

## License

This project is licensed under the ISC License.
