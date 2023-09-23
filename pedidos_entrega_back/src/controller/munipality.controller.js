import { webConnection, sql } from "../database/conection";
import query from "../database/query"

//trae todos los municipios
export const getMuni = async (req, res) => {
    try {
        const pool = await webConnection();
        const result = await pool.request().query(query.getMunicipality);

        //api car
        res.json(result.recordset);
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en la consulta SQL');
    }
}

// // crea un municipio
// export const CreateMuni = async (req, res) => {
//     let { CantidadPedidos, TotalPesos } = req.body

//     try {
//         const pool = await webConnection();
//         await pool
//             .request()

//             .query(query.createNewMunicipality);

//         res.json({ })

//     } catch (error) {
//         console.error('Error al ejecutar la consulta SQL:', error);
//         res.status(500).json('Error en el post SQL');
//     }
// }

// optiene un municipio
export const IdgetMuni = async (req, res) => {
    const { id } = req.params;
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .input("Id", id)
            .query(query.IdMunicipality)

        res.send(result.recordset[0])
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// elimina uno solo municipio
export const DeleteMuniId = async (req, res) => {
    const { id } = req.params;
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .input("Id", id)
            .query(query.DeleteMunicipality)

        res.send("succes", 204)
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}

// contar los municipios int
export const CountController = async (req, res) => {
    const pool = await webConnection();

    try {
        const result = await pool
            .request()
            .query(query.CountMunicipality)

        res.json(result.recordset[0][''])
    } catch (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        res.status(500).json('Error en el post SQL');
    }
}


// // actualizar cada municipio

// export const UpdateMuni = async (req, res) => {
//     let {  } = req.body
//     const { id } = req.params;

//     const pool = await webConnection();
//     await pool
//         .request()
//         .input("Id", sql.Int, id)


//         .query(query.UpdateMunicipality);

//     res.json({  });

// }
