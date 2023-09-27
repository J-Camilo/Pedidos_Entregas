import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Animation } from '../../Ui/Animation/Animation';

export const Client = () => {

    const [clients, setClients] = useState([]);
    const [filteredClients, setFilteredClients] = useState([]);
    const [text, setText] = useState('');
    const [selectedDepartamento, setSelectedDepartamento] = useState('');
    const [selectedMunicipio, setSelectedMunicipio] = useState('');
    const [activoFilter, setActivoFilter] = useState('');

    const inputLoad = (event) => { setText(event.target.value); };

    const baseURL = 'http://localhost:3030/api/client';
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
                    setClients(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            console.log("No hay token disponible. Asegúrate de iniciar sesión.");
        }
    }, []);

    //_______________________________________Deparment______________________________________

    const [Depar, setDepar] = useState([]);


    const baseURLDepar = 'http://localhost:3030/api/deparment';
    useEffect(() => {
        axios.get(baseURLDepar)
            .then((response) => {
                setDepar(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);


    //_______________________________________Municipality______________________________________

    const [Muni, setMuni] = useState([]);

    const baseURLMu = 'http://localhost:3030/api/municipality';
    useEffect(() => {
        axios.get(baseURLMu)
            .then((response) => {
                setMuni(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    //_______________________________________Filters search,  deparment and city______________________________________

    const filterClients = () => {
        const filtered = clients.filter((client) => {
            const cedulaMatch = client.Cedula.toLowerCase().includes(text.toLowerCase());
            const departamentoMatch = !selectedDepartamento || client.Departamento === selectedDepartamento;
            const municipioMatch = !selectedMunicipio || client.Municipio === selectedMunicipio;
            const activoMatch = activoFilter === '' || client.Activo === activoFilter;

            return cedulaMatch && departamentoMatch && municipioMatch && activoMatch;
        });

        setFilteredClients(filtered);
    };

    useEffect(() => {
        filterClients();
    }, [clients, text, selectedDepartamento, selectedMunicipio, activoFilter]);

    // ______________________________________Inactive client__________________________

    const Inactive = async (e) => {
        const idProduct = e.target.value;

        const data = {
            Activo: false,
        };

        // Obtener los detalles del cliente si es necesario (descomenta esta parte si es necesario)
        const baseURL = `http://localhost:3030/api/client/${idProduct}`;
        const token = localStorage.getItem("token");
        try {
            const response = await axios.get(baseURL, {
                headers: { "Authorization": `Bearer ${token}` },
            });
            if (response.status === 200) {
                const clientData = response.data;
                // Agregar las propiedades del cliente a data si tienen valores no nulos
                if (clientData.Nombre) data.Nombre = clientData.Nombre;
                if (clientData.Apellidos) data.Apellidos = clientData.Apellidos;
                if (clientData.Cedula) data.Cedula = clientData.Cedula;
                if (clientData.Direccion) data.Direccion = clientData.Direccion;
                if (clientData.Departamento) data.Departamento = clientData.Departamento;
                if (clientData.Municipio) data.Municipio = clientData.Municipio;
                if (clientData.FechaNacimiento) data.FechaNacimiento = clientData.FechaNacimiento;
                if (clientData.Telefono) data.Telefono = clientData.Telefono;
            }
        } catch (error) {
            console.error("Error al obtener los detalles del cliente:", error);
            return;
        }

        try {
            // Realizar la solicitud PUT con el objeto de datos actualizado
            const response = await axios.put(baseURL, data, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });
            window.location.reload();

            if (response.status === 204) {
                // Éxito: El cliente se marcó como inactivo con éxito (estatus 204 No Content).
                console.log("Cliente marcado como inactivo con éxito");

                // Recargar la página después de 1 segundo (puedes ajustar el tiempo)
               
            } else {
                // El servidor respondió con un código de estado inesperado.
                console.error(`Error al marcar el cliente como inactivo. Código de estado: ${response.status}`);
            }
        } catch (error) {
            // Manejar errores de red u otros errores
            console.error("Error al inactivar el cliente:", error);
        }
    };


    const Active = async (e) => {
        const idClient = e.target.value;

        const data = {
            Activo: true,
        };

        // Obtener los detalles del cliente si es necesario (descomenta esta parte si es necesario)
        const baseURL = `http://localhost:3030/api/client/${idClient}`;
        const token = localStorage.getItem("token");
        try {
            const response = await axios.get(baseURL, {
                headers: { "Authorization": `Bearer ${token}` },
            });
            if (response.status === 200) {
                const clientData = response.data;
                // Agregar las propiedades del cliente a data si tienen valores no nulos
                if (clientData.Nombre) data.Nombre = clientData.Nombre;
                if (clientData.Apellidos) data.Apellidos = clientData.Apellidos;
                if (clientData.Cedula) data.Cedula = clientData.Cedula;
                if (clientData.Direccion) data.Direccion = clientData.Direccion;
                if (clientData.Departamento) data.Departamento = clientData.Departamento;
                if (clientData.Municipio) data.Municipio = clientData.Municipio;
                if (clientData.FechaNacimiento) data.FechaNacimiento = clientData.FechaNacimiento;
                if (clientData.Telefono) data.Telefono = clientData.Telefono;
            }
        } catch (error) {
            console.error("Error al obtener los detalles del cliente:", error);
            return;
        }

        try {
            // Realizar la solicitud PUT con el objeto de datos actualizado
            const response = await axios.put(baseURL, data, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });
            window.location.reload();

            if (response.status === 204) {
                // Éxito: El cliente se marcó como inactivo con éxito (estatus 204 No Content).
                console.log("Cliente marcado como activado con éxito");

            } else {
                // El servidor respondió con un código de estado inesperado.
                console.error(`Error al marcar el cliente como activado. Código de estado: ${response.status}`);
            }
        } catch (error) {
            // Manejar errores de red u otros errores
            console.error("Error al activar el cliente:", error);
        }
    };

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


            {/* _____________________________________filter _____________________________________ */}

            <div className='filtersMain'>

                <input type="search" className='Input' placeholder='Busca por cedula' value={text} onChange={inputLoad} id="" />

                <select className="Input" value={selectedDepartamento} onChange={(e) => setSelectedDepartamento(e.target.value)}>
                    <option value="">Departamento</option>
                    {Depar.map((data) => (
                        <>
                            <option value={data.Nombre}>{data.Nombre}</option>
                        </>
                    ))}
                </select>

                <select className="Input" value={selectedMunicipio} onChange={(e) => setSelectedMunicipio(e.target.value)}>
                    <option value="">Ciudad</option>
                    {Muni.map((data) => (
                        <>
                            <option value={data.Nombre}>{data.Nombre}</option>
                        </>
                    ))}
                </select>

                <select className="Input" value={activoFilter} onChange={(e) => setActivoFilter(e.target.value)}>
                    <option value={true}>Activo</option>
                    <option value={false}>Inactivo</option>
                </select>
            </div>


            {/* _____________________________________Card_____________________________________ */}

            {filteredClients.map((data) => (
                <div className='cardGeneral'>
                    <div className='cardGeneraSon'>
                        <b><p>Nombre: </p></b><p>{data.Nombre}</p>
                        <b><p>Apellido: </p></b><p>{data.Apellidos}</p>
                        <b><p>Cedula: </p></b><p>{data.Cedula}</p>
                        <b><p>Direccion: </p></b><p>{data.Direccion}</p>
                        <b><p>Departamento: </p></b><p>{data.Departamento}</p>
                        <b><p>Municipio: </p></b><p>{data.Municipio}</p>
                        <b><p>Barrio: </p></b><p>{data.Barrio}</p>
                        <b><p>Activo: </p></b><p>{data.Activo === true ? "Activo" : "Inactivo"}</p>
                        <b><p>Fecha de Nacimiento: </p></b><p>{data.FechaNacimiento}</p>
                        <b><p>Telefono: </p></b><p>{data.Telefono}</p>
                    </div>
                    <button className='add' onClick={(e) => { Inactive(e) }} value={data.Id}>Inactivar Cliente</button>
                    <button className='buy' onClick={(e) => { Active(e) }} value={data.Id}>Activar Cliente</button>
                </div>
            ))}
        </>
    )
}
