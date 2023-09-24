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

            {/* Protect routers Err 404*/}
            <Route path="/*" element={<Err />} />

          </Routes>
        </BrowserRouter>
        
      </div>
    </>
  );
}

export default App;
