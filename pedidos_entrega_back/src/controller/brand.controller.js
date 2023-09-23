import { webConnection, sql } from "../database/conection";
import query from "../database/query";

//trae todas las Marca
export const getBrand = async (req, res) => {
    try {
        const pool = await webConnection();
        const result = await pool.request().query(query.getBrand);

        //api Marca 
        res.json(result.recordset);
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en la consulta SQL');
    }
}
 
// crea una nueva Marca
export const CreateBrand = async (req, res) => {
    let {Nombre} = req.body 
 
    try {
        const pool = await webConnection();
        await pool
            .request()
            .input("Nombre", sql.VarChar, Nombre)
            .query(query.createNewBrand);

        res.json({Nombre})

    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// optiene una Marca
export const IdgetBrand = async (req, res) => {
    const { id } = req.params;
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .input("Id", id) 
            .query(query.IdBrand)

        res.send(result.recordset[0])
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// elimina una sola Marca
export const DeleteBrandId = async (req, res) => {
    const { id } = req.params;
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .input("Id", id)
            .query(query.DeleteBrand)

        res.send("succes", 204)
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// contar las Marcas
export const CountController = async (req, res) => {
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .query(query.CountBrand)

        res.json(result.recordset[0][''])
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}


// actualizar cada Marca

export const UpdateBrand = async (req, res) => {
    let { Nombre } = req.body
    const { id } = req.params;
    const pool = await webConnection();
    await pool
        .request()
        .input("Id", sql.Int, id)
        .input("Nombre", sql.VarChar, Nombre)
        .query(query.UpdateBrand);

    res.json(Nombre);
}