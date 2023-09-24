import jwt from 'jsonwebtoken';

export function verifyToken(req, res, next) {

    // Obtén el token del encabezado de autorización
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        // El token está en el formato "Bearer <token>"
        const token = bearerHeader.split(' ')[1];

        jwt.verify(token, 'secretKey', (error, authData) => {
            if (error) {
                res.status(403).json({ mensaje: 'Token inválido' });
            } else {
                // Si el token es válido, agrega los datos de autenticación a la solicitud para que estén disponibles en las rutas protegidas
                req.authData = authData;
                next();
            }
        });
    } else {
        // Si no se proporcionó un token en el encabezado de autorización
        res.status(403).json({ mensaje: 'Token no proporcionado' });
    }
}