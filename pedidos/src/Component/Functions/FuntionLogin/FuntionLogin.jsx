import React, { useState } from 'react'
import { encriptar, desencriptar } from '../Encrypted/Encrypted';


export const FuntionLogin = () => {


  // trae los datos de los inputs
  const [employeeId, setEmployeeId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [PassVerify, setPassVerify] = useState('');

  const contraseñaEncriptar = "lfjdnd193016"
  const desencriptados_ = "lfjdnd193016"

  const Encrypted = async (e) => {
    const encriptado = await encriptar(contraseñaEncriptar, password);
    setPassVerify(encriptado)
  }

  const DesEncrypted = async (e) => {
    const desencriptado = await desencriptar(desencriptados_, PassVerify);
    // console.log(desencriptado);
  }

  // Encrypted();
  // DesEncrypted();

  // extrae los datos 
  const handleEmployeeIdChange = (e) => { setEmployeeId(e.target.value); };
  const handleUsernameChange = (e) => { setUsername(e.target.value); };
  const handlePasswordChange = (e) => { setPassword(e.target.value); };

  // const handleSubmit = (e) => {
  //   e.preventDefault(); // Prevents the default form submission

  // };
  return (
    <>
      <div className='LoginMain'>
        <form >
          <label htmlFor="employeeId">Id de empleado: </label>
          <input
            type="text"
            id="employeeId"
            name="employeeId"
            value={employeeId}
            onChange={handleEmployeeIdChange}
            required
          /><br />

          <label htmlFor="username">Nombre de usuario: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            required
          /><br />

          <label htmlFor="password">Contraseña: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          /><br />

          <button type="submit" className='buy'>Entrar</button>
        </form>
      </div>
    </>
  )
}
