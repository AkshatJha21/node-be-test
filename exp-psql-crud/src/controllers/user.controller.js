import pool from "../config/db.js";

export const createUser = async (req, res, next) => {
    try {
        const { name, email, age } = req.body;
        const result = await pool.query(
            `INSERT INTO users (name, email, age)
            VALUES ($1, $2, $3)
            RETURNING *`,
            [name, email, age]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

export const getAllUsers = async (req, res, next) => {
    try {
        const result = await pool.query("SELECT * FROM users");
        res.json(result.rows);
    } catch (error) {
        next(error);
    }
};  

export const getUserById = async (req, res, next) => {
    try {
        const result = await pool.query(
            "SELECT * FROM users WHERE id = $1",
            [req.params.id]
        );
        if (!result.rows.length) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

export const updateUser = async (req, res, next) => {
    try {
        const { name, email, age } = req.body;
        const result = await pool.query(
            `UPDATE users
            SET name = COALESCE($1, name),
                email = COALESCE($2, email),
                age = COALESCE($3, age)
            WHERE id = $4
            RETURNING *`,
            [name, email, age, req.params.id]
        );
        if (!result.rows.length) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

export const deleteUser = async (req, res, next) => {
    try {
        const result = await pool.query(
            "DELETE FROM users WHERE id = $1 RETURNING *",
            [req.params.id]
        );
        if (!result.rows.length) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        res.json({ message: "User deleted" });
    } catch (error) {
        next(error);
    }
}