import React, { useState, useContext } from 'react'
import '../App.css'
import { server } from '../config'
import { AuthContext } from '../context/auth'

export default function Login(props) {
  const context = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const updateUsername = (e) => {
    setUsername(e.target.value)
  }

  const updatePassword = (e) => {
    setPassword(e.target.value)
  }

  const clearData = () => {
    setUsername('')
    setPassword('')
  }

  const handleSubmit = (e) => {
    fetch(`${server}/api/auth/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }).then(res => {
        return res.json()
    }).then(data => {
        context.login(data);
    }).catch(err => {
        console.log(err)
    })
    e.preventDefault();
    clearData();
    props.setMenuStatus(false);
  }

  return (
    <div className='formContainer'>
      <form className='form' onSubmit={handleSubmit}>        
        <label className='label'>
          Dein Username:        
        </label>
        <input className='input' type="text" value={username} onChange={updateUsername} />
        <label className='label'>
          Passwort:        
        </label>
        <input className='input' type="text" value={password} onChange={updatePassword} />
        <input className='submitButton' type="submit" value="Submit" />
      </form>
    </div>
  )
} 
