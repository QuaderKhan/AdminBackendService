import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import Role from "../models/role.model.js";

export const register = async (req, res) => {
    try {
        const { name, email, password, roleId } = req.body;

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "Email already in use" });
        }

        // Optional: validate role exists
        const role = await Role.findById(roleId);
        if (!role) return res.status(400).json({ success: false, message: "Invalid role" });

        const user = await User.create({ name, email, password });

        res.status(201).json({
            success: true,
            data: { id: user._id, name: user.name, email: user.email },
        });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check user
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ success: false, message: "Invalid credentials" });

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ success: false, message: "Invalid credentials" });

        // Generate JWT
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({
            success: true,
            token,
            data: { id: user._id, name: user.name, email: user.email },
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
