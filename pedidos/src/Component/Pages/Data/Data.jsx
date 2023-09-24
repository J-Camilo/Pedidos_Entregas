import React, { useState } from 'react'

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

      <div className='UData'>
        <h2>Tus datos</h2><hr />
        <b><p>Nombre: </p></b>
        <b><p>Apellido: </p></b>
        <b><p>Cedula: </p></b>
        <b><p>Direccion: </p></b>
        <b><p>Departamento: </p></b>
        <b><p>Municipio: </p></b>
        <b><p>Barrio: </p></b>
        <b><p>Fecha de nacimiento: </p></b>
        <b><p>Telefono: </p></b>

        <button className='buy' onClick={See}>Agregar</button>
      </div>


      {/* ___________________________post data user_________________________ */}

      <div className='postDataMain' id='postDataMain'>
        <div className='postData'>
          <h2>Ingresa tus datos</h2><hr />
          <form>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={handleNameChange}
            /><br />

            <label htmlFor="lastName">Apellido:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={lastName}
              onChange={handleLastNameChange}
            /><br />

            <label htmlFor="idNumber">Cedula:</label>
            <input
              type="text"
              id="idNumber"
              name="idNumber"
              required
              value={idNumber}
              onChange={handleIdNumberChange}
            /><br />

            <label htmlFor="address">Direccion:</label>
            <input
              type="text"
              id="address"
              name="address"
              required
              value={address}
              onChange={handleAddressChange}
            /><br />

            <label htmlFor="department">Departmento:</label>
            <input
              type="text"
              id="department"
              name="department"
              required
              value={department}
              onChange={handleDepartmentChange}
            /><br />

            <label htmlFor="municipality">Municipio:</label>
            <input
              type="text"
              id="municipality"
              name="municipality"
              required
              value={municipality}
              onChange={handleMunicipalityChange}
            /><br />

            <label htmlFor="neighborhood">Barrio:</label>
            <input
              type="text"
              id="neighborhood"
              name="neighborhood"
              required
              value={neighborhood}
              onChange={handleNeighborhoodChange}
            /><br />

            <label htmlFor="birthDate">Fecha de nacimiento:</label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              required
              value={birthDate}
              onChange={handleBirthDateChange}
            /><br />

            <label htmlFor="phoneNumber">telefono:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              required

              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            /><br />


            <button type='submit' className='buy'>Agregar</button>
          </form>
          <button className='add' onClick={Ocult}>Salir de esta vista</button>
        </div>
      </div>
    </>
  )
}
