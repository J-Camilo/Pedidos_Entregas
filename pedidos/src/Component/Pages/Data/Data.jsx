import React, { useState, useEffect } from 'react'
import { Animation } from '../../Ui/Animation/Animation';
import axios from 'axios';
import Swal from 'sweetalert2';

export const Data = () => {

  const See = () => { document.getElementById("postDataMain").style.display = 'flex'; }

  const Ocult = () => {
    document.getElementById("postDataMain").style.display = 'none';

    // limplia el formulario
    setName("");
    setLastName("");
    setIdNumber("");
    setAddress("");
    setDepartment("");
    setMunicipality("");
    setNeighborhood("");
    setBirthDate("");
    setPhoneNumber("");
  }

  const deleteLocal = () => {
    // Eliminar todos los elementos del localStorage
    localStorage.clear();
    window.location.reload();
  }

  // trae los datos de los inputs
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [address, setAddress] = useState('');
  const [department, setDepartment] = useState('');
  const [municipality, setMunicipality] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // extrae los datos 
  const handleNameChange = (e) => { setName(e.target.value); };
  const handleLastNameChange = (e) => { setLastName(e.target.value); };
  const handleIdNumberChange = (e) => { setIdNumber(e.target.value); };
  const handleAddressChange = (e) => { setAddress(e.target.value); };
  const handleDepartmentChange = (e) => { setDepartment(e.target.value); };
  const handleMunicipalityChange = (e) => { setMunicipality(e.target.value); };
  const handleNeighborhoodChange = (e) => { setNeighborhood(e.target.value); };
  const handleBirthDateChange = (e) => { setBirthDate(e.target.value); };
  const handlePhoneNumberChange = (e) => { setPhoneNumber(e.target.value); };


  // _____________________________________past data _________________________

  const [client, setClient] = useState([])

  const baseURLcount = 'http://localhost:3030/api/client';

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
          setClient(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log("No hay token disponible. Asegúrate de iniciar sesión.");
    }
  }, []);


  // _____________________________________past data _________________________

  const uploadUserData = async () => {
    // Construye un objeto con los datos del usuario
    const userData = {
      Nombre: name,
      Apellidos: lastName,
      Cedula: idNumber,
      Direccion: address,
      Departamento: department,
      Municipio: municipality,
      Barrio: neighborhood,
      FechaNacimiento: birthDate,
      Telefono: phoneNumber,
    };

    const baseURL = 'http://localhost:3030/api/client';

    const token = localStorage.getItem("token");

    try {
      // Realiza la solicitud POST con el objeto de datos y el token
      const response = await axios.post(baseURL, userData, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      Swal.fire({
        icon: 'success',
        title: 'Haz añadido correctamente los datos',
        showConfirmButton: false,
        timer: 700
      })
      if (response.status === 201) {
        console.log("Datos del usuario subidos con éxito");

        // return response.data; 
      } else {
        // El servidor respondió con un código de estado inesperado.
        console.error(`Error al subir los datos del usuario. Código de estado: ${response.status}`);
        return null;
      }
    } catch (error) {
      // Manejar errores de red u otros errores
      console.error("Error al subir los datos del usuario:", error);
      return null;
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


        <div className='UData'>
          <button className='buy' onClick={See}>Agregar datos para procesar</button>
          <button className='add' onClick={deleteLocal}>Cerrar sesion</button>
        </div>
      


      {/* ___________________________post data user_________________________ */}

      <div className='postDataMain' id='postDataMain'>
        <div className='postData'>
          <h3>Ingresa tus datos</h3><hr />
          <form onSubmit={uploadUserData}>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={handleNameChange}
            />

            <label htmlFor="lastName">Apellido</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={lastName}
              onChange={handleLastNameChange}
            />

            <label htmlFor="idNumber">Cedula</label>
            <input
              type="text"
              id="idNumber"
              name="idNumber"
              required
              value={idNumber}
              onChange={handleIdNumberChange}
            />

            <label htmlFor="address">Direccion</label>
            <input
              type="text"
              id="address"
              name="address"
              required
              value={address}
              onChange={handleAddressChange}
            />

            <label htmlFor="department">Departmento</label>
            <input
              type="text"
              id="department"
              name="department"
              required
              value={department}
              onChange={handleDepartmentChange}
            />

            <label htmlFor="municipality">Municipio</label>
            <input
              type="text"
              id="municipality"
              name="municipality"
              required
              value={municipality}
              onChange={handleMunicipalityChange}
            />

            <label htmlFor="neighborhood">Barrio</label>
            <input
              type="text"
              id="neighborhood"
              name="neighborhood"
              required
              value={neighborhood}
              onChange={handleNeighborhoodChange}
            />

            <label htmlFor="birthDate">Fecha de nacimiento</label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              required
              value={birthDate}
              onChange={handleBirthDateChange}
            />

            <label htmlFor="phoneNumber">Telefono</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              required

              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />


            <button type='submit' className='buy'>Agregar</button>
          </form>
          <button className='add' onClick={Ocult}>Salir de esta vista</button>
        </div>
      </div>
    </>
  )
}
