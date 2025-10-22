import Role from "../models/role.model.js";

// Create a new role (admin only)
export const createRole = async (req, res) => {
  try {
    const { name, description } = req.body;
    const role = await Role.create({ name, description });
    res.status(201).json({ success: true, data: role });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// List all roles
export const getRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json({ success: true, data: roles });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
