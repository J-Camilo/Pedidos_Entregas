import { webConnection, sql } from "../database/conection";
import query from "../database/query"

//trae todos los usuario
export const getUser = async (req, res) => {
    try {
        const pool = await webConnection();
        const result = await pool.request().query(query.getUser);

        //api user
        res.json(result.recordset);
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en la consulta SQL');
    }
}

// crea un nuevo usuario
export const CreateUser = async (req, res) => {
    let {EmpleadoId, Usuario, Contraseña} = req.body

    try {
        const pool = await webConnection();
        await pool
            .request()
            .input("EmpleadoId", sql.Int, EmpleadoId)
            .input("Usuario", sql.VarChar, Usuario)
            .input("Contraseña", sql.VarChar, Contraseña)
            .query(query.createNewUser);

        res.json({EmpleadoId, Usuario, Contraseña})

    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// optiene un Usuario
export const IdgetUser = async (req, res) => {
    const { id } = req.params;
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .input("Id", id)
            .query(query.IdUser)

        res.send(result.recordset[0])
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// elimina un solo usuario
export const DeleteUserId = async (req, res) => {
    const { id } = req.params;
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .input("Id", id)
            .query(query.DeleteUser)

        res.send("succes", 204)
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// contar los usuario
export const CountController = async (req, res) => {
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .query(query.CountUser)

        res.json(result.recordset[0][''])
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}


// actualizar cada usuario

export const UpdateUser = async (req, res) => {
    let { EmpleadoId, Usuario, Contraseña } = req.body
    const { id } = req.params;
    const pool = await webConnection();
    await pool
        .request()
        .input("Id", sql.Int, id)
        .input("EmpleadoId", sql.Int, EmpleadoId)
        .input("Usuario", sql.VarChar, Usuario)
        .input("Contraseña", sql.VarChar, Contraseña)
        .query(query.UpdateUser);

    res.json(EmpleadoId, Usuario, Contraseña);

}
