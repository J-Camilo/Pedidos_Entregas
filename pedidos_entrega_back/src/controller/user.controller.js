import { webConnection, sql } from "../database/conection";
import query from "../database/query"

//trae todos los clientes
export const getClient = async (req, res) => {
    try {
        const pool = await webConnection();
        const result = await pool.request().query(query.getClient);

        //api client
        res.json(result.recordset);
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en la consulta SQL');
    }
}

// crea un nuevo cliente
export const CreateClient = async (req, res) => {
    let { Nombre, Apellidos, Cedula, Direccion, Departamento, Municipio, Barrio, Activo, FechaNacimiento, Telefono } = req.body

    try {
        const pool = await webConnection();
        await pool
            .request()
            .input("Nombre", sql.VarChar, Nombre)
            .input("Apellidos", sql.VarChar, Apellidos)
            .input("Cedula", sql.VarChar, Cedula)
            .input("Direccion", sql.VarChar, Direccion)
            .input("Departamento", sql.VarChar, Departamento)
            .input("Municipio", sql.VarChar, Municipio)
            .input("Barrio", sql.VarChar, Barrio)
            .input("Activo", sql.Bit, Activo)
            .input("FechaNacimiento", sql.Date, FechaNacimiento)
            .input("Telefono", sql.VarChar, Telefono)
            .query(query.createNewClient);

        res.json({Nombre, Apellidos, Cedula, Direccion, Departamento, Municipio, Barrio, Activo, FechaNacimiento, Telefono})

    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// optiene un client
export const IdgetClient = async (req, res) => {
    const { id } = req.params;
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .input("Id", id)
            .query(query.IdClient)

        res.send(result.recordset[0])
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// elimina un solo producto
export const DeleteClientId = async (req, res) => {
    const { id } = req.params;
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .input("Id", id)
            .query(query.DeleteClient)

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
            .query(query.CountClient)

        res.json(result.recordset[0][''])
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}


// actualizar cada producto

export const UpdateClient = async (req, res) => {
    let { Nombre, Apellidos, Cedula, Direccion, Departamento, Municipio, Barrio, Activo, FechaNacimiento, Telefono } = req.body
    const { id } = req.params;
    const pool = await webConnection();
    await pool
        .request()
        .input("Id", sql.Int, id)
        .input("Nombre", sql.VarChar, Nombre)
        .input("Apellidos", sql.VarChar, Apellidos)
        .input("Cedula", sql.VarChar, Cedula)
        .input("Direccion", sql.VarChar, Direccion)
        .input("Departamento", sql.VarChar, Departamento)
        .input("Municipio", sql.VarChar, Municipio)
        .input("Barrio", sql.VarChar, Barrio)
        .input("Activo", sql.Bit, Activo)
        .input("FechaNacimiento", sql.Date, FechaNacimiento)
        .input("Telefono", sql.VarChar, Telefono)
        .query(query.UpdateClient);

    res.json(Nombre, Apellidos, Cedula, Direccion, Departamento, Municipio, Barrio, Activo, FechaNacimiento, Telefono);

}
