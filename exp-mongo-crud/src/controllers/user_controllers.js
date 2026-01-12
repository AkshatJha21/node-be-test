import user_model from "../models/user_model.js";

export const createUser = async (req, res, next) => {
    try {
        const user = await user_model.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

export const getUsers = async (req, res, next) => {
    try {
        const users = await user_model.find();
        res.json(users);
    } catch (error) {
        next(error);
    }
};

export const getUserById = async (req, res, next) => {
    try {
        const user = await user_model.findById(req.params.id);
        if (!user) return res.status(404).json({
            message: "User not found"
        });
        res.json(user);
    } catch (error) {
        next(error);
    }
};

export const updateUser = async (req, res, next) => {
    try {
        const user = await user_model.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).json({
            message: "User not found"
        });
        res.json(user);
    } catch (error) {
        next(error);
    }
};

export const deleteUser = async (req, res, next) => {
    try {
        const user = await user_model.findByIdAndDelete(req.params.id);
        if (!user) res.status(404).json({
            message: "User not found"
        });
        res.json({
            message: "User deleted"
        });
    } catch (error) {
        next(error);
    }
};