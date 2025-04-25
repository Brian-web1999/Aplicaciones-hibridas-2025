import chalk from 'chalk';
import express, { response } from "express"; // importamos express despues de instalarlo
import UserManager from './UserManager.js';


const port = 5000
const app = express(); // Lo ejecutamos express
app.use(express.json()) // mildware
let count = 0
const admUser = new UserManager();


//Ruta del servidor
app.get('/', (request, response) =>  {
    count++
    console.log(`Cliente ${count} conectado`)
    response.send('Hola desde Express')
})

const getUsers = async (request, response) => {
    console.log('GET Users');
    const users = await admUser.getUsers();
    response.json({msg:'Ok', data: users});
}

// Rutas de la API
app.get('/api/users', getUsers);

app.get('/api/users/:id', async (request, response) => {
    const id = request.params.id
    // console.log(id);
    const user = await admUser.getUserById(id);
    if(user){
       response.json({
         msg:'Ok',
         data: [user]
        })
    } else {
        response.status(404).json({msg:'Usuario no encontrado', data: []});
    }
    response.json(user);
})

app.post('/api/users', async (request, response) => {
    try {
        // TODO: Validar los datos
        const user = await request.body;
        const id = await admUser.setUser(user);
        response.status(200).json({
            msg: "Usuario guardado correctamente",
            data: { id }
        })

    } catch (error) {
        console.error(error)
        response.status(500).json({
            msg:"Error del servidor: No se pudo guardar el usuario",
            data: { id }
        })
    }
});


app.delete('/api/users/:id', async(request, response) => {
    const { id } = request.params
    const status = await admUser.deleteUserById(id);
    if(status){
       response.json({
         msg:'Usuario eliminado',
         data: []
        })
    } else {
        response.status(404).json({msg:'No se encontro el Usuario', data: []});
    }
})

app.put('/api/users/:id', async (request, response) => {
    const {id} = request.params;
    const user = request.body;
    const status = await admUser.updateUserById(id, user)
    if(status){
        response.json({
          msg:'Usuario actualizado',
          data: []
         })
     } else {
         response.status(404).json({msg:'No se encontro el Usuario para Actualizar', data: []});
     }
})


app.listen(port, () => {
    console.log(chalk.blue(`Servidor Web en el puerto ${port}`));
})

