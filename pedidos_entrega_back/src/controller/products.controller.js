import { webConnection, sql } from "../database/conection";
import query from "../database/query"

//trae todos los productos
export const getProducts = async (req, res) => {
    try {
        const pool = await webConnection();
        const result = await pool.request().query(query.getProducts);

        //api products 
        res.json(result.recordset);
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en la consulta SQL');
    }
}

// crea un nuevo producto
export const CreateProducts = async (req, res) => {
    let { id, Codigo, Nombre, Descripcion, Marca, Categoria, CantidadDisponible, Habilitado, CantidadVentas, Iva, Precio } = req.body

    try {
        const pool = await webConnection();
        await pool
            .request()
            .input("id", sql.Int, id)
            .input("Codigo", sql.VarChar, Codigo)
            .input("Nombre", sql.VarChar, Nombre)
            .input("Descripcion", sql.Text, Descripcion)
            .input("Marca", sql.Text, Marca)
            .input("Categoria", sql.Text, Categoria)
            .input("CantidadDisponible", sql.Int, CantidadDisponible)
            .input("Habilitado", sql.Bit, Habilitado)
            .input("CantidadVentas", sql.Int, CantidadVentas)
            .input("Iva", sql.Decimal, Iva)
            .input("Precio", sql.Decimal, Precio)
            .query(query.createNewProduct);

        res.json({ id, Codigo, Nombre, Descripcion, Marca, Categoria, CantidadDisponible, Habilitado, CantidadVentas, Iva, Precio })

    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// optiene un producto
export const IdgetProducts = async (req, res) => {
    const { id } = req.params;
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .input("Id", id)
            .query(query.IdProduct)

        res.send(result.recordset[0])
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// elimina un solo producto
export const DeleteProductId = async (req, res) => {
    const { id } = req.params;
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .input("Id", id)
            .query(query.DeleteProduct)

        res.send("succes", 204)
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// contar los productos
export const CountController = async (req, res) => {
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .query(query.CountProduct)

        res.json(result.recordset[0][''])
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}


// actualizar cada producto

export const UpdateProduct = async (req, res) => {
    let { Codigo, Nombre, Descripcion, Marca, Categoria, CantidadDisponible, Habilitado, CantidadVentas, Iva, Precio } = req.body
    const { id } = req.params;
    const pool = await webConnection();
    await pool
        .request()
        .input("Id", sql.Int, id)
        .input("Codigo", sql.VarChar, Codigo)
        .input("Nombre", sql.VarChar, Nombre)
        .input("Descripcion", sql.Text, Descripcion)
        .input("Marca", sql.VarChar, Marca)
        .input("Categoria", sql.VarChar, Categoria)
        .input("CantidadDisponible", sql.Int, CantidadDisponible)
        .input("Habilitado", sql.Bit, Habilitado)
        .input("CantidadVentas", sql.Int, CantidadVentas)
        .input("Iva", sql.Decimal, Iva)
        .input("Precio", sql.Decimal, Precio)
        .query(query.UpdateProduct);

    res.json( Codigo, Nombre, Descripcion, Marca, Categoria, CantidadDisponible, Habilitado, CantidadVentas, Iva, Precio );

    // try {


    // } catch (error) {
    //     console.error('Error al ejecutar la consulta SQL:', error);
    //     res.status(500).json('Error en el post SQL');
    // }
}
