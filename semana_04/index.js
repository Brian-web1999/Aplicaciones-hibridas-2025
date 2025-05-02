import express from "express"; // Importamos express
import dotenv from "dotenv";
import routerAPI from "./routes/index.js"; // ✅ Esto es lo correcto

dotenv.config();
const port = process.env.PORT; // Creamos el puerto
const app = express(); // Creamos la aplicacion
// Middleware (Soporte para JSON)
app.use( express.json() );

app.get('/', (request, response) => {
    response.send('<h1> Home </h1>');
})

// Llamamos a routerAPI
routerAPI(app);

app.listen(port, () =>{
    console.info(`Servidor en el puerto ${port}`);
}) // Para que me escuche el servidor
