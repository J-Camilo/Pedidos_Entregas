export default {

    //________________________ Consults _______________________________

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

    //order 

    //detailOrder






    //car
    getCar: 'SELECT * FROM Carrito',
    createNewCar: "INSERT INTO Carrito (ClienteId, FechaCreacion) VALUES (ClienteId, GETDATE())",
    IdCar: "SELECT * FROM Carrito WHERE Id = @id",
    CountCar: "SELECT COUNT(*) FROM Carrito", 
    UpdateCar: "UPDATE Carrito SET ClienteId = @ClienteId, FechaCreacion = @FechaCreacion WHERE Id = @id",
    DeleteCar: "DELETE FROM Carrito WHERE Id = @id",


    //detailcar
    getCar: 'SELECT * FROM DetalleCarrito',
    createNewCar: "INSERT INTO DetalleCarrito (CarritoId, ProductoId, Cantidad) VALUES (@CarritoId, @ProductoId, @Cantidad)",
    IdCar: "SELECT * FROM DetalleCarrito WHERE Id = @id",
    CountCar: "SELECT COUNT(*) FROM DetalleCarrito", 
    UpdateCar: "UPDATE DetalleCarrito SET CarritoId = @CarritoId, ProductoId = @ProductoId, Cantidad = @Cantidad WHERE Id = @id",
    DeleteCar: "DELETE FROM DetalleCarrito WHERE Id = @id",



    

    //User
    getUser: 'SELECT * FROM Usuario',
    createNewUser: "INSERT INTO Usuario (EmpleadoId, Usuario, Contraseña, FechaRegistro) VALUES (@EmpleadoId, @Usuario, @Contraseña, GETDATE())",
    IdUser: "SELECT * FROM Usuario WHERE Id = @id",
    CountUser: "SELECT COUNT(*) FROM Usuario", 
    UpdateUser: "UPDATE Usuario SET Nombre = EmpleadoId = @EmpleadoId, Usuario = @Usuario, Contraseña = @Contraseña, FechaRegistro = @FechaRegistro WHERE Id = @id",
    DeleteUser: "DELETE FROM Usuario WHERE Id = @id",
}