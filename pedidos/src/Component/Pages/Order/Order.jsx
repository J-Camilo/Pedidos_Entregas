import React from 'react'

export const Order = () => {
    return (
        <>
            {/* /*___________________________NAV_________________________ */}

            {/* Cliente */}
            <div className='ContentNavMain'>
                <h1>Pedidos&Entregas</h1>

                <a href="/pedidos"><p className="textLink">Pedidos</p></a>
                <a href="/productos"><p className="textLink">Productos</p></a>
                <a href="/carrito"><p className="textLink">Carrito</p></a>
                <a href="/datos"><p className="textLink">Tus Datos</p></a>
                <a href="/login"><p className="textLink">Login</p></a>
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



            <div className='SubtText'>
                <h2>Tus productos agregados</h2>
            </div>

            <div className='cardGeneral'>
                <b><p>Numero De pedido: </p>asdadasdadad</b>
                <b><p>Fecha de regitro: </p>asdadasda</b>
                <b><p>Total: </p>asdadada</b>
                <b><p>Iva: </p>asdasdad</b>
                <b><p>Departamento: </p>asdada</b>
                <b><p>Ciudad: </p>asdadas</b>
                <b><p>Barrio: </p>asdasda</b>
                <b><p>Cliente: </p>asdadsads</b>
                <b><p>Empleado: </p>asdadsada</b>
                <b><p>Entredor: </p>asdadas</b>
                <b><p>Observacion: </p>asdasd</b>

                <button className='add'>Cancelar</button>
            </div>
        </>
    )
}
