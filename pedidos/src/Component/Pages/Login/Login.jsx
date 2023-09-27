import React from 'react'
import { FuntionLogin } from '../../Functions/FuntionLogin/FuntionLogin'
import { Animation } from '../../Ui/Animation/Animation';

export const Login = () => {
  return (
    <>
      <Animation />

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

      <FuntionLogin />
    </>
  )
}
