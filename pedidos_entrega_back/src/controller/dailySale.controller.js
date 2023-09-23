import { webConnection, sql } from "../database/conection";
import query from "../database/query"

//trae todos las ventas
export const getSales = async (req, res) => {
    try {
        const pool = await webConnection();
        const result = await pool.request().query(query.getSales);

        //api car
        res.json(result.recordset);
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en la consulta SQL');
    }
}

// crea una venta
export const CreateSales = async (req, res) => {
    let { CantidadPedidos, TotalPesos } = req.body

    try {
        const pool = await webConnection();
        await pool
            .request()
            .input("CantidadPedidos", sql.Int, CantidadPedidos)
            .input("TotalPesos", sql.Decimal, TotalPesos)
            .query(query.createNewSales);

        res.json({ CantidadPedidos, TotalPesos })

    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// optiene una ventas
export const IdgetSales = async (req, res) => {
    const { id } = req.params;
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .input("Id", id)
            .query(query.IdSales)

        res.send(result.recordset[0])
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// elimina una sola venta
export const DeleteSalesId = async (req, res) => {
    const { id } = req.params;
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .input("Id", id)
            .query(query.DeleteSales)

        res.send("succes", 204)
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// contar las ventas int
export const CountController = async (req, res) => {
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .query(query.CountSales)

        res.json(result.recordset[0][''])
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}


// actualizar cada venta

export const UpdateSales = async (req, res) => {
    let { CantidadPedidos, TotalPesos } = req.body
    const { id } = req.params;
    const pool = await webConnection();
    await pool
        .request()
        .input("Id", sql.Int, id)
        .input("CantidadPedidos", sql.Int, CantidadPedidos)
        .input("TotalPesos", sql.Decimal, TotalPesos)
        .query(query.UpdateSales);

    res.json({ CantidadPedidos, TotalPesos });

}
