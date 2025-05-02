import express from "express";
import {getUsers, getUsersById, setUser, updateUserById, deleteUsersById} from "../controllers/userController.js"

const router = express.Router(); // Creamos la aplicacion de routeo

//  Definimos las rutas
router.get('/', getUsers);
router.get('/:id', getUsersById);
router.post('/', setUser);
router.put('/:id', updateUserById);
router.delete('/:id', deleteUsersById);

export default router;