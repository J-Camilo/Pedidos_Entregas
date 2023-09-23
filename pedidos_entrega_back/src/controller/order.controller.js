import { webConnection, sql } from "../database/conection";
import query from "../database/query"

//trae todos los pedido
export const getOrder = async (req, res) => {
    try {
        const pool = await webConnection();
        const result = await pool.request().query(query.getOrder);

        //api order
        res.json(result.recordset);
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en la consulta SQL');
    }
}

// crea un nuevo pedido
export const CreateOrder = async (req, res) => {
    let { NumeroOrden, TotalPrecio, TotalIva, Departamento, Ciudad, Barrio, DireccionEntrega, ClienteId, EmpleadoId, EntregadorId, Observacion } = req.body

    try {
        const pool = await webConnection();
        await pool
            .request()
            .input("NumeroOrden", sql.VarChar, NumeroOrden)
            .input("TotalPrecio", sql.Decimal, TotalPrecio)
            .input("TotalIva", sql.Decimal, TotalIva)
            .input("Departamento", sql.VarChar, Departamento)
            .input("Ciudad", sql.VarChar, Ciudad)
            .input("Barrio", sql.VarChar, Barrio)
            .input("DireccionEntrega", sql.VarChar, DireccionEntrega)
            .input("ClienteId", sql.Int, ClienteId)
            .input("EmpleadoId", sql.Int, EmpleadoId)
            .input("EntregadorId", sql.Int, EntregadorId)
            .input("Observacion", sql.Text, Observacion)
            .query(query.createNewOrder);

        res.json({ NumeroOrden, TotalPrecio, TotalIva, Departamento, Ciudad, Barrio, DireccionEntrega, ClienteId, EmpleadoId, EntregadorId, Observacion })

    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// optiene un pedido
export const IdgetOrder = async (req, res) => {
    const { id } = req.params;
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .input("Id", id)
            .query(query.IdOrder)

        res.send(result.recordset[0])
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// elimina un solo pedido
export const DeleteOrder = async (req, res) => {
    const { id } = req.params;
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .input("Id", id)
            .query(query.DeleteOrder)

        res.send("succes", 204)
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// contar los productos del pedido
export const CountController = async (req, res) => {
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .query(query.CountOrder)

        res.json(result.recordset[0][''])
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}


// actualizar cada pedido AFK
// export const UpdateOrder = async (req, res) => {
//     let {  NumeroOrden, TotalPrecio, TotalIva, Departamento, Ciudad, Barrio, DireccionEntrega, ClienteId, EmpleadoId, EntregadorId, Observacion  } = req.body
//     const { id } = req.params;
//     const pool = await webConnection();
//     await pool
//         .request()
//         .input("Id", sql.Int, id)
//         .input("NumeroOrden", sql.VarChar, NumeroOrden)
//         .input("TotalPrecio", sql.Decimal, TotalPrecio)
//         .input("TotalIva", sql.Decimal, TotalIva)
//         .input("Departamento", sql.VarChar, Departamento)
//         .input("Ciudad", sql.VarChar, Ciudad)
//         .input("Barrio", sql.VarChar, Barrio)
//         .input("DireccionEntrega", sql.VarChar, DireccionEntrega)
//         .input("ClienteId", sql.Int, ClienteId)
//         .input("EmpleadoId", sql.Int, EmpleadoId)
//         .input("EntregadorId", sql.Int, EntregadorId)
//         .input("Observacion", sql.Text, Observacion)
//         .query(query.UpdateOrder);
//     res.json({ NumeroOrden, TotalPrecio, TotalIva, Departamento, Ciudad, Barrio, DireccionEntrega, ClienteId, EmpleadoId, EntregadorId, Observacion });
// }
