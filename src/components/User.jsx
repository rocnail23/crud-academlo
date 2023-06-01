import axios from 'axios'
import React, { useEffect, useState } from 'react'
import axiosClient from '../config/axiosClient'
import UserCard from './UserCard'
const User = ({deleteUser, users,setUpdate,closeAndOpenForm,showForm}) => {




 


  return (
    <div className='container-md  bg-light mt-5 mb-5 d-flex flex-column  p-3'>

    {users.map(user => (
      <UserCard 
        key={user.id}
        user={user}
        deleteUser={deleteUser}
        setUpdate={setUpdate}
        closeAndOpenForm={closeAndOpenForm}
        showForm={showForm}/>
    ))}

    </div>
  )
}

export default User