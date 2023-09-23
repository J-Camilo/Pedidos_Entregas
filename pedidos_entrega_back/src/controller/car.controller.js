import { webConnection, sql } from "../database/conection";
import query from "../database/query"

//trae todos los carrito
export const getCar = async (req, res) => {
    try {
        const pool = await webConnection();
        const result = await pool.request().query(query.getCar);

        //api car
        res.json(result.recordset);
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en la consulta SQL');
    }
}

// crea un nuevo carrito
export const CreateCar = async (req, res) => {
    let { ClienteId } = req.body

    try { 
        const pool = await webConnection();
        await pool
            .request()
            .input("ClienteId", sql.Int, ClienteId)
            .query(query.createNewCar);

        res.json({ ClienteId }) 

    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// optiene un carrito
export const IdgetCar = async (req, res) => {
    const { id } = req.params;
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .input("Id", id)
            .query(query.IdCar)

        res.send(result.recordset[0])
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// elimina un solo carrito
export const DeleteCarId = async (req, res) => {
    const { id } = req.params;
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .input("Id", id)
            .query(query.DeleteCar)

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
            .query(query.CountCar)

        res.json(result.recordset[0][''])
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}


// actualizar cada usuario

export const UpdateCar = async (req, res) => {
    let { ClienteId } = req.body
    const { id } = req.params;
    const pool = await webConnection();
    await pool
        .request()
        .input("Id", sql.Int, id)
        .input("ClienteId", sql.Int, ClienteId)
        .query(query.UpdateCar);

    res.json(ClienteId);

}
