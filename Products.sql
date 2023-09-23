use DB_Pedidos_entregas

select * from Producto


-- Insertar los 10 productos en la tabla Productos
INSERT INTO Producto (id, Codigo, Nombre, Descripcion, Marca, Categoria, CantidadDisponible, Habilitado, CantidadVentas, Iva, Precio)
VALUES
(2,'LAPTOP202', 'Portátil HP', 'Laptop de 15 pulgadas con procesador Intel Core i5.', 'HP', 'Electrónica', 30, 1, 20, 15.0, 699.99),
(3,'AURICULARES303', 'Auriculares inalámbricos', 'Auriculares Bluetooth con cancelación de ruido.', 'SoundMasters', 'Electrónica', 50, 1, 40, 10.0, 79.99),
(4,'ZAPATILLAS404', 'Zapatillas deportivas', 'Zapatillas deportivas para correr.', 'SportsTech', 'Calzado', 80, 1, 60, 12.0, 59.99),
(5,'LIBRO505', 'Libro "El Gran Gatsby"', 'Novela clásica escrita por F. Scott Fitzgerald.', 'Editorial XYZ', 'Libros', 20, 1, 10, 5.0, 12.99),
(6,'CELULAR606', 'Smartphone Samsung', 'Teléfono inteligente con pantalla AMOLED de 6.2 pulgadas.', 'Samsung', 'Electrónica', 60, 1, 45, 15.0, 299.99),
(7,'MOCHILA707', 'Mochila resistente', 'Mochila impermeable con múltiples compartimentos.', 'OutdoorGear', 'Accesorios', 40, 1, 25, 12.0, 39.99),
(8,'TELEVISOR808', 'Televisor 4K', 'Televisor LED de 55 pulgadas con resolución Ultra HD.', 'TechVision', 'Electrónica', 25, 1, 15, 15.0, 799.99),
(9,'SILLA909', 'Silla de oficina', 'Silla ergonómica ajustable con soporte lumbar.', 'ErgoSeating', 'Muebles', 35, 1, 30, 10.0, 129.99),
(10,'COCINA1010', 'Cocina eléctrica', 'Cocina de inducción con cuatro quemadores y temporizador.', 'HomeAppliances', 'Electrodomésticos', 15, 1, 12, 12.0, 499.99);

