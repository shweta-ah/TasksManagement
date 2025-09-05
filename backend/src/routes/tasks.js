const express = require('express');
const { body } = require('express-validator');
const taskController = require('../controllers/taskController');
const { authenticateToken, requireUser } = require('../middleware/auth');

const router = express.Router();

// Validation middleware
const taskValidation = [
  body('title')
    .trim()
    .isLength({ min: 1, max: 255 })
    .withMessage('Title is required and must be less than 255 characters'),
  body('description')
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage('Description must be less than 1000 characters'),
  body('status')
    .optional()
    .isIn(['pending', 'in_progress', 'completed'])
    .withMessage('Status must be pending, in_progress, or completed'),
  body('priority')
    .optional()
    .isIn(['low', 'medium', 'high'])
    .withMessage('Priority must be low, medium, or high'),
  body('due_date')
    .optional()
    .isISO8601()
    .withMessage('Due date must be a valid date'),
  body('user_id')
    .optional()
    .isInt({ min: 1 })
    .withMessage('User ID must be a positive integer')
];

// All routes require authentication
router.use(authenticateToken);
router.use(requireUser);

// Routes
router.post('/', taskValidation, taskController.createTask);
router.get('/', taskController.getAllTasks);
router.get('/status/:status', taskController.getTasksByStatus);
router.get('/priority/:priority', taskController.getTasksByPriority);
router.get('/:id', taskController.getTaskById);
router.put('/:id', taskValidation, taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router; 