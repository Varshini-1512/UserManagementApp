import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <nav className='flex justify-between px-10 items-center bg-lime-200 py-5'>
      <img className='rounded-full w-20' src='https://tse1.mm.bing.net/th/id/OIP.KIP9gjh5CLejcseHHug7TQHaGh?rs=1&pid=ImgDetMain&o=7&rm=3' alt=""/>
      <ul className='flex gap-6 text-2xl'>
        <li>
          <NavLink to="" className={({isActive})=>(isActive?"bg-lime-500 text-lime-100 rounded-xl p-2 shadow":"")} >
            Home
          </NavLink>
        </li>
      <li>
      <NavLink to="/add-user" className={({isActive})=>(isActive?"bg-lime-500 text-lime-100 rounded-xl p-2 shadow":"")}>
      AddUser
      </NavLink>
      </li>
      <li>
        <NavLink to="/users-list" className={({isActive})=>(isActive?"bg-lime-500 text-lime-100 rounded-xl p-2 shadow":"")}>
        UsersList
        </NavLink>
      </li>
      </ul>
    </nav>
  )
}

export default Header