import { response } from "express";
import UserManager from "../models/UserManager.js"; // Importamos el modelo

const userModel = new UserManager(); // Instanciamos en modelo

const getUsers = async(request, response) => {
    try {
        const users = await userModel.getUsers();
        response.status(200).json(users);

    } catch (error) {
        console.error({error});
        response.status(500).json({error: 'Error del servidor'});
    }
}

const setUser = async(request, response) => {
    try {
        const user = request.body
        const id = await userModel.setUser(user);

        response.status(202).json({msg: `Usuario Guardado correctamente ${id}`});
    } catch (error) {
        console.error({error});
        response.status(500).json({error: 'Error del servidor'});
    }

}

export {getUsers, setUser};