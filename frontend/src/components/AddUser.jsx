import { useState } from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate } from 'react-router'

function AddUser() {
  const {register,handleSubmit,formState:{errors}}=useForm()
  let [loading,setLoading]=useState(false);
  let [error,setError]=useState();
  let navigate=useNavigate();

  const onUserCreate=async(newUser)=>{
    setLoading(true)
    try{
      let res=await fetch("http://localhost:3000/user-api/users",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(newUser)
      })
      if(res.status===201){
        // user created it should navigate to usrer list
        navigate("/users-list")
      }
      else{
        console.log(res)
        throw new Error("error occured")
      }
    }
    catch(err){
      console.log(err)
      setError(err)
    }
    finally{
      setLoading(false)
    }
  }
  if (loading) {
    return <p className="text-center text-orange-400 text-3xl"> Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-400 text-3xl"> {error.message}</p>;
  }
  return (
    <div className="flex items-center justify-center px-4">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-xl text-center">
      <h1 className='text-2xl font-semibold text-center text-gray-800 mb-6'>Add User</h1>
        <form onSubmit={handleSubmit(onUserCreate)} className='space-y-5'>
          <div>
          <input type='text' {...register("name")} className='mb-1 border-2 m-2' placeholder='name'></input>
          </div>
          <div>
            <input type='email' {...register("email")} className='mb-1 border-2 m-2' placeholder='email'></input>
          </div>
          <div>
            <input type='date' {...register("DOB")} className='mb-1 border-2 m-2' placeholder='date of birth'></input>
          </div>
          <div>
            <input type='text' {...register("mobileNo")} className='mb-1 border-2 m-2' placeholder='mobile number'></input>
          </div>
          <div>
            <button type='submit' className='bg-blue-500 rounded-2xl p-2 cursor-pointer m-2'>Add user</button>
          </div>
        </form>
        </div>
        </div>
  )
}

export default AddUser 