import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import BASE_URL from './config/BaseApi';

function UsersList() {
  let [users, setUsers] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    async function getUsers() {
      try {
        let res = await fetch(`${BASE_URL}/user-api/users`,
          { method: "GET", }
        )
        if (res.status === 200) {
          // extract json data
          let resObj = await res.json()
          // update the state
          setUsers(resObj.payload)
        }
      }
      catch (err) { }
    }
    getUsers();
  }, [])

  // go to user
  const gotoUser = (userObj) => {
    navigate("/user", { state: { user: userObj } })
  }
  return (
    <div>
      <h1 className='text-2xl font-semibold text-center text-gray-800 mb-6'>List of Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-10 text-center">
        {
          users?.map((userObj) => (
            <div key={userObj.email} onClick={() => gotoUser(userObj)} className="shadow-md p-10 rounded-2xl cursor-pointer">
              <p className="text-lg font-semibold">{userObj.name}</p>
              <p lassName="text-gray-600">{userObj.email}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default UsersList