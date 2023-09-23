import { webConnection, sql } from "../database/conection";
import query from "../database/query";

//trae todas las Categoria
export const getCategory = async (req, res) => {
    try {
        const pool = await webConnection();
        const result = await pool.request().query(query.getCategory);

        //api Categoria 
        res.json(result.recordset);
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en la consulta SQL');
    }
} 

// crea una nueva Categoria
export const CreateCategory = async (req, res) => {
    let {Nombre} = req.body 
 
    try {
        const pool = await webConnection();
        await pool
            .request()
            .input("Nombre", sql.VarChar, Nombre)
            .query(query.createNewCategory);

        res.json({Nombre})

    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// optiene una Categoria
export const IdgetCategory = async (req, res) => {
    const { id } = req.params;
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .input("Id", id) 
            .query(query.IdCategory)

        res.send(result.recordset[0])
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// elimina una sola Categoria
export const DeleteCategoryId = async (req, res) => {
    const { id } = req.params;
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .input("Id", id)
            .query(query.DeleteCategory)

        res.send("succes", 204)
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// contar las Categorias
export const CountController = async (req, res) => {
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .query(query.CountCategory)

        res.json(result.recordset[0][''])
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}


// actualizar cada Categoria

export const UpdateCategory = async (req, res) => {
    let { Nombre } = req.body
    const { id } = req.params;
    const pool = await webConnection();
    await pool
        .request()
        .input("Id", sql.Int, id)
        .input("Nombre", sql.VarChar, Nombre)
        .query(query.UpdateCategory);

    res.json(Nombre);
}