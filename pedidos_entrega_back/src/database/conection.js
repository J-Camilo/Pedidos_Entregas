import sql from 'mssql';

const dbSettings = ({
    user: "admin",
    password: "admin1234",
    server: "localhost",
    database: "DB_Pedidos_entregas",
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
})

export const webConnection = async() => {
    try {
        const pool = await sql.connect(dbSettings);
        return pool
    } catch (error) {
        console.error(error);
    }
};

export{sql};