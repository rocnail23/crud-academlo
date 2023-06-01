import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Form = ({ createUser,update,updateUser, closeAndOpenForm}) => {

   const [user, setUser] = useState({
      firstName: "",
      lastName: "",
      birthday: "",
      password: "",
      email:""
   })

   const {firstName,lastName,birthday,password,email} = user 

   const handleChange = (e) => {
      setUser({
         ...user,
         [e.target.name] : e.target.value
      })
   }

  

   const HandleSubmit = (e) => {

      e.preventDefault()
      if(update){ 
         const {firstName} = user
   
         updateUser(40, {firstName} )

      }else{
         createUser(user)
      }

      setUser({
         firstName:"",
      lastName: "",
      birthday: "",
      password:  "",
      email: "",
      })
      

   }


 

   useEffect(() => {

      if(update){
         setUser(update)
      }
   
   },[update])

   

  return (

    <div className='form-container bg-primary d-flex align-items-center flex-column  z-1'  >
         
        <header className='w-100 d-flex justify-content-center position-relative'><h2 className='mb-3 text-light'>registrar usuarios</h2><i onClick={() => closeAndOpenForm() } className='bx bxs-x-circle position-absolute end-0 text-light'></i></header>
    <form onSubmit={HandleSubmit} action="" className='justify-content-center flex-column d-flex'>
    <div className="input-group mb-2">
       <span className="input-group-text">nombre</span>
       <input value={firstName} onChange={handleChange} name='firstName' type="text" className="form-control"/>
       <span className="input-group-text">apellido</span>
       <input value={lastName} onChange={handleChange} name='lastName' type="text" className="form-control"/>
    </div>
    <div className="input-group mb-2">
    <span className="input-group-text">correo</span>
       <input value={email} onChange={handleChange} name='email' type="text" className="form-control"/>
    </div>
    <div className="input-group mb-2">
       <span className="input-group-text">contraseña</span>
       <input value={password} onChange={handleChange} name='password' type="password" className="form-control"/>
    </div>
    <div className="input-group mb-4">
       <span className="input-group-text">fecha de nacimiento</span>
       <input value={birthday} onChange={handleChange} name='birthday' type="text" className="form-control"/>
    </div>
    <button className='btn btn-success'>{update ? "actualizar": "registrar"}</button>
    </form>
    </div>
  )
}

export default Form