// routes/index.js
module.exports = app => {
    require('./carrito.routes')(app);
    require('./categoriaProducto.routes')(app);
    require('./estadoPedido.routes')(app);
    require('./inventario.routes')(app);
    require('./miembro.routes')(app);
    require('./pedido.routes')(app);
    require('./productoPedido.routes')(app);
    require('./tipoCuenta.routes')(app);
    require('./ubicacion.routes')(app);
};
