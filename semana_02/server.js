const http = require('http');
const url = require('url');
const { ProductManager } = require('./ProductManager.js');

const port = 3000;
const admin = new ProductManager();

// Creamos el servidor
const server = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const method = req.method;
    let status = 200;
    let contentType = 'text/html';
    let body = '';

    // Ruta principal
    if (pathname === '/' && method === 'GET') {
        body = '<h1>Bienvenido al servidor de productos</h1>';
    
    // Ruta /products → muestra lista de productos
    } else if (pathname === '/products' && method === 'GET') {
        contentType = 'application/json';
        const products = await admin.getProducts();
        body = JSON.stringify(products || []);

    // Ruta /products/:id → muestra un producto específico
    } else if (pathname.startsWith('/products/') && method === 'GET') {
        const id = pathname.split('/')[2];
        const product = await admin.getProductById(id);
        contentType = 'application/json';
        
        if (product && product.id) {
            body = JSON.stringify(product);
        } else {
            status = 404;
            body = JSON.stringify({ error: 'Producto no encontrado' });
        }

    // Ruta no encontrada
    } else {
        status = 404;
        body = '<h1>Error 404 | Página no encontrada</h1>';
    }

    res.writeHead(status, { 'Content-Type': contentType });
    res.end(body);
});

server.listen(port, () => {
    console.log(`Servidor web en ejecución en http://localhost:${port}`);
});
