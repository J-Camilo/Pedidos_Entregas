import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Animation } from '../../Ui/Animation/Animation';

export const Sales = () => {


    const [ventas, setVentas] = useState([])
    const [text, setText] = useState('');
    const inputLoad = (event) => { setText(event.target.value); };

    const baseURL = 'http://localhost:3030/api/sales';
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
                    setVentas(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            console.log("No hay token disponible. Asegúrate de iniciar sesión.");
        }
    }, []);

    // Función para calcular el total de ventas por día
    const calcularTotalPorDia = (ventas, fecha) => {
        const fechaComparar = new Date(fecha).toLocaleDateString();
        const ventasDelDia = ventas.filter((venta) => new Date(venta.FechaVenta).toLocaleDateString() === fechaComparar);
        const totalVentas = ventasDelDia.reduce(
            (total, venta) => total + (venta.CantidadPedidos, venta.TotalPesos),
            0
        );
        return totalVentas;
    };

    // Función para calcular el total de ventas por semana 
    const calcularTotalPorSemana = (ventas, fecha) => {
        const fechaInicioSemana = new Date(fecha);
        fechaInicioSemana.setDate(fechaInicioSemana.getDate() - fechaInicioSemana.getDay());
        const fechaFinSemana = new Date(fechaInicioSemana);
        fechaFinSemana.setDate(fechaInicioSemana.getDate() + 6);

        const ventasDeLaSemana = ventas.filter(
            (venta) => new Date(venta.FechaVenta) >= fechaInicioSemana && new Date(venta.FechaVenta) <= fechaFinSemana
        );

        const totalVentas = ventasDeLaSemana.reduce(
            (total, venta) => total + (venta.CantidadPedidos, venta.TotalPesos),
            0
        );
        return totalVentas;
    };

    // Función para calcular el total de ventas por mes
    const calcularTotalPorMes = (ventas, fecha) => {
        const fechaInicioMes = new Date(fecha);
        fechaInicioMes.setDate(1);
        const fechaFinMes = new Date(fechaInicioMes);
        fechaFinMes.setMonth(fechaFinMes.getMonth() + 1);
        fechaFinMes.setDate(0);

        const ventasDelMes = ventas.filter(
            (venta) => new Date(venta.FechaVenta) >= fechaInicioMes && new Date(venta.FechaVenta) <= fechaFinMes
        );

        const totalVentas = ventasDelMes.reduce(
            (total, venta) => total + (venta.CantidadPedidos, venta.TotalPesos),
            0
        );
        return totalVentas;
    };

    // muestra los resultados buscados
    const fechaElegida = text
    const totalPorDia = calcularTotalPorDia(ventas, fechaElegida);
    console.log(totalPorDia);
    const totalPorSemana = calcularTotalPorSemana(ventas, fechaElegida);
    const totalPorMes = calcularTotalPorMes(ventas, fechaElegida);

    const idWork = localStorage.getItem("namedmaoooDn3");

    return (
        <>

            <Animation />

            {idWork >= 71 && idWork <= 90 ?
                <div className='ContentNavMain'>
                    <h1>Pedidos&Entregas</h1>
                    <a href="/pedidos"><p className="textLink">Pedidos</p></a>
                    <a href="/empleados"><p className="textLink">Empleados</p></a>
                    <a href="/ventas"><p className="textLink">Ventas</p></a>
                    <a href="/clientes"><p className="textLink">Clientes</p></a>
                    <a href="/datos"><p className="textLink">Tus Datos</p></a>
                    <a href="/productos"><p className="textLink">Productos</p></a>
                </div>

                : idWork >= 91 && idWork <= 98
                    ?
                    <div className='ContentNavMain'>
                        <h1>Pedidos&Entregas</h1>
                        <a href="/pedidos"><p className="textLink">Pedidos</p></a>
                        <a href="/ventas"><p className="textLink">Ventas</p></a>
                        <a href="/clientes"><p className="textLink">Clientes</p></a>
                        <a href="/datos"><p className="textLink">Tus Datos</p></a>
                        <a href="/productos"><p className="textLink">Productos</p></a>
                    </div>
                    : idWork >= 1 && idWork <= 70
                        ?
                        <div className='ContentNavMain'>
                            <h1>Pedidos&Entregas</h1>
                            <a href="/pedidos"><p className="textLink">Pedidos</p></a>
                            <a href="/ventas"><p className="textLink">Ventas</p></a>
                            <a href="/clientes"><p className="textLink">Clientes</p></a>
                            <a href="/datos"><p className="textLink">Tus Datos</p></a>
                            <a href="/productos"><p className="textLink">Productos</p></a>
                        </div>
                        :
                        <div className='ContentNavMain'>
                            <h1>Pedidos&Entregas</h1>

                            <a href="/pedidos"><p className="textLink">Pedidos</p></a>
                            <a href="/productos"><p className="textLink">Productos</p></a>
                            <a href="/carrito"><p className="textLink">Carrito</p></a>
                            <a href="/datos"><p className="textLink">Tus Datos</p></a>
                            <a href="/login"><p className="textLink">Login</p></a>

                        </div>
            }

            <div className='SubtText'>
                <h2>Tus productos agregados</h2>
            </div>

            {/* _____________________________________filter _____________________________________ */}

            <div className='filtersMain'>
                <label htmlFor="date">Filtro por Fecha: </label>
                <input type="Date" className='Input' placeholder='Busca al empleado por su nombre' value={text} onChange={inputLoad} id="" />
            </div>

            <div className='SalesMain'>
                <div className='SalesSon' >
                    <table >
                        <tr>
                            <th>Total por Dias</th>
                            <th>Total por Semana</th>
                            <th>Total por Mes</th>
                        </tr>
                        <tr>
                            <td>{totalPorDia}</td>
                            <td>{totalPorSemana}</td>
                            <td>{totalPorMes}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}
