const { pool } = require('../config/database');

class Task {
  static async create(taskData) {
    const { title, description, status, priority, due_date, user_id, created_by } = taskData;
    
    const [result] = await pool.execute(
      `INSERT INTO tasks (title, description, status, priority, due_date, user_id, created_by) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [title, description, status, priority, due_date, user_id, created_by]
    );
    
    return result.insertId;
  }

  static async findById(id) {
    const [rows] = await pool.execute(`
      SELECT t.*, u.username as assigned_user_name, c.username as created_by_name
      FROM tasks t
      JOIN users u ON t.user_id = u.id
      JOIN users c ON t.created_by = c.id
      WHERE t.id = ?
    `, [id]);
    return rows[0];
  }

  static async findByUserId(userId) {
    const [rows] = await pool.execute(`
      SELECT t.*, u.username as assigned_user_name, c.username as created_by_name
      FROM tasks t
      JOIN users u ON t.user_id = u.id
      JOIN users c ON t.created_by = c.id
      WHERE t.user_id = ?
      ORDER BY t.created_at DESC
    `, [userId]);
    return rows;
  }

  static async findAll() {
    const [rows] = await pool.execute(`
      SELECT t.*, u.username as assigned_user_name, c.username as created_by_name
      FROM tasks t
      JOIN users u ON t.user_id = u.id
      JOIN users c ON t.created_by = c.id
      ORDER BY t.created_at DESC
    `);
    return rows;
  }

  static async update(id, updateData) {
    const { title, description, status, priority, due_date, user_id } = updateData;
    const [result] = await pool.execute(
      `UPDATE tasks SET title = ?, description = ?, status = ?, priority = ?, due_date = ?, user_id = ?
       WHERE id = ?`,
      [title, description, status, priority, due_date, user_id, id]
    );
    return result.affectedRows > 0;
  }

  static async delete(id) {
    const [result] = await pool.execute(
      'DELETE FROM tasks WHERE id = ?',
      [id]
    );
    return result.affectedRows > 0;
  }

  static async getTasksByStatus(status) {
    const [rows] = await pool.execute(`
      SELECT t.*, u.username as assigned_user_name, c.username as created_by_name
      FROM tasks t
      JOIN users u ON t.user_id = u.id
      JOIN users c ON t.created_by = c.id
      WHERE t.status = ?
      ORDER BY t.created_at DESC
    `, [status]);
    return rows;
  }

  static async getTasksByPriority(priority) {
    const [rows] = await pool.execute(`
      SELECT t.*, u.username as assigned_user_name, c.username as created_by_name
      FROM tasks t
      JOIN users u ON t.user_id = u.id
      JOIN users c ON t.created_by = c.id
      WHERE t.priority = ?
      ORDER BY t.created_at DESC
    `, [priority]);
    return rows;
  }
}

module.exports = Task; 