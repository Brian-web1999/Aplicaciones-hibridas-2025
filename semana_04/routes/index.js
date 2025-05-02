import usersRouter from "./userRouter.js";

function routerAPI(app) {
    // Definimos las rutas
    app.use('/api/users', usersRouter);
    // app.use('/api/products', prodcutsRouter);
}

export default routerAPI;