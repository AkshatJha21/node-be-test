import { users } from "../data/users.js";

export const getUsers = (req, res) => {
    res.json(users);
};

export const createUser = (req, res) => {
    const user = { id: Date.now(), ...req.body };
    users.push(user);
    res.status(201).json(user);
}