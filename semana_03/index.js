import chalk from 'chalk';
import express from "express"; // importamos express despues de instalarlo


const port = 5000
const app = express(); // Lo ejecutamos express
let count = 0

const users = [
    {id:1, name: "Julia"},
    {id:2, name: "Mateo"},
    {id:3, name: "Manuel"},
]


//Ruta del servidor
app.get('/', (request, response) =>  {
    count++
    console.log(`Cliente ${count} conectado`)
    response.send('Hola desde Express')
})

const getUsers = (request, response) => {
    console.log('GET Users');


    response.json(users);
}

// Rutas de la API
app.get('/api/users', getUsers);

app.get('/api/users/:id', (request, response) => {
    const id = request.params.id
    console.log(id);
    const user = users.find(u => u.id == id)
    response.json(user);
})




app.listen(port, () => {
    console.log(chalk.blue(`Servidor Web en el puerto ${port}`));
})

