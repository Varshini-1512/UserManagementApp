import React from 'react'
import {useLocation} from 'react-router'

function User() {
  let {state}=useLocation();
  return (
    <div>
      <p>{state?.user?.name}</p>
      <p>{state?.user?.email}</p>
      <p>{state?.user?.DOB}</p>
      <p>{state?.user?.mobileNo}</p>
    </div>
  )
}

export default User