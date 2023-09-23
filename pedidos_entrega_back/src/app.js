import express  from "express";
import config from "./config";

import productsRoutes from "./routes/products.route";
import categoryRoutes from "./routes/category.router";
import brandRoutes from "./routes/brand.router";
import workersRoutes from "./routes/work.router";
import clientRoutes from "./routes/client.router";

const app = express();

// settings 
app.set('port', config.port);

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//________________________
app.use(productsRoutes);
app.use(categoryRoutes);
app.use(brandRoutes);
app.use(workersRoutes);
app.use(clientRoutes);
 
  

export default app;