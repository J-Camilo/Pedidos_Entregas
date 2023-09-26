import express from "express";
import config from "./config";
import cors from "cors";
import productsRoutes from "./routes/products.route";
import categoryRoutes from "./routes/category.router";
import brandRoutes from "./routes/brand.router";
import workersRoutes from "./routes/work.router";
import clientRoutes from "./routes/client.router";
import userRoutes from "./routes/user.router";
import carRoutes from "./routes/car.controller";
import detailCarRoutes from "./routes/detailsCar.router";
import orderRoutes from "./routes/order.router";
import detailOrderRoutes from "./routes/detailsOrder.router";
import salesRoutes from "./routes/dailySale.router";
import muniRoutes from "./routes/municipality.router";
import depRoutes from "./routes/deparment.router";

const app = express();

//---------- settings 
app.set('port', config.port || 4000);

//----------middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//___________Productos_____________ 
app.use('/api', productsRoutes);
app.use('/api', categoryRoutes);
app.use('/api', brandRoutes);

//_____________Trabajadores___________
app.use('/api', workersRoutes);
app.use('/api', clientRoutes);
app.use('/api', userRoutes);

//___________Carrito_____________
app.use('/api', carRoutes);
app.use('/api', detailCarRoutes);

//_____________Pedidos___________
app.use('/api', orderRoutes);
app.use('/api', detailOrderRoutes);

//_____________ventas diarias___________
app.use('/api', salesRoutes);

//_____________municipio y departamento___________
app.use('/api', muniRoutes);
app.use('/api', depRoutes);


export default app;