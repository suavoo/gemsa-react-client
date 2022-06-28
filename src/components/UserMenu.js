import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth'
import '../App.css'

export default function UserMenu(props) {
  const { user, logout } = useContext(AuthContext)

  const loggingOut = () => {
    logout();
    props.setMenuStatus(false);
  }
 
  return (
    <div className='userMenu'>
        <div className='menuItems'>
            <Link to='/' >Mein Profil</Link>
        </div>
        <div className='menuItems'>
            <Link to='/' >Meine Calls</Link>
        </div>
        <div className='menuItems'>
            <Link to='/' >Meine Gruppen</Link>
        </div>
         <button className='logoutButton' onClick={loggingOut} >Abmelden</button>
    </div>
  )
}
