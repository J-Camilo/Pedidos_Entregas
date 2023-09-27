import React, { useState } from 'react';
import './Car.css'
import { Animation } from '../../Ui/Animation/Animation';
import Swal from 'sweetalert2';


export const Car = () => {

    const carData = localStorage.getItem("car")
    const productsInCart = carData ? JSON.parse(carData) : [];



    /*__________________________________ delect __________________________________ */

    const deleteCar = (e) => {

        let productIdToRemove = +e.target.value;
        Swal.fire({
            title: '¿Estas seguro?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '!Si quiero!',
            cancelButtonText: 'Cancelar',
            buttonsStyling: false,
            customClass: {
                confirmButton: "buy",
                cancelButton: "add"
            }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: 'Se ha eliminado el producto del carrito',
                    showConfirmButton: false,
                    timer: 1400
                })
                // Encontrar el índice del producto a eliminar en el array
                const indexToRemove = productsInCart.findIndex(product => product.id === productIdToRemove);

                if (indexToRemove !== -1) {
                    // Eliminar el producto del array
                    productsInCart.splice(indexToRemove, 1);

                    // Guardar el array actualizado en localStoragex|
                    localStorage.setItem("car", JSON.stringify(productsInCart));

                    console.log("Producto eliminado del carrito");
                } else {
                    console.log("El producto no se encontró en el carrito");
                }
                window.location.reload()
            }
        })
    }


    //_____________________ compra _________________________

    let validDatos_2 = (localStorage.getItem("product"));
    const add_2 = (e) => {

        validDatos_2 === null ? validDatos_2 = [] : validDatos_2 = JSON.parse(validDatos_2)
        localStorage.setItem('product', JSON.stringify(validDatos_2))

        JSON.stringify(localStorage.setItem("product", e.target.value))
        console.log(e.target.value)
    }
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




            <div className='SubtText'>
                <h2>Tus productos agregados</h2>
            </div>

            {productsInCart.map((data) => (
                <div className='cardGeneralCar'>
                    <p><b>Nombre: </b>{data.nombre}</p>
                    <p><b>Marca: </b>{data.marca}</p>
                    <p><b>Categoria: </b>{data.categoria}</p>
                    <p d={"price" + data.id}><b>Precio: </b>${data.precio}</p>

                    <button className='add' onClick={deleteCar} value={data.id} alt="eiminar producto" >Quitar</button>
                    <a href="/compra"><button className='buy' onClick={(e) => { add_2(e) }} value={data.id}>Comprar</button></a>

                </div>
            ))}
        </>
    )
}
