import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Animation } from '../../Ui/Animation/Animation';

export const Workers = () => {



    // ____________________________get all workers_______________________

    const [work, setWork] = useState([])

    const baseURL = 'http://localhost:3030/api/work/workers';

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
                    setWork(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            console.log("No hay token disponible. Asegúrate de iniciar sesión.");
        }
    }, []);


    // ____________________________get all workers_______________________

    const [count, setCount] = useState([])

    const baseURLcount = 'http://localhost:3030/api/work/workers/count';

    useEffect(() => {
        // Obtener el token del localStorage
        const token = localStorage.getItem("token");

        // Verificar si hay un token antes de hacer la solicitud
        if (token) {
            axios.get(baseURLcount, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
                .then((response) => {
                    setCount(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            console.log("No hay token disponible. Asegúrate de iniciar sesión.");
        }
    }, []);

    //_________________________________fired one worker____________________

    const deleteWorker = async (e) => {
        const idWork = e.target.value
        try {
            const response = await axios.delete(`http://localhost:3030/api/work/workers/${idWork}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });

            if (response.status === 204) {
                // Éxito: El producto se eliminó con éxito (estatus 204 No Content).
                console.log("eliminando trabajador");

                // Recargar la página después de 1 segundo (puedes ajustar el tiempo)
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            } else {
                // El servidor respondió con un código de estado inesperado.
                console.error(`Error al eliminar trabajador: ${response.status}`);
            }
        } catch (error) {
            // Manejar errores de red u otros errores
            console.error("Error al eliminar trabajador:", error);
        }



        // Swal.fire({
        //     title: '¿Estas seguro?',
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: '!Si quiero!',
        //     cancelButtonText: 'Cancelar',
        //     buttonsStyling: false,
        //     customClass: {
        //         confirmButton: "buy",
        //         cancelButton: "add"
        //     }
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         Swal.fire({
        //             icon: 'success',
        //             title: 'Se ha eliminado el producto del carrito',
        //             showConfirmButton: false,
        //             timer: 1400
        //         })

        //     } else {
        //         console.log("No se pudo eliminar el producto");
        //     }
        //     window.location.reload()
        // })
    };


    //_____________________________________ filters ____________________________________

    const [text, setText] = useState('');
    const inputLoad = (event) => { setText(event.target.value); };


    const inputCharacters = work.filter((work) => work.Nombre.toLowerCase().includes(text.toLowerCase()))


    // ___________________________ trae los datos de los inputs ___________________________
    const [Nwork, setNwork] = useState("");
    const [Awork, setAwork] = useState("");
    const [CEwork, setCEwork] = useState("");
    const [DIwork, setDIwork] = useState("");
    const [DEwork, setDEwork] = useState("");
    const [MUwork, setMUwork] = useState("");
    const [BAwork, setBAwork] = useState("");
    const [IDwork, setIDwork] = useState("");
    const [SAwork, setSAwork] = useState("");

    // const [TextGeneral, setTextGeneral] = useState("");

    //___________________________ extrae los datos ___________________________
    const onChangeN = (e) => setNwork(e.target.value);
    const onChangeA = (e) => setAwork(e.target.value);
    const onChangeCE = (e) => setCEwork(e.target.value);
    const onChangeDI = (e) => setDIwork(e.target.value);
    const onChangeDE = (e) => setDEwork(e.target.value);
    const onChangeMU = (e) => setMUwork(e.target.value);
    const onChangeBA = (e) => setBAwork(e.target.value);
    const onChangeID = (e) => setIDwork(e.target.value);
    const onChangeSA = (e) => setSAwork(e.target.value);

    const See = () => { document.getElementById("postDataMain").style.display = 'flex'; }
    const Ocult = () => {
        document.getElementById("postDataMain").style.display = 'none';

        // ___________________________limpia los input ___________________________
        setNwork("");
        setAwork("");
        setCEwork("");
        setDIwork("");
        setDEwork("");
        setMUwork("");
        setBAwork("");
        setIDwork("");
        setSAwork("");
    }


    // _________________________ Función para enviar los datos del formulario _________________________
    const sendData = async () => {
        try {

            const datos = {
                Nombre: Nwork,
                Apellidos: Awork,
                Cedula: CEwork,
                Direccion: DIwork,
                Departamento: DEwork,
                Municipio: MUwork,
                Barrio: BAwork,
                TipoEmpleadoId: IDwork,
                Salario: SAwork,
            };

            // Realizar la solicitud POST
            const response = await axios.post('http://localhost:3030/api/work/workers', datos, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });

            // Manejar la respuesta de la API según sea necesario
            console.log('Respuesta de la API:', response.data);
        } catch (error) {
            // Manejar errores de la solicitud
            console.error('Error al enviar los datos:', error);
        }
    };

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


            {/* /*___________________________filters_________________________ */}

            <div className='filtersMain'>
                <div>
                    <input type="search" className='Input' placeholder='Busca por su nombre' value={text} onChange={inputLoad} id="" />
                </div>
            </div>


            {/* /*___________________________card_________________________ */}
            {idWork >= 71 && idWork <= 90
                ? <div className='cardGeneral'>
                    <div className='cardNewWork' onClick={See}>
                        <p>+</p>
                    </div>
                    <p>Agregar un trabajador</p>
                    <div onClick={See}>
                        <p><b>Total de Empleados: </b>{count}</p>
                    </div>
                </div>
                : null}

            <div >
                {inputCharacters.map((data) => (
                    <div className='cardGeneral'>
                        <div className='cardGeneraSon'>
                            <b><p>Nombre: </p></b><p>{data.Nombre}</p>
                            <b><p>Apellido: </p></b><p>{data.Apellido}</p>
                            <b><p>Cedula: </p></b><p>{data.Cedula}</p>
                            <b><p>Direccion: </p></b><p>{data.Direccion}</p>
                            <b><p>Departamento: </p></b><p>{data.Departamento}</p>
                            <b><p>Municipio: </p></b><p>{data.Municipio}</p>
                            <b><p>Barrio: </p></b><p>{data.Barrio}</p>
                            <b><p>Tipo de empleado: </p></b><p>{data.TipoEmpleadoId}</p>
                            <b><p>Salario: </p></b><p>{data.Salario}</p>
                        </div>

                        {idWork >= 71 && idWork <= 90
                            ? <button className='add' onClick={(e) => { deleteWorker(e) }} value={data.Id}>Despedir a este empleado</button>
                            : null}
                        {/* <button className='edit' onClick={(e) => { SeeEdit(e) }} value={data.Id}>Editar</button> */}
                    </div>
                ))}
            </div>




            {/* ___________________________Add workers_________________________ */}

            <div className='postDataMain' id='postDataMain'>
                <div className='postData'>
                    <h2>Ingresa el nuevo trabajador</h2><hr />
                    <form onSubmit={sendData}>
                        <label htmlFor="nombre">Nombre:</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={Nwork}
                            onChange={onChangeN}
                            required
                        />

                        <label htmlFor="apellidos">Apellidos:</label>
                        <input
                            type="text"
                            id="apellidos"
                            name="apellidos"
                            value={Awork}
                            onChange={onChangeA}
                            required
                        />

                        <label htmlFor="cedula">Cédula:</label>
                        <input
                            type="text"
                            id="cedula"
                            name="cedula"
                            value={CEwork}
                            onChange={onChangeCE}
                            required
                        />

                        <label htmlFor="direccion">Dirección:</label>
                        <input
                            type="text"
                            id="direccion"
                            name="direccion"
                            value={DIwork}
                            onChange={onChangeDI}
                            required
                        />

                        <label htmlFor="departamento">Departamento:</label>
                        <input
                            type="text"
                            id="departamento"
                            name="departamento"
                            value={DEwork}
                            onChange={onChangeDE}
                            required
                        />

                        <label htmlFor="municipio">Municipio:</label>
                        <input
                            type="text"
                            id="municipio"
                            name="municipio"
                            value={MUwork}
                            onChange={onChangeMU}
                            required
                        />

                        <label htmlFor="barrio">Barrio:</label>
                        <input
                            type="text"
                            id="barrio"
                            name="barrio"
                            value={BAwork}
                            onChange={onChangeBA}
                            required
                        /><hr />

                        <table >
                            <tr>
                                <th>Gerente</th>
                                <th>Administrador</th>
                                <th>Entregador</th>
                                <th>Empleado</th>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>3</td>
                                <td>2</td>
                                <td>1</td>
                            </tr>
                        </table>
                        <label htmlFor="tipoEmpleadoId">Tipo de Empleado ID:</label>
                        <input
                            type="text"
                            id="tipoEmpleadoId"
                            name="tipoEmpleadoId"
                            value={IDwork}
                            onChange={onChangeID}
                            required
                        /><hr />


                        <label htmlFor="salario">Salario:</label>
                        <input
                            type="tel"
                            id="salario"
                            name="salario"
                            value={SAwork}
                            onChange={onChangeSA}
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
