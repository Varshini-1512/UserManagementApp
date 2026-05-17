import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router'
import AddUser from './components/AddUser'
import UsersList from './components/UsersList'
import Rootlayout from './components/RootLayout'
import Home from './components/Home'
import User from './components/User'


function App() {
  const routerObj=createBrowserRouter([
    {
      path:"/",
      element:<Rootlayout/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"add-user",
          element:<AddUser/>
        },
        {
          path:"users-list",
          element:<UsersList/>
        },
        {
          path:"user",
          element:<User/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routerObj}/>
  )
}

export default App