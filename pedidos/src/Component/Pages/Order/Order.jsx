import axios from 'axios';
import React, { useEffect, useState } from 'react';


export const Order = () => {

    const [order, setOrder] = useState([])
    const [text, setText] = useState('');
    const [selectedStartDate, setSelectedStartDate] = useState('');
    const [selectedEndDate, setSelectedEndDate] = useState('');
    const [filteredOrders, setFilteredOrders] = useState([]);
    const inputLoad = (event) => { setText(event.target.value); };

    //_______________________________________get all order______________________________________

    const baseURL = 'http://localhost:3030/api/order';

    useEffect(() => {
        // Obtener el token del localStorage
        const token = localStorage.getItem("token");

        // Verificar si hay un token antes de hacer la solicitud
        if (token) {
            axios.get(baseURL, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
                .then((response) => {
                    setOrder(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            console.log("No hay token disponible. Asegúrate de iniciar sesión.");
        }
    }, []);


    //_______________________________________Filter search, from and until______________________________________

    const filterOrders = () => {
        const filtered = order.filter((order) => {
            const nameMatch = order.NumeroOrden.toLowerCase().includes(text.toLowerCase());
            const dateMatch = (!selectedStartDate || order.FechaRegistro >= selectedStartDate) &&
                (!selectedEndDate || order.FechaRegistro <= selectedEndDate);
            return nameMatch && dateMatch;
        });
        setFilteredOrders(filtered);
    };


    useEffect(() => {
        filterOrders();
    }, [order, text, selectedStartDate, selectedEndDate]);


    //_______________________________________cancel order______________________________________

    const deleteOrders = async (e) => {
        const idOrder = e.target.value
        try {
            const response = await axios.delete(`http://localhost:3030/api/order/${idOrder}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });

            if (response.status === 204) {
                // Éxito: El producto se eliminó con éxito (estatus 204 No Content).
                console.log("pedido cancelado con éxito");

                // Recargar la página después de 1 segundo (puedes ajustar el tiempo)
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            } else {
                // El servidor respondió con un código de estado inesperado.
                console.error(`Error al cancelar el pedido. Código de estado: ${response.status}`);
            }
        } catch (error) {
            // Manejar errores de red u otros errores
            console.error("Error al cancelar el pedido:", error);
        }
    };


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
                <a href="/clientes"><p className="textLink">Clientes</p></a>
                <a href="/datos"><p className="textLink">Tus Datos</p></a>
                <a href="/productos"><p className="textLink">Productos</p></a>
            </div>*/}

            {/* administrador */}
            <div className='ContentNavMain'>
                <h1>Pedidos&Entregas</h1>
                <a href="/pedidos"><p className="textLink">Pedidos</p></a>
                <a href="/empleados"><p className="textLink">Empleados</p></a>
                <a href="/ventas"><p className="textLink">Ventas</p></a>
                <a href="/clientes"><p className="textLink">Clientes</p></a>
                <a href="/datos"><p className="textLink">Tus Datos</p></a>
                <a href="/productos"><p className="textLink">Productos</p></a>
            </div>



            <div className='SubtText'>
                <h2>Tus productos agregados</h2>
            </div>


            {/* _______________________________________ Filters _______________________________________ */}

            <div className='filtersMain'>
                <div>
                    <input type="search" className='InputSeacrh' placeholder='Busca por numero de pedido' value={text} onChange={inputLoad} id="" />
                </div>


                <div>
                    <label htmlFor="username">Desde: </label>
                    <input
                        type="date"
                        placeholder="Desde"
                        value={selectedStartDate}
                        onChange={(e) => setSelectedStartDate(e.target.value)}
                    />
                    <label htmlFor="username">Hasta: </label>

                    <input
                        type="date"
                        placeholder="Hasta"
                        value={selectedEndDate}
                        onChange={(e) => setSelectedEndDate(e.target.value)}
                    />
                </div>
            </div>




            {/* _______________________________________ Card _______________________________________ */}

            {filteredOrders.map((data) => (
                <div className='cardGeneral'>
                    <div className='cardGeneraSon'>
                        <b><p>Numero De pedido: </p></b><p>{data.NumeroOrden}</p>
                        <b><p>Fecha de regitro: </p></b><p>{data.FechaRegistro}</p>
                        <b><p>Total: </p></b><p>{data.TotalPrecio}</p>
                        <b><p>Iva: </p></b><p>{data.TotalIva}</p>
                        <b><p>Departamento: </p></b><p>{data.Departamento}</p>
                        <b><p>Ciudad: </p></b><p>{data.Ciudad}</p>
                        <b><p>Barrio: </p></b><p>{data.Barrio}</p>
                        <b><p>Cliente: </p></b><p>{data.ClienteId}</p>
                        <b><p>Empleado: </p></b><p>{data.EmpleadoId}</p>
                        <b><p>Entredor: </p></b><p>{data.EntregadorId}</p>
                        <b><p>Observacion: </p></b><p>{data.Observacion}</p>
                    </div>
                    <button className='add' onClick={(e) => { deleteOrders(e) }} value={data.Id}>Cancelar</button>
                </div>
            ))}
        </>
    )
}
