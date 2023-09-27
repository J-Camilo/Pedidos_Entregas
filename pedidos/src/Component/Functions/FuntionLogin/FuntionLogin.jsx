import axios from 'axios';
import React, { useState } from 'react'
import { encriptar, desencriptar } from '../Encrypted/Encrypted';
import Swal from 'sweetalert2';

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

  //___________________________________________________ login ____________________________________



  const getApi = async (token) => {
    try {
      const response = await axios.get('http://localhost:3030/api/user', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
      });

      response.data.map(async (data) => {
        try {
          const desencriptado = await desencriptar(desencriptados_, data.Contraseña);
          // console.log(desencriptado);
          if (username === data.Usuario && password === desencriptado) {
            Swal.fire({
              icon: 'success',
              title: 'Los datos son correctos, redirigiendo',
              showConfirmButton: false,
              timer: 1400
            })
            localStorage.setItem("valiLogin", true)
            localStorage.setItem("222nasnbbwxiiwnxiiw", data.Id)
            localStorage.setItem("namedmaoooDn3", data.EmpleadoId)

            setEmployeeId("");
            setUsername("");
            setPassword("");
            setTimeout(() => {
              window.location.reload();
            }, 2000); // 2000 milisegundos (2 segundos)
          } 
          // else if (username !== data.Usuario && password !== desencriptado) {
          //   Swal.fire({
          //     icon: 'error',
          //     title: 'Los datos son Incorrectos, vuelve a intentar',
          //     showConfirmButton: false,
          //     timer: 1400
          //   })
          // }

        } catch (error) {
          console.error("Error en desencriptar:", error);
        }
      });
    } catch (error) {
      console.error("Error en axios.get:", error);
    }
  }



  //____________________________________________ register __________________________________


  const postApi = async (e) => {

    const encriptado = await encriptar(contraseñaEncriptar, password);
    const data = {
      EmpleadoId: employeeId,
      Usuario: username,
      Contraseña: encriptado,
    };

    axios.post('http://localhost:3030/api/user', data, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    });
    console.log(encriptado);
    console.log("Todo está bien...");
    localStorage.setItem("CRQsDul8xCamE", true);

    Swal.fire({
      icon: 'success',
      title: 'Te haz resistrado con exito',
      showConfirmButton: false,
      timer: 1400
    })
    setEmployeeId("");
    setUsername("");
    setPassword("");
  };

  const postApiC = async (e) => {

    const encriptado = await encriptar(contraseñaEncriptar, password);
    const data = {
      Usuario: username,
      Contraseña: encriptado,
    };

    axios.post('http://localhost:3030/api/user', data, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    });
    console.log(encriptado);
    console.log("Todo está bien...");
    localStorage.setItem("CRQsDul8xCamE", true);

    Swal.fire({
      icon: 'success',
      title: 'Te haz resistrado con exito',
      showConfirmButton: false,
      timer: 1400
    })
    setEmployeeId("");
    setUsername("");
    setPassword("");
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
      getApi();

    })
      .catch(function (error) {
        console.log(error);
      });
  };



  const handleS = (e) => {
    e.preventDefault(); // Prevents the default form submission
    axios.post("http://localhost:3030/api/login", {
      username,
      password,
    }).then(function (response) {
      console.log(response);
      localStorage.setItem("token", response.data.token);
      postApi();

    })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleC = (e) => {
    e.preventDefault(); // Prevents the default form submission
    axios.post("http://localhost:3030/api/login", {
      username,
      password,
    }).then(function (response) {
      console.log(response);
      localStorage.setItem("token", response.data.token);
      postApiC();

    })
      .catch(function (error) {
        console.log(error);
      });
  };



  return (
    <>

      {/*-_____________________________________ worker ______________________________*/}

      <div className='LoginMain' id='LoginMainWorker'>
        <h3>Registro de empleado</h3><hr /><br />
        <form onSubmit={handleS}>
          <label htmlFor="employeeId">Id de empleado: </label>
          <input
            type="text"
            id="employeeId"
            name="employeeId"
            value={employeeId}
            onChange={handleEmployeeIdChange}
            required
          />

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

      {/*-_____________________________________ client ______________________________*/}

      <div className='LoginMain' id='LoginMainClient'>
        <h3>Registro de cliente</h3><hr /><br />
        <form onSubmit={handleC}>
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


      {/*-_____________________________________ login ______________________________*/}

      <div className='LoginMain' id='LoginMain'>
        <h3>Login</h3><hr /><br />
        <form onSubmit={handleSubmit} >
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
        <button className='buy' onClick={SeeClient}>Resgistra Usuario</button>
        <button className='add' onClick={SeeWorker}>Resgistra Trabajador</button>
        <button className="buy" onClick={SeeLogin}>Ya tienes cuenta, Ingresa</button>
      </div>



    </>
  )
}
