import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
import '../App.css'

export default function RegisterLogin(props) {
  const [login, setLogin] = useState(false)

  const toggleLoginRegister = () => {
      setLogin(!login)
  } 

  return (
    <div>
        <button className='otherButton' onClick={toggleLoginRegister}>{login ? 'Registrieren' : 'Anmelden'}</button>
        {login ? <Login setMenuStatus={props.setMenuStatus} /> : <Register setLogin={setLogin}/>}
    </div>
  )
}
