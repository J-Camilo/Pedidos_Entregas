import { webConnection, sql } from "../database/conection";
import query from "../database/query"

//trae todos los carrito
export const getDetailCar = async (req, res) => {
    try {
        const pool = await webConnection();
        const result = await pool.request().query(query.getDetailcar);

        //api cardetails
        res.json(result.recordset);
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en la consulta SQL');
    }
} 

// crea un nuevo carrito
export const CreateDetailCar = async (req, res) => {
    let { CarritoId, ProductoId, Cantidad } = req.body

    try {
        const pool = await webConnection();
        await pool
            .request()
            .input("CarritoId", sql.Int, CarritoId)
            .input("ProductoId", sql.Int, ProductoId)
            .input("Cantidad", sql.Int, Cantidad)
            .query(query.createNewDetailcar);

        res.json({ CarritoId, ProductoId, Cantidad })

    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// optiene un carrito
export const IdgetDetailCar = async (req, res) => {
    const { id } = req.params;
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .input("Id", id)
            .query(query.IdDetailcar)

        res.send(result.recordset[0])
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// elimina un solo carrito
export const DeleteDetailCar = async (req, res) => {
    const { id } = req.params;
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .input("Id", id)
            .query(query.DeleteDetailcar)

        res.send("succes", 204)
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// contar los productos del carrito
export const CountController = async (req, res) => {
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .query(query.CountDetailcar)

        res.json(result.recordset[0][''])
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}


// actualizar cada usuario

export const UpdateDetailCar = async (req, res) => {
    let { CarritoId, ProductoId, Cantidad } = req.body
    const { id } = req.params;
    const pool = await webConnection();
    await pool
        .request()
        .input("Id", sql.Int, id)
        .input("CarritoId", sql.Int, CarritoId)
        .input("ProductoId", sql.Int, ProductoId)
        .input("Cantidad", sql.Int, Cantidad)
        .query(query.UpdateDetailcar);

    res.json({ CarritoId, ProductoId, Cantidad });
}
