import { webConnection, sql } from "../database/conection";
import query from "../database/query"

//trae todos los empleados
export const getWorkers = async (req, res) => {
    try {
        const pool = await webConnection();
        const result = await pool.request().query(query.getWorkers);

        //api products 
        res.json(result.recordset);
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en la consulta SQL');
    }
}

// crea un nuevo empleados 
export const CreateWorkers = async (req, res) => {
    let {Nombre, Apellidos, Cedula, Direccion, Departamento, Municipio, Barrio, TipoEmpleadoId, Salario } = req.body

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
            .input("TipoEmpleadoId", sql.Int, TipoEmpleadoId)
            .input("Salario", sql.Decimal, Salario)
            .query(query.createNewWorkers);

        res.json({ Nombre, Apellidos, Cedula, Direccion, Departamento, Municipio, Barrio, TipoEmpleadoId, Salario })
 
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// optiene un empleado
export const IdgetWorkers = async (req, res) => {
    const { id } = req.params;
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .input("Id", id)
            .query(query.IdWorkers)

        res.send(result.recordset[0])
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// elimina un solo empleado
export const DeleteWorkersId = async (req, res) => {
    const { id } = req.params;
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .input("Id", id)
            .query(query.DeleteWorkers)

        res.send("succes", 204)
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// contar los empleados
export const CountController = async (req, res) => {
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .query(query.CountWorkers)

        res.json(result.recordset[0][''])
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}


// actualizar cada producto

export const UpdateWorkers = async (req, res) => {
    let { Nombre, Apellidos, Cedula, Direccion, Departamento, Municipio, Barrio, TipoEmpleadoId, Salario } = req.body
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
        .input("TipoEmpleadoId", sql.Int, TipoEmpleadoId)
        .input("Salario", sql.Decimal, Salario)
        .query(query.UpdateWorkers);

    res.json(  Nombre, Apellidos, Cedula, Direccion, Departamento, Municipio, Barrio, TipoEmpleadoId, Salario );
 
}