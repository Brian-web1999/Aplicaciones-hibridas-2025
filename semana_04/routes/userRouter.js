import express from "express";
import {getUsers, setUser} from "../controllers/userController.js"

const router = express.Router(); // Creamos la aplicacion de routeo

//  Definimos las rutas
router.get('/', getUsers);
router.post('/', setUser);

export default router;