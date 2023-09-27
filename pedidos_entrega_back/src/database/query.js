export default {

    //____________________________ Consults ________________________________________

    //products
    getProducts: 'SELECT * FROM Producto',
    createNewProduct: "INSERT INTO Producto (id, Codigo, Nombre, Descripcion, Marca, Categoria, CantidadDisponible, Habilitado, CantidadVentas, Iva, Precio ) VALUES (@id, @Codigo, @Nombre, @Descripcion, @Marca, @Categoria, @CantidadDisponible, @Habilitado, @CantidadVentas, @Iva, @Precio )",
    IdProduct: "SELECT * FROM Producto WHERE Id = @id",
    DeleteProduct: "DELETE FROM Producto WHERE Id = @id",
    CountProduct: "SELECT COUNT(*) FROM Producto",
    UpdateProduct: "UPDATE Producto SET  Codigo = @Codigo, Nombre = @Nombre, Descripcion = @Descripcion, Marca = @Marca, Categoria = @Categoria, CantidadDisponible = @CantidadDisponible, Habilitado = @Habilitado,  CantidadVentas = @CantidadVentas, Iva = @Iva, Precio = @Precio WHERE Id = @id",

    //category
    getCategory: 'SELECT * FROM Categorias',
    createNewCategory: "INSERT INTO Categorias (Nombre) VALUES (@Nombre)",
    IdCategory: "SELECT * FROM Categorias WHERE Id = @id",
    CountCategory: "SELECT COUNT(*) FROM Categorias",
    UpdateCategory: "UPDATE Categorias SET Nombre = @Nombre WHERE Id = @id",
    DeleteCategory: "DELETE FROM Categorias WHERE Id = @id",

    //brand
    getBrand: 'SELECT * FROM Marcas',
    createNewBrand: "INSERT INTO Marcas (Nombre) VALUES (@Nombre)",
    IdBrand: "SELECT * FROM Marcas WHERE Id = @id",
    CountBrand: "SELECT COUNT(*) FROM Marcas",
    UpdateBrand: "UPDATE Marcas SET Nombre = @Nombre WHERE Id = @id",
    DeleteBrand: "DELETE FROM Marcas WHERE Id = @id",

    //client
    getClient: 'SELECT * FROM Cliente',
    createNewClient: "INSERT INTO Cliente (Nombre, Apellidos, Cedula, Direccion, Departamento, Municipio, Barrio, Activo, FechaNacimiento, Telefono) VALUES (@Nombre, @Apellidos, @Cedula, @Direccion, @Departamento, @Municipio, @Barrio, @Activo, @FechaNacimiento, @Telefono)",
    IdClient: "SELECT * FROM Cliente WHERE Id = @id",
    CountClient: "SELECT COUNT(*) FROM Empleado",
    UpdateClient: "UPDATE Cliente SET Nombre = @Nombre, Apellidos = @Apellidos, Cedula = @Cedula, Direccion = @Direccion, Departamento = @Departamento, Municipio = @Municipio, Barrio = @Barrio, Activo = @Activo, FechaNacimiento = @FechaNacimiento, Telefono = @Telefono WHERE Id = @id",
    DeleteClient: "DELETE FROM Cliente WHERE Id = @id",

    //workers
    getWorkers: 'SELECT * FROM Empleado',
    createNewWorkers: "INSERT INTO Empleado (Nombre, Apellidos, Cedula, Direccion, Departamento, Municipio, Barrio, TipoEmpleadoId, Salario) VALUES (@Nombre, @Apellidos, @Cedula, @Direccion, @Departamento, @Municipio, @Barrio, @TipoEmpleadoId, @Salario)",
    IdWorkers: "SELECT * FROM Empleado WHERE Id = @id",
    CountWorkers: "SELECT COUNT(*) FROM Empleado",
    UpdateWorkers: "UPDATE Empleado SET Nombre = @Nombre, Apellidos = @Apellidos, Cedula = @Cedula, Direccion = @Direccion, Departamento = @Departamento, Municipio = @Municipio, Barrio = @Barrio, TipoEmpleadoId = @TipoEmpleadoId, Salario = @Salario WHERE Id = @id",
    DeleteWorkers: "DELETE FROM Empleado WHERE Id = @id",

    //User
    getUser: 'SELECT * FROM Usuario',
    createNewUser: "INSERT INTO Usuario (EmpleadoId, Usuario, Contraseña, FechaRegistro) VALUES (@EmpleadoId, @Usuario, @Contraseña, GETDATE())",
    IdUser: "SELECT * FROM Usuario WHERE Id = @id",
    CountUser: "SELECT COUNT(*) FROM Usuario",
    UpdateUser: "UPDATE Usuario SET  EmpleadoId = @EmpleadoId, Usuario = @Usuario, Contraseña = @Contraseña WHERE Id = @id",
    DeleteUser: "DELETE FROM Usuario WHERE Id = @id",

    //car
    getCar: 'SELECT * FROM Carrito',
    createNewCar: "INSERT INTO Carrito (ClienteId, FechaCreacion) VALUES (@ClienteId, GETDATE())",
    IdCar: "SELECT * FROM Carrito WHERE Id = @id",
    CountCar: "SELECT COUNT(*) FROM Carrito",
    UpdateCar: "UPDATE Carrito SET ClienteId = @ClienteId WHERE Id = @id",
    DeleteCar: "DELETE FROM Carrito WHERE Id = @id", 

    //detailcar
    getDetailcar: 'SELECT * FROM DetalleCarrito',
    createNewDetailcar: "INSERT INTO DetalleCarrito (CarritoId, ProductoId, Cantidad) VALUES (@CarritoId, @ProductoId, @Cantidad)",
    IdDetailcar: "SELECT * FROM DetalleCarrito WHERE Id = @id",
    CountDetailcar: "SELECT COUNT(*) FROM DetalleCarrito",
    UpdateDetailcar: "UPDATE DetalleCarrito SET CarritoId = @CarritoId, ProductoId = @ProductoId, Cantidad = @Cantidad WHERE Id = @id",
    DeleteDetailcar: "DELETE FROM DetalleCarrito WHERE Id = @id",

    //order 
    getOrder: 'SELECT * FROM Pedido',
    createNewOrder: "INSERT INTO Pedido ( NumeroOrden, FechaRegistro, TotalPrecio, TotalIva, Departamento, Ciudad, Barrio, DireccionEntrega, ClienteId, EmpleadoId,  EntregadorId, Observacion) VALUES (@NumeroOrden, GETDATE(), @TotalPrecio, @TotalIva, @Departamento, @Ciudad, @Barrio, @DireccionEntrega, @ClienteId, @EmpleadoId,  @EntregadorId, @Observacion)",
    IdOrder: "SELECT * FROM Pedido WHERE Id = @id",
    CountOrder: "SELECT COUNT(*) FROM Pedido",
    UpdateOrder: "UPDATE Pedido SET NumeroOrden = @NumeroOrden, TotalPrecio = @TotalPrecio, TotalIva = @TotalIva, Departamento = @Departamento, Ciudad = @Ciudad, Barrio = @Barrio, DireccionEntrega = @DireccionEntrega, ClienteId = @ClienteId,  EmpleadoId = @EmpleadoId,  EntregadorId = @EntregadorId, Observacion = @Observacion WHERE Id = @id",
    DeleteOrder: "DELETE FROM Pedido WHERE Id = @id",

    //detailOrder
    getOrderDetail: 'SELECT * FROM DetallePedido',
    createNewOrderDetail: "INSERT INTO DetallePedido (PedidoId, NombreProducto, DescripcionProducto, Precio, Iva, Cantidad, CodigoProducto, Marca, Categoria) VALUES (@PedidoId, @NombreProducto, @DescripcionProducto, @Precio, @Iva, @Cantidad, @CodigoProducto, @Marca, @Categoria)",
    IdOrderDetail: "SELECT * FROM DetallePedido WHERE Id = @id",
    CountOrderDetail: "SELECT COUNT(*) FROM DetallePedido",
    UpdateOrderDetail: "UPDATE DetallePedido SET PedidoId = @PedidoId, NombreProducto = @NombreProducto, DescripcionProducto = @DescripcionProducto, Precio = @Precio, Iva = @Iva, Cantidad = @Cantidad, CodigoProducto = @CodigoProducto, Marca = @Marca, Categoria = @Categoria WHERE Id = @id",
    DeleteOrderDetail: "DELETE FROM DetallePedido WHERE Id = @id",

    //sales
    getSales: 'SELECT * FROM VentasDiarias',
    createNewSales: "INSERT INTO VentasDiarias (FechaVenta, CantidadPedidos, TotalPesos) VALUES (GETDATE(), @CantidadPedidos, @TotalPesos)",
    IdSales: "SELECT * FROM VentasDiarias WHERE Id = @id",
    CountSales: "SELECT COUNT(*) FROM VentasDiarias",
    UpdateSales: "UPDATE VentasDiarias SET CantidadPedidos = @CantidadPedidos, TotalPesos = @TotalPesos WHERE Id = @id",
    DeleteSales: "DELETE FROM VentasDiarias WHERE Id = @id",


    //municipality
    getMunicipality: 'SELECT * FROM Municipio',
    // createNewSales: Unused
    IdMunicipality: "SELECT * FROM Municipio WHERE Id = @id",
    CountMunicipality: "SELECT COUNT(*) FROM Municipio",
    // UpdateSales: Unused
    // DeleteMunicipality: Unused

    //departament
    getDep: 'SELECT * FROM Departamento',
    // createNewSales: Unused
    IdDep: "SELECT * FROM Departamento WHERE Id = @id",
    CountDep: "SELECT COUNT(*) FROM Departamento",
    // UpdateSales: Unused
    // DeleteSales: Unused
}