import express  from "express";
import config from "./config";

import productsRoutes from "./routes/products.route";
import categoryRoutes from "./routes/category.router";
import brandRoutes from "./routes/brand.router";
import workersRoutes from "./routes/work.router";
import clientRoutes from "./routes/client.router";
import userRoutes from "./routes/user.router";
import carRoutes from "./routes/car.controller";
import detailCarRoutes from "./routes/detailsCar.router";
import orderRoutes from "./routes/order.router";

const app = express();

// settings 
app.set('port', config.port);

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//___________Productos_____________
app.use(productsRoutes);
app.use(categoryRoutes);
app.use(brandRoutes);

//_____________Trabajadores___________
app.use(workersRoutes);
app.use(clientRoutes);
app.use(userRoutes);

//___________Carrito_____________
app.use(carRoutes);
app.use(detailCarRoutes); 

//_____________Pedidos___________
app.use(orderRoutes); 
  

export default app;