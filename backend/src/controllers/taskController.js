const Task = require("../models/Task");
const User = require("../models/User");
const { validationResult } = require("express-validator");

const createTask = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, description, status, priority, due_date, user_id } =
      req.body;
    const created_by = req.user.id;

    // Verify that the assigned user exists
    const assignedUser = await User.findById(user_id);
    if (!assignedUser) {
      return res.status(400).json({ message: "Assigned user not found" });
    }

    // Only admin can assign tasks to other users
    if (req.user.role !== "admin" && user_id !== req.user.id) {
      return res
        .status(403)
        .json({ message: "You can only assign tasks to yourself" });
    }

    const taskId = await Task.create({
      title,
      description,
      status: status || "pending",
      priority: priority || "medium",
      due_date,
      user_id,
      created_by,
    });

    const task = await Task.findById(taskId);
    res.status(201).json({
      message: "Task created successfully",
      task,
    });
  } catch (error) {
    console.error("Create task error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAllTasks = async (req, res) => {
  try {
    let tasks;

    // Admin can see all tasks, users can only see their own
    if (req.user.role === "admin") {
      tasks = await Task.findAll();
    } else {
      tasks = await Task.findByUserId(req.user.id);
    }

    res.json({ tasks });
  } catch (error) {
    console.error("Get all tasks error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Check if user has permission to view this task
    if (req.user.role !== "admin" && task.user_id !== req.user.id) {
      return res.status(403).json({ message: "Access denied" });
    }

    res.json({ task });
  } catch (error) {
    console.error("Get task by ID error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateTask = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { title, description, status, priority, due_date, user_id } =
      req.body;

    const existingTask = await Task.findById(id);
    if (!existingTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Check if user has permission to update this task
    if (req.user.role !== "admin" && existingTask.user_id !== req.user.id) {
      return res.status(403).json({ message: "Access denied" });
    }

    // Only admin can reassign tasks to other users
    if (req.user.role !== "admin" && user_id && user_id !== req.user.id) {
      return res
        .status(403)
        .json({ message: "You can only assign tasks to yourself" });
    }

    // Regular users cannot modify title and due_date
    const updateData = {
      description,
      status,
      priority,
      user_id: user_id || existingTask.user_id,
    };

    // Only admin can update title and due_date
    if (req.user.role === "admin") {
      updateData.title = title;
      updateData.due_date = due_date;
    } else {
      // For regular users, keep the original title and due_date
      updateData.title = existingTask.title;
      updateData.due_date = existingTask.due_date;
    }

    const success = await Task.update(id, updateData);

    if (!success) {
      return res.status(500).json({ message: "Failed to update task" });
    }

    const updatedTask = await Task.findById(id);
    res.json({
      message: "Task updated successfully",
      task: updatedTask,
    });
  } catch (error) {
    console.error("Update task error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Only admin can delete tasks
    if (req.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Only administrators can delete tasks" });
    }

    const success = await Task.delete(id);
    if (!success) {
      return res.status(500).json({ message: "Failed to delete task" });
    }

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Delete task error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getTasksByStatus = async (req, res) => {
  try {
    const { status } = req.params;
    let tasks;

    if (req.user.role === "admin") {
      tasks = await Task.getTasksByStatus(status);
    } else {
      const allUserTasks = await Task.findByUserId(req.user.id);
      tasks = allUserTasks.filter((task) => task.status === status);
    }

    res.json({ tasks });
  } catch (error) {
    console.error("Get tasks by status error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getTasksByPriority = async (req, res) => {
  try {
    const { priority } = req.params;
    let tasks;

    if (req.user.role === "admin") {
      tasks = await Task.getTasksByPriority(priority);
    } else {
      const allUserTasks = await Task.findByUserId(req.user.id);
      tasks = allUserTasks.filter((task) => task.priority === priority);
    }

    res.json({ tasks });
  } catch (error) {
    console.error("Get tasks by priority error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
  getTasksByStatus,
  getTasksByPriority,
};
