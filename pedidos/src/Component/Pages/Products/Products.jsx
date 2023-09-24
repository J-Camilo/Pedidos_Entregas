import React, { useState } from 'react';
import './Products.css';

export const Products = () => {
    const [randomN, setRandomN] = useState("");

    const See = () => {
        document.getElementById("postDataMain").style.display = 'flex';

        // genera un codigo aleatorio
        const numeroAleatorio = Math.random().toString(36).substring(2, 12); // Longitud de 10 caracteres
        const numeroOrden = `COD-${numeroAleatorio}`;
        setRandomN(numeroOrden);
    }

    const Ocult = () => {
        document.getElementById("postDataMain").style.display = 'none';

        //limpia el formulario 
        setNproduct("");
        setDproduct("");
        setBproduct("");
        setCproduct("");
        setCaproduct("");
        setHproduct("");
        setCavproduct("");
        setPproduct("");
        setIproduct("");

    }

    // trae los datos de los inputs
    const [Nproduct, setNproduct] = useState("");
    const [Dproduct, setDproduct] = useState("");
    const [Bproduct, setBproduct] = useState("");
    const [Cproduct, setCproduct] = useState("");
    const [Caproduct, setCaproduct] = useState("");
    const [Hproduct, setHproduct] = useState("");
    const [Cavproduct, setCavproduct] = useState("");
    const [Pproduct, setPproduct] = useState("");
    const [Iproduct, setIproduct] = useState("");

    // extrae los datos 
    const onChangeN = (e) => setNproduct(e.target.value);
    const onChangeD = (e) => setDproduct(e.target.value);
    const onChangeB = (e) => setBproduct(e.target.value);
    const onChangeC = (e) => setCproduct(e.target.value);
    const onChangeCa = (e) => setCaproduct(e.target.value);
    const onChangeH = (e) => setHproduct(e.target.value);
    const onChangeCav = (e) => setCavproduct(e.target.value);
    const onChangeP = (e) => setPproduct(e.target.value);
    const onChangeI = (e) => setIproduct(e.target.value);

    // const handleSubmit = (e) => {
    //   e.preventDefault(); // Prevents the default form submission

    // };
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


            {/* ___________________________Filer_________________________ */}





            {/* ___________________________Card_________________________ */}

            <div className='ContentCardMain'>

                <div className='cardProduct'>
                    <div className='CardAddSon' onClick={See}>
                        <p>+</p>
                    </div>
                    <p>Agregar</p>
                </div>

                <div className='cardProduct'>
                    <b><p>Nombre: </p></b>
                    <b><p>Marca: </p></b>
                    <b><p>Categoria: </p></b>
                    <b><p>Cantidad: </p></b>
                    <b><p>Stock: </p></b>

                    <button className='add'>Anadir al carrito</button>
                    <button className='buy'>Comprar</button>
                </div>
            </div>


            {/* ___________________________Add products_________________________ */}

            <div className='postDataMain' id='postDataMain'>
                <div className='postData'>
                    <form action="">
                        <h2>Ingresa el producto</h2><hr />
                        <label htmlFor="nombre">Nombre:</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={Nproduct}
                            onChange={onChangeN}
                            required
                        /><br />

                        <label htmlFor="codigo">Código:</label>
                        <input
                            type="text"
                            id="codigo"
                            name="codigo"
                            placeholder={randomN}
                            required

                        /><br />

                        <label htmlFor="descripcion">Descripción:</label>
                        <input
                            type="text"
                            id="descripcion"
                            name="descripcion"
                            value={Dproduct}
                            onChange={onChangeD}
                            required
                        /><br />

                        <label htmlFor="marca">Marca:</label>
                        <input
                            type="text"
                            id="marca"
                            name="marca"
                            value={Bproduct}
                            onChange={onChangeB}
                            required
                        /><br />

                        <label htmlFor="categoria">Categoría:</label>
                        <input
                            type="text"
                            id="categoria"
                            name="categoria"
                            value={Cproduct}
                            onChange={onChangeC}
                            required
                        /><br />

                        <label htmlFor="stock">Cantidad en Stock:</label>
                        <input
                            type="text"
                            id="stock"
                            name="stock"
                            value={Caproduct}
                            onChange={onChangeCa}
                        /><br />

                        <label htmlFor="habilitado">Habilitado:</label>
                        <input
                            type="text"
                            id="habilitado"
                            name="habilitado"
                            value={Hproduct}
                            onChange={onChangeH}
                            required
                        /><br />

                        <label htmlFor="ventas">Cantidad de Ventas:</label>
                        <input
                            type="number"
                            id="ventas"
                            name="ventas"
                            value={Cavproduct}
                            onChange={onChangeCav}
                        /><br />

                        <label htmlFor="iva">IVA:</label>
                        <input
                            type="number"
                            id="iva"
                            name="iva"
                            value={Iproduct}
                            onChange={onChangeI}
                            required
                        /><br />

                        <label htmlFor="precio">Precio:</label>
                        <input
                            type="tel"
                            id="precio"
                            name="precio"
                            value={Pproduct}
                            onChange={onChangeP}
                            required
                        /><br />

                        <button type='submit' className='buy'>Agregar</button>
                    </form>
                    <button className='add' onClick={Ocult}>Salir de esta</button>
                </div>
            </div>
        </>
    )
}
