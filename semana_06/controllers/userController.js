// import UserManager from "../models/UserManager.js"; // Importamos el modelo

// Importamos el modelo nuevo
import User from "../models/userModel.js"

const getUsers = async (request, response) => {
    try {
        const users = await User.find();
        response.status(200).json({ msg: 'ok', data: users });
    } catch (error) {
        console.error({ error });
        response.status(500).json({ msg: 'Error del servidor', data: [] });
    }
};

const getUsersById = async (request, response) => {
    try {
        const { id } = request.params;
        const user = await User.findById(id)

        if (user) {
            response.status(200).json({ msg: 'ok', data: user });
        } else {
            response.status(404).json({ msg: 'No se encontró el usuario', data: {} });
        }

    } catch (error) {
        console.error({ error });
        response.status(500).json({ msg: 'Error del servidor', data: {} });
    }
};

const setUser = async (request, response) => {
    try {
        const user = request.body;
        console.log({user})

        const userNew = new User(user);
        userNew.save();

        const id = userNew._id;

        response.status(201).json({ msg: `Usuario guardado correctamente`, id });
    } catch (error) {
        console.error({ error });
        response.status(500).json({ msg: 'Error del servidor' });
    }
};

// Corregir 
const deleteUsersById = async (request, response) => {
    try {
        const { id } = request.params;
        const status = await userModel.deleteUserById(id); // corregido nombre del método

        if (status) {
            response.status(200).json({ msg: 'Usuario eliminado', data: [] });
        } else {
            response.status(404).json({ msg: 'No se encontró el usuario', data: [] });
        }

    } catch (error) {
        console.error({ error });
        response.status(500).json({ msg: 'Error del servidor' });
    }
};

const updateUserById = async (request, response) => {
    try {
        const { id } = request.params;
        const user = request.body;

        const status = await userModel.updateUserById(id, user);

        if (status) {
            response.status(200).json({ msg: 'Usuario actualizado', data: user });
        } else {
            response.status(404).json({ msg: 'No se encontró el usuario', data: {} });
        }

    } catch (error) {
        console.error({ error });
        response.status(500).json({ msg: 'Error del servidor' });
    }
};

export { getUsers, getUsersById, setUser, updateUserById, deleteUsersById };
