import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
import { OrderDe } from './Component/Pages/OrderDe/OrderDe';


function App() {
  let valiLogin = localStorage.getItem("valiLogin")

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>

            {/*content*/}
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/login" element={valiLogin ? <Navigate replace to="/" /> : <Login />} />
            <Route path="/carrito" element={<Car />} />
            <Route path="/pedidos" element={valiLogin ? <Order /> : <Navigate replace to="/login" />} />
            <Route path="/datos" element={valiLogin ? <Data /> : <Navigate replace to="/login" />} />
            <Route path="/empleados" element={valiLogin ? <Workers /> : <Navigate replace to="/login" />} />
            <Route path="/clientes" element={valiLogin ? <Client /> : <Navigate replace to="/login" />} />
            <Route path="/ventas" element={valiLogin ? <Sales /> : <Navigate replace to="/login" />} />
            <Route path="/compra" element={valiLogin ? <OrderDe /> : <Navigate replace to="/login" />} />

            {/* Protect routers Err 404*/}
            <Route path="/*" element={<Err />} />

          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}

// create by juan camilo fong leon (jc4milo 2023)

export default App;
