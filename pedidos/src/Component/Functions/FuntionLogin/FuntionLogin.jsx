import axios from 'axios';
import React, { useState } from 'react'
import { encriptar, desencriptar } from '../Encrypted/Encrypted';

export const FuntionLogin = () => {

  // trae los datos de los inputs
  const [employeeId, setEmployeeId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // extrae los datos 
  const handleEmployeeIdChange = (e) => { setEmployeeId(e.target.value); };
  const handleUsernameChange = (e) => { setUsername(e.target.value); };
  const handlePasswordChange = (e) => { setPassword(e.target.value); };


  const contraseñaEncriptar = "lfjdnd193016"
  const desencriptados_ = "lfjdnd193016"

  const SeeLogin = () => {
    document.getElementById("LoginMain").style.display = 'flex';
    document.getElementById("MainOption").style.display = 'none';
  }
  const SeeWorker = () => {
    document.getElementById("LoginMainWorker").style.display = 'flex';
    document.getElementById("MainOption").style.display = 'none';
  }
  const SeeClient = () => {
    document.getElementById("LoginMainClient").style.display = 'flex';
    document.getElementById("MainOption").style.display = 'none';
  }
  const Back = () => {
    document.getElementById("LoginMain").style.display = 'none';
    document.getElementById("LoginMainClient").style.display = 'none';
    document.getElementById("LoginMainWorker").style.display = 'none';
    document.getElementById("MainOption").style.display = 'flex';

    setEmployeeId("");
    setUsername("");
    setPassword("");
  }


  //____________________________________________ login __________________________________
  // const getApi = async () => {
  //   const response = await axios.get('http://localhost:3030/api/user', {
  //     headers: {
  //       "Authorization": `Bearer ${localStorage.getItem("token")}`
  //     }
  //   }).then(function (response) {

  //     response.data.map(async (data) => {
        
  //       const desencriptado = await desencriptar(desencriptados_, data.Contraseña);
  //       console.log(desencriptado);
  //       if (username === data.Usuario && password === desencriptado) {
  //         console.log("entraste");
  //       } else {
  //         console.log("error al ingresar")
  //       }
  //     });
  //   }).catch(function (error) {
  //     console.log(error);
  //   })
  // };

  const getApi = async (token) => {
    try {
      const response = await axios.get('http://localhost:3030/api/user', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
      });
  
      response.data.map(async (data) => {
        const desencriptado = await desencriptar(desencriptados_, data.Contraseña);
        if (username === data.Usuario && password === desencriptado) {
          console.log("entraste");
        } else {
          console.log("no tienes el token");
        }
      });
    } catch (error) {
      // handle error
      console.log(error);
    }
  }
  
  


  //____________________________________________ register __________________________________


  const postApi = async (e) => {

    const encriptado = await encriptar(contraseñaEncriptar, password);
    const data = {
      EmpleadoId: employeeId,
      Usuario: username,
      Contraseña: encriptado, // Usar la variable encriptado en lugar de randomN si es lo que necesitas
    };

    axios.post('http://localhost:3030/api/user', data, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    });
    console.log(encriptado);
    console.log("Todo está bien...");
    localStorage.setItem("CRQsDul8xCamE", true);
  };


  // optiene el token
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission
    axios.post("http://localhost:3030/api/login", {
      username,
      password,
    }).then(function (response) {
      localStorage.setItem("token", response.data.token);
      console.log("todo esta bien");
    })
      .catch(function (error) {
        console.log(error);
      });
    getApi();
  };

  const handleS = (e) => {
    e.preventDefault(); // Prevents the default form submission
    axios.post("http://localhost:3030/api/login", {
      username,
      password,
    }).then(function (response) {
      console.log(response);
      localStorage.setItem("token", response.data.token);
    })
      .catch(function (error) {
        console.log(error);
      });
    postApi();
  };



  return (
    <>
      {/*-_____________________________________ worker ______________________________*/}

      <div className='LoginMain' id='LoginMainWorker'>
        <h2>Registro de empleado</h2><hr />
        <form onSubmit={handleS}>
          <label htmlFor="employeeId">Id de empleado: </label><br />
          <input
            type="text"
            id="employeeId"
            name="employeeId"
            value={employeeId}
            onChange={handleEmployeeIdChange}
            required
          />

          <label htmlFor="username">Nombre de usuario: </label><br />
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />

          <label htmlFor="password">Contraseña: </label><br />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          <button type="submit" className='buy'>Entrar</button>
        </form>
        <button type="submit" className='add' onClick={Back}>Regresar</button>

      </div>

      {/*-_____________________________________ client ______________________________*/}

      <div className='LoginMain' id='LoginMainClient'>
        <h2>Registro de cliente</h2><hr />
        <form >
          <label htmlFor="username">Nombre de usuario: </label><br />
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />

          <label htmlFor="password">Contraseña: </label><br />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          <button type="submit" className='buy'>Entrar</button>
        </form>
        <button type="submit" className='add' onClick={Back}>Regresar</button>

      </div>


      {/*-_____________________________________ login ______________________________*/}

      <div className='LoginMain' id='LoginMain'>
        <h2>Login</h2><hr />
        <form onSubmit={handleSubmit} ><br />
          <label htmlFor="username">Nombre de usuario: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />

          <label htmlFor="password">Contraseña: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          <button type="submit" className='buy'>Entrar</button>
        </form>
        <button type="submit" className='add' onClick={Back}>Regresar</button>

      </div>
      <div className='MainOption' id='MainOption'>
        <button className='buy' onClick={SeeClient}>Restrarte Usuario</button>
        <button className='add' onClick={SeeWorker}>Trabajador</button>
        <button className="buy" onClick={SeeLogin}>Ya tienes cuenta, Ingresa</button>
      </div>



    </>
  )
}
