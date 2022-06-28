import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/auth'
import UserMenu from './UserMenu'
import RegisterLogin from './RegisterLogin' 
import '../App.css'

export default function Menu() {
  const { user } = useContext(AuthContext)
  const [menuStatus, setMenuStatus] = useState(false)

  const toggleMenu = () => { 
    setMenuStatus(!menuStatus)
  }

  return (
    <div className='dropdown'>
        <button onClick={toggleMenu} className='dropbtn'>Dropdown</button>
        <div id='myDropdown' className={menuStatus ? 'dropdownOpen' : 'dropdownClosed'}>
        { user ? <UserMenu 
                    setMenuStatus={setMenuStatus}
                 /> : 
                 <RegisterLogin
                    setMenuStatus={setMenuStatus}
                 />}
        </div>
    </div> 
  )
}
