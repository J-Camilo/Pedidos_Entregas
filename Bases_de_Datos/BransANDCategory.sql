use DB_Pedidos_entregas

-- Inserción de datos en la tabla Categoria
INSERT INTO Categorias (Nombre)
VALUES
    ('Electrónica'),
    ('Ropa'),
    ('Alimentos');

-- Inserción de datos en la tabla Marca
INSERT INTO Marcas (Nombre)
VALUES
    ('Sony'),
    ('Nike'),
    ('Nestlé');


INSERT INTO Departamento(Nombre)
VALUES
    ('Departamento1'),
    ('Departamento2'),
    ('Departamento3'),
    ('Departamento4'),
    ('Departamento5');


INSERT INTO Municipio (Nombre, DepartamentoId)
VALUES
    ('Municipio1', 1),
    ('Municipio2', 2),
    ('Municipio3', 3),
    ('Municipio4', 4),
    ('Municipio5', 5);
