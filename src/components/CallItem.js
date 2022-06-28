import React from 'react'
import '../App.css'

export default function CallItem({call}) {
  return (
    <div className='card'>
            <a href='/' >
                <h3>{call.title}</h3>
                <p>{call.location}</p>
            </a>
    </div>
  )
}
