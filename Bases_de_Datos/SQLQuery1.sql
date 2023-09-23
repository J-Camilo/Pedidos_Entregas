CREATE DATABASE DB_Pedidos_entregas;

use DB_Pedidos_entregas;

select * from Empleado


-- Tabla TipoEmpleado
CREATE TABLE TipoEmpleado (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Descripcion VARCHAR(255),
    Codigo VARCHAR(20)
);


-- Tabla Empleado
CREATE TABLE Empleado (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Nombre VARCHAR(255),
    Apellidos VARCHAR(255),
    Cedula VARCHAR(20),
    Direccion VARCHAR(255),
    Departamento VARCHAR(50),
    Municipio VARCHAR(50),
    Barrio VARCHAR(50),
    TipoEmpleadoId INT,
    Salario DECIMAL(10, 2),
    FOREIGN KEY (TipoEmpleadoId) REFERENCES TipoEmpleado(Id)
);

-- Tabla Cliente
CREATE TABLE Cliente (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Nombre VARCHAR(255),
    Apellidos VARCHAR(255),
    Cedula VARCHAR(20),
    Direccion VARCHAR(255),
    Departamento VARCHAR(50),
    Municipio VARCHAR(50),
    Barrio VARCHAR(50),
    Activo BIT,
    FechaNacimiento DATE,
    Telefono VARCHAR(20),
);

-- Tabla Categorías
CREATE TABLE Categorias (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Nombre VARCHAR(100)
);

-- Tabla Marcas
CREATE TABLE Marcas (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Nombre VARCHAR(100)
);



-- Tabla Producto
CREATE TABLE Producto (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Codigo VARCHAR(20),
    Nombre VARCHAR(255),
    Descripcion TEXT,
	Marca VARCHAR(100), 
    Categoria VARCHAR(100),
    CantidadDisponible INT,
    Habilitado BIT,
    CantidadVentas INT,
    Iva DECIMAL(5, 2),
    Precio DECIMAL(10, 2)
);


-- Tabla de Relación entre Marcas y Productos
CREATE TABLE MarcaProducto (
    MarcaId INT,
    ProductoId INT,
    PRIMARY KEY (MarcaId, ProductoId),
    FOREIGN KEY (MarcaId) REFERENCES Marcas(Id),
    FOREIGN KEY (ProductoId) REFERENCES Producto(Id)
);



-- Tabla de Relación entre Categorías y Productos
CREATE TABLE CategoriaProducto (
    CategoriaId INT,
    ProductoId INT,
    PRIMARY KEY (CategoriaId, ProductoId),
    FOREIGN KEY (CategoriaId) REFERENCES Categorias(Id),
    FOREIGN KEY (ProductoId) REFERENCES Producto(Id)
);

-- Tabla Carrito
CREATE TABLE Carrito (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    ClienteId INT,
    FechaCreacion DATE,
    FOREIGN KEY (ClienteId) REFERENCES Cliente(Id)
);

-- Tabla DetalleCarrito (para la relación muchos a muchos entre Carrito y Producto)
CREATE TABLE DetalleCarrito (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    CarritoId INT,
    ProductoId INT,
    Cantidad INT,
    FOREIGN KEY (CarritoId) REFERENCES Carrito(Id),
    FOREIGN KEY (ProductoId) REFERENCES Producto(Id)
);


-- Tabla Pedido
CREATE TABLE Pedido (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    NumeroOrden VARCHAR(20),
    FechaRegistro DATE,
    TotalPrecio DECIMAL(10, 2),
    TotalIva DECIMAL(10, 2),
    Departamento VARCHAR(50),
    Ciudad VARCHAR(50),
    Barrio VARCHAR(50),
    DireccionEntrega VARCHAR(255),
    ClienteId INT,
    EmpleadoId INT,
    EntregadorId INT,
    Observacion TEXT
);

-- Tabla DetallePedido
CREATE TABLE DetallePedido (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    PedidoId INT,
    NombreProducto VARCHAR(255),
    DescripcionProducto TEXT,
    Precio DECIMAL(10, 2),
    Iva DECIMAL(5, 2),
    Cantidad INT,
    CodigoProducto VARCHAR(20),
    Marca VARCHAR(100),
    Categoria VARCHAR(100),
    FOREIGN KEY (PedidoId) REFERENCES Pedido(Id)
);

-- Tabla EmpleadoPedido (Relación Muchos a Muchos entre Empleado y Pedido)
CREATE TABLE EmpleadoPedido (
    EmpleadoId INT,
    PedidoId INT,
    PRIMARY KEY (EmpleadoId, PedidoId),
    FOREIGN KEY (EmpleadoId) REFERENCES Empleado(Id),
    FOREIGN KEY (PedidoId) REFERENCES Pedido(Id)
);


-- Tabla ClientePedido (Relación Muchos a Muchos entre Cliente y Pedido)
CREATE TABLE ClientePedido (
    ClienteId INT,
    PedidoId INT,
    PRIMARY KEY (ClienteId, PedidoId),
    FOREIGN KEY (ClienteId) REFERENCES Cliente(Id),
    FOREIGN KEY (PedidoId) REFERENCES Pedido(Id)
);


-- Tabla DetalleProducto (para la relación muchos a muchos entre DetallePedido y Producto)
CREATE TABLE DetalleProducto (
    DetalleId INT,
    ProductoId INT,
    PRIMARY KEY (DetalleId, ProductoId),
    FOREIGN KEY (DetalleId) REFERENCES DetallePedido(Id),
    FOREIGN KEY (ProductoId) REFERENCES Producto(Id)
);


-- Tabla Usuario
CREATE TABLE Usuario (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    EmpleadoId INT,
    Usuario VARCHAR(50),
    Contraseña VARCHAR(255), -- Se debe almacenar encriptada
    FechaRegistro DATE,
    FOREIGN KEY (EmpleadoId) REFERENCES Empleado(Id)
);

-- Tabla Departamento
CREATE TABLE Departamento (
    Id  INT IDENTITY(1,1) PRIMARY KEY,
    Nombre VARCHAR(100)
);

-- Tabla Municipio
CREATE TABLE Municipio (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Nombre VARCHAR(100),
    DepartamentoId INT,
    FOREIGN KEY (DepartamentoId) REFERENCES Departamento(Id)
);


-- Tabla VentasDiarias
CREATE TABLE VentasDiarias (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    FechaVenta DATE,
    CantidadPedidos INT,
    TotalPesos DECIMAL(10, 2)
);

