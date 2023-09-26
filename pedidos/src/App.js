import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*___________________________Components_________________________ */
import { Home } from './Component/Pages/Home/Home';
import { Err } from './Component/Pages/Err/Err'
import { Products } from './Component/Pages/Products/Products';
import { Login } from './Component/Pages/Login/Login';
import { Car } from './Component/Pages/Carrito/Car';
import { Order } from './Component/Pages/Order/Order';
import { Data } from './Component/Pages/Data/Data';
import { Workers } from './Component/Pages/Workers/Workers';
import { Client } from './Component/Pages/Client/Client';
import { Sales } from './Component/Pages/Sales/Sales';


function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>

            {/*content*/}
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/carrito" element={<Car />} />
            <Route path="/pedidos" element={<Order />} />
            <Route path="/datos" element={<Data />} />
            <Route path="/empleados" element={<Workers />} />
            <Route path="/clientes" element={<Client />} />
            <Route path="/ventas" element={<Sales />} />

            {/* Protect routers Err 404*/}
            <Route path="/*" element={<Err />} />

          </Routes>
        </BrowserRouter>
        
      </div>
    </>
  );
}

export default App;
