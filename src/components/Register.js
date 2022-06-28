import React, { useState } from 'react'
import { server } from '../config'
import '../App.css'

export default function Register(props) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const updateUsername = (e) => {
    setUsername(e.target.value)
  } 

  const updateEmail = (e) => {
    setEmail(e.target.value)
  }

  const updatePassword = (e) => {
    setPassword(e.target.value)
  }

  const clearData = () => {
      setUsername('')
      setEmail('')
      setPassword('')
  }

  const handleSubmit = (e) => {
    fetch(`${server}/api/auth/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password
        })
    }).then(res => {
        return res.json()
    }).then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
    e.preventDefault();
    clearData();
    props.setLogin(true);
  }

  return (
    <div className='formContainer'>
      <form className='form' onSubmit={handleSubmit}>        
        <label className='label'>
          Username auswählen:        
        </label>
        <input className='input' type="text" value={username} onChange={updateUsername} />
        <label className='label'>
          Email:        
        </label>
        <input className='input' type="text" value={email} onChange={updateEmail} />
        <label className='label'>
          Passwort:        
        </label>
        <input className='input' type="text" value={password} onChange={updatePassword} />
        <input className='submitButton' type="submit" value="Submit" />
      </form>
    </div>
  )
}
