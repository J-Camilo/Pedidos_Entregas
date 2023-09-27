import React, { useState, useEffect } from 'react';
import './Products.css';
import axios from 'axios';
import { Animation } from '../../Ui/Animation/Animation';
import Swal from 'sweetalert2';

export const Products = (props) => {

    const [randomN, setRandomN] = useState("");

    // ___________________________products ___________________________
    const See = () => {
        document.getElementById("postDataMain").style.display = 'flex';

        // genera un codigo aleatorio
        const numeroAleatorio = Math.random().toString(36).substring(2, 12); // Longitud de 10 caracteres
        const numeroOrden = `COD-${numeroAleatorio}`;
        setRandomN(numeroOrden);
    }
    // ___________________________ car ___________________________

    const [products_2, setProducts_2] = useState([])

    const add = (Id, Codigo, Nombre, Marca, Categoria, CantidadDisponible, Precio, Iva) => {
        const existingCart = JSON.parse(localStorage.getItem("car")) || [];

        const isProductInCart = existingCart.some(product => product.id === Id);

        if (!isProductInCart) {
            const newProduct = {
                id: Id,
                codigo: Codigo,
                nombre: Nombre,
                marca: Marca,
                categoria: Categoria,
                disponible: CantidadDisponible,
                precio: Precio,
                iva: Iva
            };

            const updatedCart = [...existingCart, newProduct];
            localStorage.setItem("car", JSON.stringify(updatedCart));
            setProducts_2(prevProducts => [...prevProducts, newProduct]);
            console.log("Producto agregado al carrito");
            Swal.fire({
                icon: 'success',
                title: 'Haz añadido este producto',
                showConfirmButton: false,
                timer: 700
            })
        } else {
            console.log("Producto ya añadido al carrito");
        }
    };


    // ___________________________brand ___________________________

    const SeeBrand = () => { document.getElementById("postBrandMain").style.display = 'flex'; }

    // ___________________________category ___________________________

    const SeeCategory = () => { document.getElementById("postCategoryMain").style.display = 'flex'; }

    // ___________________________edit ___________________________

    const SeeEdit = (e) => {
        document.getElementById("postDataMainEdit").style.display = 'flex';
        JSON.stringify(localStorage.setItem("SUQgZGUgcHJvZHVjdG8=", e.target.value))
    }

    const Ocult = () => {
        document.getElementById("postDataMain").style.display = 'none';
        document.getElementById("postBrandMain").style.display = 'none';
        document.getElementById("postCategoryMain").style.display = 'none';
        document.getElementById("postCarMain").style.display = 'none';
        document.getElementById("postDataMainEdit").style.display = 'none';

        // ___________________________limpia los input ___________________________
        setNproduct("");
        setDproduct("");
        setBproduct("");
        setCproduct("");
        setCaproduct("");
        setHproduct("");
        setCavproduct("");
        setPproduct("");
        setIproduct("");

        setTextGeneral("");
    }




    // ___________________________ trae los datos de los inputs ___________________________
    const [Nproduct, setNproduct] = useState("");
    const [Dproduct, setDproduct] = useState("");
    const [Bproduct, setBproduct] = useState("");
    const [Cproduct, setCproduct] = useState("");
    const [Caproduct, setCaproduct] = useState("");
    const [Hproduct, setHproduct] = useState("");
    const [Cavproduct, setCavproduct] = useState("");
    const [Pproduct, setPproduct] = useState("");
    const [IDproduct, setIDproduct] = useState("");
    const [Iproduct, setIproduct] = useState("");

    const [TextGeneral, setTextGeneral] = useState("");

    //___________________________ extrae los datos ___________________________
    const onChangeN = (e) => setNproduct(e.target.value);
    const onChangeD = (e) => setDproduct(e.target.value);
    const onChangeB = (e) => setBproduct(e.target.value);
    const onChangeC = (e) => setCproduct(e.target.value);
    const onChangeCa = (e) => setCaproduct(e.target.value);
    const onChangeH = (e) => setHproduct(e.target.value);
    const onChangeCav = (e) => setCavproduct(e.target.value);
    const onChangeP = (e) => setPproduct(e.target.value);
    const onChangeI = (e) => setIproduct(e.target.value);
    const onChangeID = (e) => setIDproduct(e.target.value);

    const onChangeTextGeneral = (e) => setTextGeneral(e.target.value);

    // const handleSubmit = (e) => {
    //   e.preventDefault(); // Prevents the default form submission

    // };

    //________________________ Filerts ___________________________
    const idP = localStorage.getItem("SUQgZGUgcHJvZHVjdG8=")

    const [text, setText] = useState('');
    const [characters, setCharacters] = useState([]);
    const [charactersC, setCharactersc] = useState([]);
    const [charactersB, setCharactersb] = useState([]);
    // const [charactersId, setCharactersId] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]); // Estado para los productos filtrados.
    const [selectedBrand, setSelectedBrand] = useState(''); // Estado para la marca seleccionada.
    const [selectedCategory, setSelectedCategory] = useState(''); // Estado para la categoría seleccionada.
    const inputLoad = (event) => { setText(event.target.value); };
    // const onChangeCatergory = (e) => sett(e.target.value);


    const baseURL = 'http://localhost:3030/api/products';
    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setCharacters(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);


    //_______________________________________Create product______________________________________

    const createProduct = (e) => {
        // Recopila los datos del estado
        // e.preventDefault()
        const data = {
            id: IDproduct,
            Nombre: Nproduct,
            Codigo: randomN,
            Descripcion: Dproduct,
            Marca: Bproduct,
            Categoria: Cproduct,
            CantidadDisponible: Caproduct,
            Habilitado: Hproduct,
            CantidadVentas: Cavproduct,
            Precio: Pproduct,
            Iva: Iproduct
        };

        // Realiza la solicitud POST
        axios.post('http://localhost:3030/api/products', data, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((response) => {
                // Maneja la respuesta si es necesario
                console.log("Producto creado con éxito:", response.data);
            })
            .catch((error) => {
                // Maneja los errores de la solicitud
                console.error("Error al crear el producto:", error);
            });
    };

    //_______________________________________Creacte category______________________________________


    const createCategory = (e) => {
        // Recopila los datos del estado
        // e.preventDefault()
        const data = {
            Nombre: TextGeneral,
        };

        // Realiza la solicitud POST
        axios.post('http://localhost:3030/api/category', data, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((response) => {
                // Maneja la respuesta si es necesario
                console.log("Producto creado con éxito:", response.data);
            })
            .catch((error) => {
                // Maneja los errores de la solicitud
                console.error("Error al crear el producto:", error);
            });
    };


    //_______________________________________Create brand______________________________________


    const createBrand = (e) => {
        // Recopila los datos del estado
        // e.preventDefault()
        const data = {
            Nombre: TextGeneral,
        };

        // Realiza la solicitud POST
        axios.post('http://localhost:3030/api/brand', data, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((response) => {
                // Maneja la respuesta si es necesario
                console.log("Producto creado con éxito:", response.data);
            })
            .catch((error) => {
                // Maneja los errores de la solicitud
                console.error("Error al crear el producto:", error);
            });
    };

    //_______________________________________Update product______________________________________

    const update = (e) => {
        // Recopila los datos del estado
        e.preventDefault()
        const data = {
            Nombre: Nproduct,
            Descripcion: Dproduct,
            Marca: Bproduct,
            Categoria: Cproduct,
            CantidadDisponible: Caproduct,
            Habilitado: Hproduct,
            CantidadVentas: Cavproduct,
            Precio: Pproduct,
            Iva: Iproduct
        };

        // Realiza la solicitud POST
        axios.put(`http://localhost:3030/api/products/${idP}`, data, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((response) => {
                // Maneja la respuesta si es necesario
                console.log("Producto creado con éxito:", response.data);
            })
            .catch((error) => {
                // Maneja los errores de la solicitud
                console.error("Error al crear el producto:", error);
            });
    };


    //_______________________________________get one product______________________________________

    // const baseURLID = `http://localhost:3030/api/products/${idP}`;
    // useEffect(() => {
    //     axios.get(baseURLID)
    //         .then((response) => {
    //             setCharactersId(response.data);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }, []);


    //_______________________________________delete one product______________________________________

    const deleteProduct = async (e) => {
        const idProduct = e.target.value
        try {
            const response = await axios.delete(`http://localhost:3030/api/products/${idProduct}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });

            if (response.status === 204) {
                // Éxito: El producto se eliminó con éxito (estatus 204 No Content).
                console.log("Producto eliminado con éxito");

                // Recargar la página después de 1 segundo (puedes ajustar el tiempo)
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                // El servidor respondió con un código de estado inesperado.
                console.error(`Error al eliminar el producto. Código de estado: ${response.status}`);
            }
        } catch (error) {
            // Manejar errores de red u otros errores
            console.error("Error al eliminar el producto:", error);
        }
    };


    //_______________________________________get all category______________________________________

    const baseURLc = 'http://localhost:3030/api/category';
    useEffect(() => {
        axios.get(baseURLc)
            .then((response) => {
                setCharactersc(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    //_______________________________________get all brand______________________________________

    const baseURLb = 'http://localhost:3030/api/brand';
    useEffect(() => {
        axios.get(baseURLb)
            .then((response) => {
                setCharactersb(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);


    // const inputCharacters = characters.filter((character) => character.Nombre.toLowerCase().includes(text.toLowerCase()))


    //_______________________________________Filters search,  brand and category______________________________________


    const filterProducts = () => {
        const filtered = characters.filter((character) => {
            const nameMatch = character.Nombre.toLowerCase().includes(text.toLowerCase());
            const brandMatch = !selectedBrand || character.Marca === selectedBrand;
            const categoryMatch = !selectedCategory || character.Categoria === selectedCategory;
            return nameMatch && brandMatch && categoryMatch;
        });
        setFilteredCharacters(filtered);
    };

    useEffect(() => {
        filterProducts();
    }, [characters, text, selectedBrand, selectedCategory]);



    const idWork = localStorage.getItem("namedmaoooDn3");

    return (
        <>
            <Animation />

            {/* /*___________________________NAV_________________________ */}

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


            {/* ______________________________________Filers____________________________________ */}

            <div className='filtersMain'>

                {/* ___________________________Category_________________________ */}

                {idWork >= 71 && idWork <= 90
                    ? <div className='AddNew' onClick={SeeCategory}>
                    <p>+</p>
                </div> : null}

                <select className="Input" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="">Todas las categorías</option>

                    {charactersC.map((data) => (
                        <>
                            <option value={data.Nombre}>{data.Nombre}</option>
                        </>
                    ))}
                </select>

                {/* ___________________________Search_________________________ */}

                <div>
                    <input type="search" className='Input' placeholder='Busca el producto' value={text} onChange={inputLoad} id="" />
                </div>

                {/* ___________________________Brand_________________________ */}

                <select className="Input" value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
                    <option value="">Todas las marcas</option>
                    {charactersB.map((data) => (
                        <>
                            <option value={data.Nombre}>{data.Nombre}</option>
                        </>
                    ))}
                </select>
                {idWork >= 71 && idWork <= 90
                    ? <div className='AddNew' onClick={SeeBrand}>
                        <p>+</p>
                    </div> : null}
            </div>


            {filteredCharacters.length === 0 ? (
                <p className='CheckText' data-testid='no-results'>No se ha encontrado productos con ese nombre</p>
            ) : (
                <>
                    {/* ___________________________Card_________________________ */}
                    < div className='ContentCardMain'>

                        {idWork >= 71 && idWork <= 90
                            ? <div className='cardProduct'>
                                <div className='CardAddSon' onClick={See}>
                                    <p>+</p>
                                </div>
                                <p>Agregar producto</p>
                            </div> : null}

                        {/* se recorre con map para optener todos los datos ya filtrados */}
                        {filteredCharacters.map((data) => (
                            <div className='cardProduct' key={data.Id}>
                                <b><p>Nombre: </p></b><p>{data.Nombre}</p>
                                <b><p>Marca: </p></b><p>{data.Marca}</p>
                                <b><p>Categoria: </p></b><p>{data.Categoria}</p>
                                <b><p>Cantidad: </p></b><p>{data.CantidadDisponible}</p>
                                <b><p>Precio: </p></b><p>{data.Precio}</p>

                                <button className='add' onClick={(e) => { add(data.Id, data.Codigo, data.Nombre, data.Marca, data.Categoria, data.CantidadDisponible, data.Precio, data.Iva) }} value={{ 'id': data.Id, "Coodigo": data.Codigo, 'Nombre': data.Nombre, 'Marca': data.Marca, 'Categoria': data.Categoria, 'CantidadDisponible': data.CantidadDisponible, 'Precio': data.Precio, "Iva": data.Iva }}>Anadir al carrito</button>

                                {idWork >= 71 && idWork <= 90
                                    ?
                                    <>
                                        <button className='edit' onClick={(e) => { deleteProduct(e) }} value={data.Id}>Eliminar</button>
                                        <button className='edit' onClick={(e) => { SeeEdit(e) }} value={data.Id}>Editar</button>
                                    </>
                                    : null
                                }
                            </div>
                        ))}
                    </div >
                </>
            )}


            {/* ___________________________Add products_________________________ */}

            <div className='postDataMain' id='postDataMain'>
                <div className='postData'>
                    <form onSubmit={createProduct}>
                        <h3>Ingresa el producto</h3><hr />
                        <label htmlFor="nombre">numero unico</label>
                        <input
                            type="text"
                            id="Id"
                            name="Id"
                            value={IDproduct}
                            onChange={onChangeID}
                            required
                        />
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={Nproduct}
                            onChange={onChangeN}
                            required
                        />

                        <label htmlFor="codigo">Código</label>
                        <input
                            type="text"
                            id="codigo"
                            name="codigo"
                            placeholder={randomN}

                        />

                        <label htmlFor="descripcion">Descripción</label>
                        <input
                            type="text"
                            id="descripcion"
                            name="descripcion"
                            value={Dproduct}
                            onChange={onChangeD}
                            required
                        />

                        <label htmlFor="marca">Marca</label>
                        <input
                            type="text"
                            id="marca"
                            name="marca"
                            value={Bproduct}
                            onChange={onChangeB}
                            required
                        />

                        <label htmlFor="categoria">Categoría</label>
                        <input
                            type="text"
                            id="categoria"
                            name="categoria"
                            value={Cproduct}
                            onChange={onChangeC}
                            required
                        />

                        <label htmlFor="stock">Cantidad en Stock</label>
                        <input
                            type="text"
                            id="stock"
                            name="stock"
                            value={Caproduct}
                            onChange={onChangeCa}
                        />

                        <label htmlFor="habilitado">Habilitado</label>
                        <input
                            type="text"
                            id="habilitado"
                            name="habilitado"
                            value={Hproduct}
                            onChange={onChangeH}
                            required
                        />

                        <label htmlFor="ventas">Cantidad de Ventas</label>
                        <input
                            type="number"
                            id="ventas"
                            name="ventas"
                            value={Cavproduct}
                            onChange={onChangeCav}
                        />

                        <label htmlFor="iva">IVA</label>
                        <input
                            type="number"
                            id="iva"
                            name="iva"
                            value={Iproduct}
                            onChange={onChangeI}
                            required
                        />

                        <label htmlFor="precio">Precio</label>
                        <input
                            type="tel"
                            id="precio"
                            name="precio"
                            value={Pproduct}
                            onChange={onChangeP}
                            required
                        />

                        <button type='submit' className='buy'>Agregar</button>
                    </form>
                    <button className='add' onClick={Ocult}>Salir de esta vista</button>
                </div>
            </div>



            {/* ___________________________Add brand_________________________ */}


            <div className="postDataMain" id='postBrandMain'>
                <div className="postData">
                    <form onSubmit={createBrand}>
                        <h3>Ingresa la Marca</h3><hr />
                        <label htmlFor="precio">Nombre:</label>
                        <input
                            type="text"
                            name='Nombre'
                            value={TextGeneral}
                            onChange={onChangeTextGeneral}
                            required
                        /><br />
                        <button className='buy' type="submit">Agregar</button>

                    </form>
                    <button className='add' onClick={Ocult}>Salir de esta vista</button>
                </div>
            </div>


            {/* ___________________________Add category_________________________ */}


            <div className="postDataMain" id='postCategoryMain'>
                <div className="postData">
                    <form onSubmit={createCategory}>
                        <h3>Ingresa la Cateogria</h3><hr />
                        <label htmlFor="precio">Nombre:</label>
                        <input
                            type="text"
                            name='Nombre'
                            value={TextGeneral}
                            onChange={onChangeTextGeneral}
                            required
                        /><br />
                        <button className='buy' type='submit'>Agregar</button>

                    </form>
                    <button className='add' onClick={Ocult}>Salir de esta vista</button>
                </div>
            </div>


            {/* { Token } */}
            {/* ___________________________Edit________________________ */}

            <div className="postDataMain" id='postDataMainEdit'>
                <div className='postData'>
                    <form onSubmit={update} >
                        <h3>Edita este producto</h3><hr />

                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={Nproduct}
                            onChange={onChangeN}
                            required
                        />


                        <label htmlFor="descripcion">Descripción</label>
                        <input
                            type="text"
                            id="descripcion"
                            name="descripcion"
                            value={Dproduct}
                            onChange={onChangeD}
                            required
                        />

                        <label htmlFor="marca">Marca</label>
                        <input
                            type="text"
                            id="marca"
                            name="marca"
                            value={Bproduct}
                            onChange={onChangeB}
                            required
                        />

                        <label htmlFor="categoria">Categoría</label>
                        <input
                            type="text"
                            id="categoria"
                            name="categoria"
                            value={Cproduct}
                            onChange={onChangeC}
                            required
                        />

                        <label htmlFor="stock">Cantidad en Stock</label>
                        <input
                            type="text"
                            id="stock"
                            name="stock"
                            value={Caproduct}
                            onChange={onChangeCa}
                        />

                        <label htmlFor="habilitado">Habilitado</label>
                        <input
                            type="text"
                            id="habilitado"
                            name="habilitado"
                            value={Hproduct}
                            onChange={onChangeH}
                            required
                        />

                        <label htmlFor="ventas">Cantidad de Ventas</label>
                        <input
                            type="number"
                            id="ventas"
                            name="ventas"
                            value={Cavproduct}
                            onChange={onChangeCav}
                            required
                        />

                        <label htmlFor="iva">IVA</label>
                        <input
                            type="number"
                            id="iva"
                            name="iva"
                            value={Iproduct}
                            onChange={onChangeI}
                            required
                        />

                        <label htmlFor="precio">Precio</label>
                        <input
                            type="tel"
                            id="precio"
                            name="precio"
                            value={Pproduct}
                            onChange={onChangeP}
                            required
                        />

                        <button type='submit' className='buy'>Agregar</button>
                    </form>
                    <button className='add' onClick={Ocult}>Salir de esta vista</button>
                </div>
            </div>

        </>
    )
}
