import React, { useEffect, useState } from 'react'
import { Animation } from '../../Ui/Animation/Animation';
import axios from 'axios';
import Swal from 'sweetalert2';

export const OrderDe = () => {

    const [randomN, setRandomN] = useState('');

    useEffect(() => {
        // Este código se ejecutará automáticamente cuando el componente se monte
        const numeroAleatorio = Math.random().toString(36).substring(2, 12); // Longitud de 10 caracteres
        const numeroOrden = `COD-${numeroAleatorio}`;
        setRandomN(numeroOrden);
    }, []); // El arreglo vacío [] asegura que se ejecute solo una vez, al montar el componente



    // Define los estados para cada campo del formulario
    const [departamento, setDepartamento] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [barrio, setBarrio] = useState('');
    const [direccionEntrega, setDireccionEntrega] = useState('');
    const [Obser, setObser] = useState('');

    const carData = localStorage.getItem("car");
    const Product = +localStorage.getItem("product");
    const productsInCart = carData ? JSON.parse(carData) : [];

    let tempPrice = '';
    let tempNombre = '';
    let tempCodigo = '';
    let tempMarca = '';
    let tempCategoria = '';
    let tempIva = '';

    productsInCart.forEach((product) => {
        if (product.id === Product) {
            tempNombre = product.nombre;
            tempPrice = product.precio;
            tempCodigo = product.codigo;
            tempMarca = product.marca;
            tempCategoria = product.categoria;
            tempIva = product.iva;
        }
    });



    // Actualiza los estados una vez fuera del bucle
    const [nombreProducto, setNombreProducto] = useState(tempNombre);
    const [codigoProducto, setCodigoProducto] = useState(tempCodigo);
    const [marca, setMarca] = useState(tempMarca);
    const [categoria, setCategoria] = useState(tempCategoria);
    const [iva, setIva] = useState(tempIva);
    const [Price, setPrice] = useState(tempPrice);


    // _______________________________ Confirm order _______________________  

    const createOrder = (e) => {

        const Data = {
            NumeroOrden: randomN,
            TotalPrecio: Price,
            TotalIva: iva,
            Departamento: departamento,
            Ciudad: ciudad,
            Barrio: direccionEntrega,
            DireccionEntrega: Obser,
        };

        // Realiza la solicitud POST
        axios.post('http://localhost:3030/api/order', Data, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((response) => {
                console.log("Orden creada con éxito:", response.data);
                localStorage.setItem("buy", true)

            })
            .catch((error) => {
                console.error("Error al crear la orden:", error);
            });
    };

    // _______________________________ Confirm details _______________________

    const details = (e) => {
        const Data = {
            NombreProducto: nombreProducto,
            DescripcionProducto: "Ninguna",
            Iva: iva,
            Precio: Price,
            CodigoProducto: codigoProducto,
            Barrio: direccionEntrega,
            Marca: marca,
            Categoria: categoria,
        };

        // Realiza la solicitud POST
        axios.post('http://localhost:3030/api/orderDetail', Data, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((response) => {
                console.log("Orden creada con éxito 2:", response.data);
                createOrder();

                setTimeout(() => {
                    // Redirige a la página deseada
                    window.location.href = 'http://localhost:3000/productos';

                    // Recarga la página actual
                    window.location.reload();
                }, 2000);
                setTimeout(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Haz hecho el pedido con exito, redirigiendo...',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }, 4000);

            })
            .catch((error) => {
                console.error("Error al crear la orden 2:", error);
            });
    };

    const Next = () => {
        document.getElementById("postDataMain").style.display = 'flex';
    }

    const Ocult = () => {
        document.getElementById("postDataMain").style.display = 'none';
    }


    return (
        <>
            <Animation />
            <div className='CardOrder'>
                <h3> Compra del producto</h3>
            </div>

            <div>
                <div className='CardOrder'>
                    {productsInCart.map((data) => (
                        data.id === Product
                            ?
                            <form>
                                <label htmlFor="precio">Precio:</label>
                                <input
                                    type="number"
                                    id="precio"
                                    value={data.precio}
                                />

                                <label htmlFor="iva">Iva:</label>
                                <input
                                    type="number"
                                    id="iva"
                                    value={data.iva}

                                />

                                <label htmlFor="departamento">Departamento:</label>
                                <input
                                    type="text"
                                    id="departamento"
                                    value={departamento}
                                    onChange={(e) => setDepartamento(e.target.value)}
                                    required
                                />

                                <label htmlFor="ciudad">Ciudad:</label>
                                <input
                                    type="text"
                                    id="ciudad"
                                    value={ciudad}
                                    onChange={(e) => setCiudad(e.target.value)}
                                    required
                                />

                                <label htmlFor="barrio">Barrio:</label>
                                <input
                                    type="text"
                                    id="barrio"
                                    value={barrio}
                                    onChange={(e) => setBarrio(e.target.value)}
                                    required
                                />

                                <label htmlFor="direccionEntrega">Dirección de Entrega:</label><br />
                                <textarea
                                    id="direccionEntrega"
                                    value={direccionEntrega}
                                    onChange={(e) => setDireccionEntrega(e.target.value)}
                                    required
                                />

                                <label htmlFor="direccionEntrega">Observacion:</label><br />
                                <textarea
                                    id="Oservacion"
                                    value={Obser}
                                    onChange={(e) => setObser(e.target.value)}
                                    required
                                />


                            </form>
                            : null
                    ))}
                    <button className='buy' onClick={Next}>Siguiente</button>
                    <a href="/productos"><button type="submit" className='add' >Regresar</button></a>
                </div>
            </div>


            {/* ______________________________detail fo Order__________________________________ */}
            <div className='postDataMain' id='postDataMain'>
                <div className='postData'>
                    <h3>Detalles del pedido</h3><hr /><br />
                    <form onSubmit={details}>
                        <label htmlFor="nombreProducto">Nombre del Producto:</label>
                        <input
                            type="text"
                            id="nombreProducto"
                            value={nombreProducto}

                        />

                        <label htmlFor="precio">Precio:</label>
                        <input
                            type="number"
                            id="precio"
                            value={Price}

                        />
                        <label htmlFor="iva">Iva:</label>
                        <input
                            type="number"
                            id="iva"
                            value={iva}

                        />
                        <label htmlFor="cantidad">Cantidad:</label>
                        <input
                            type="number"
                            id="cantidad"
                            value={1}

                        />
                        <label htmlFor="codigoProducto">Código del Producto:</label>
                        <input
                            type="text"
                            id="codigoProducto"
                            value={codigoProducto}

                        />
                        <label htmlFor="marca">Marca:</label>
                        <input
                            type="text"
                            id="marca"
                            value={marca}

                        />
                        <label htmlFor="categoria">Categoría:</label>
                        <input
                            type="text"
                            id="categoria"
                            value={categoria}

                        />
                        <button type="submit" className='buy'>Comprar</button>
                    </form>
                    <button className='add' onClick={Ocult}>Cancelar</button>
                </div>
            </div>

        </>

    )
}
