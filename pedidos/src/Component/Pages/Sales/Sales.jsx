import React from 'react'

export const Sales = () => {
    return (
        <>
            <div className='ContentNavMain'>
                <h1>Pedidos&Entregas</h1>
                <a href="/pedidos"><p className="textLink">Pedidos</p></a>
                <a href="/empleados"><p className="textLink">Empleados</p></a>
                <a href="/ventas"><p className="textLink">Ventas</p></a>
                <a href="/clientes"><p className="textLink">Clientes</p></a>
                <a href="/datos"><p className="textLink">Tus Datos</p></a>
                <a href="/productos"><p className="textLink">Productos</p></a>
            </div>
        </>
    )
}
