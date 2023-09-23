import { webConnection, sql } from "../database/conection";
import query from "../database/query"

//trae todos los detalle de pedido
export const getOrderDetail = async (req, res) => {
    try {
        const pool = await webConnection();
        const result = await pool.request().query(query.getOrderDetail);

        //api order
        res.json(result.recordset);
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en la consulta SQL');
    }
}

// crea un nuevo detalle de pedido
export const CreateOrderDetail = async (req, res) => {
    let { PedidoId, NombreProducto, DescripcionProducto, Precio, Iva, Cantidad, CodigoProducto, Marca, Categoria } = req.body

    try {
        const pool = await webConnection();
        await pool
            .request()
            .input("PedidoId", sql.Int, PedidoId)
            .input("NombreProducto", sql.VarChar, NombreProducto)
            .input("DescripcionProducto", sql.Text, DescripcionProducto)
            .input("Precio", sql.Decimal, Precio)
            .input("Iva", sql.Decimal, Iva)
            .input("Cantidad", sql.Int, Cantidad)
            .input("CodigoProducto", sql.VarChar, CodigoProducto)
            .input("Marca", sql.VarChar, Marca)
            .input("Categoria", sql.VarChar, Categoria)
            .query(query.createNewOrderDetail);

        res.json({ PedidoId, NombreProducto, DescripcionProducto, Precio, Iva, Cantidad, CodigoProducto, Marca, Categoria })

    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// optiene un detalle de pedido
export const IdgetOrderDetail = async (req, res) => {
    const { id } = req.params;
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .input("Id", id)
            .query(query.IdOrderDetail)

        res.send(result.recordset[0])
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// elimina un solo detalle de pedido
export const DeleteOrderDetail = async (req, res) => {
    const { id } = req.params;
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .input("Id", id)
            .query(query.DeleteOrderDetail)

        res.send("succes", 204)
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// contar los productos detalle de del pedido
export const CountController = async (req, res) => {
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .query(query.CountOrderDetail)

        res.json(result.recordset[0][''])
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}


// actualizar cada detalle de pedido
export const UpdateOrderDetail = async (req, res) => {
    let { PedidoId, NombreProducto, DescripcionProducto, Precio, Iva, Cantidad, CodigoProducto, Marca, Categoria } = req.body
    const { id } = req.params;
    const pool = await webConnection();
    await pool
        .request()
        .input("Id", sql.Int, id)
        .input("PedidoId", sql.Int, PedidoId)
        .input("NombreProducto", sql.VarChar, NombreProducto)
        .input("DescripcionProducto", sql.Text, DescripcionProducto)
        .input("Precio", sql.Decimal, Precio)
        .input("Iva", sql.Decimal, Iva)
        .input("Cantidad", sql.Int, Cantidad)
        .input("CodigoProducto", sql.VarChar, CodigoProducto)
        .input("Marca", sql.VarChar, Marca)
        .input("Categoria", sql.VarChar, Categoria)
        .query(query.UpdateOrderDetail);
    res.json({ PedidoId, NombreProducto, DescripcionProducto, Precio, Iva, Cantidad, CodigoProducto, Marca, Categoria });
}
