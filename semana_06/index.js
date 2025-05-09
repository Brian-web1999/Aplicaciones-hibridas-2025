import express from "express"; // Importamos express
import dotenv from "dotenv";
import routerAPI from "./routes/index.js"; 
import mongoose from "mongoose";



dotenv.config();
const port = process.env.PORT; // Creamos el puerto
const app = express(); // Creamos la aplicacion
const uri_db = process.env.URI_DB;


//  Conexion con DB
mongoose.connect(uri_db);
const db = mongoose.connection;

db.on('error', (error) => {
    console.error('Ups tenemos un error con la conexion con la DB');
    console.error({error})
});

db.once('open', () => {
    console.info('Conexion correcta')
})

// Middleware (Soporte para JSON)
app.use( express.json() );

app.use(express.static('public')) // Directorio de acceso publico de archivos estaticos
app.get('/', (request, response) => {
    response.send('<h1> Home </h1>');
})

// Llamamos a routerAPI
routerAPI(app);

app.listen(port, () =>{
    console.info(`Servidor en el puerto ${port}`);
}) // Para que me escuche el servidor
