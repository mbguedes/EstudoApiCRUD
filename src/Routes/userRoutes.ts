import express from 'express';
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../Controller/userController';


export const userRoutes = express.Router();


userRoutes.get('/', getAllUsers)
userRoutes.get('/:id', getUserById)
userRoutes.post('/', createUser)
userRoutes.delete('/:id', deleteUser)
userRoutes.put('/:id', updateUser)

