import { Request, Response } from 'express';
import { User, users } from '../Model/userModel';


export const getAllUsers = (req: Request, res: Response) => {
    res.json(users);
};

export const getUserById = (req: Request, res: Response) => {
        //ter o id do usuario
        const id = Number(req.params.id)
        //buscar o id dentro do array de usuarios
        const FoundUser = users.find(usuario => usuario.id === id)
        //se o usuario existir, retornar o usuario
        if(!FoundUser) return res.status(404).json({error: "User not found"})
        //se o usuario existir, retornar o usuario
        res.json(FoundUser);
}

export const createUser = (req: Request, res: Response) => {
    const { name, email } = req.body;
    const id = Date.now()
    const newUser: User = { id, name, email }
    users.push(newUser)
    res.status(201).json(newUser);
}

export const deleteUser = (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const foundUser = users.findIndex(u => u.id === id)
    if(foundUser === -1) return res.status(404).json({error: "User not found"})
    users.splice(foundUser, 1)
    res.status(204).send();
}

export const updateUser = (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const foundUser = users.findIndex(u => u.id === id)
    if(foundUser === -1) return res.status(404).json({error: "User not found"})
    const { name, email } = req.body
    users [foundUser] = {id, name, email}
    res.json(users[foundUser])
}