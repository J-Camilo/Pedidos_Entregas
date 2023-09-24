import React from 'react';
import './Home.css'

/*___________________________Components_________________________ */
// import { Footer } from './'

export const Home = () => {
    return (
        <>

            {/* /*___________________________NAV_________________________ */}

            {/* Cliente */}
            <div className='ContentNavMain'>
                <h1>Pedidos&Entregas</h1>

                <a href="/pedidos"><p className="textLink">Pedidos</p></a>
                <a href="/productos"><p className="textLink">Productos</p></a>
                <a href="/carrito"><p className="textLink">Carrito</p></a>
                <a href="/login"><p className="textLink">Login</p></a>
                <a href="/datos"><p className="textLink">Tus Datos</p></a>

            </div>

            {/* Empleado
            <div className='ContentNavMain'>
            <h1>Pedidos&Entregas</h1>
                <a href="/pedidos"><p className="textLink">Pedidos</p></a>
                <a href="/ventas"><p className="textLink">Ventas</p></a>
                <a href="/clientes><p className="textLink">Clientes</p></a>
                <a href="/datos"><p className="textLink">Tus Datos</p></a>
                <a href="/productos"><p className="textLink">Productos</p></a>
            </div>

            {/* administrador 
            <div className='ContentNavMain'>
            <h1>Pedidos&Entregas</h1>
                <a href="/pedidos"><p className="textLink">Pedidos</p></a>
                <a href="/empleados"><p className="textLink">Empleados</p></a>
                <a href="/ventas"><p className="textLink">Ventas</p></a>
                <a href="/clientes"><p className="textLink">Clientes</p></a>
                <a href="/datos"><p className="textLink">Tus Datos</p></a>
                <a href="/productos"><p className="textLink">Productos</p></a>
            </div> */}

            <footer>
                <div className='footer'>By Juan Camilo Fong Leon © 2023</div>
            </footer>

        </>
    )
}
