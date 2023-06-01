import { Fragment, useEffect, useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import User from './components/User'
import axios from 'axios'
import axiosClient from './config/axiosClient'

function App() {

  
  const [update, setUpdate] = useState()
  const [users , setUsers] = useState([])
  const [showForm, setShowForm] = useState(true)
  const getAllUser = async () => {
    try {
        let users = await axiosClient("user")
        setUsers(
          users.data
        )
    } catch (error) {
        console.log(error)
    }

}

  const createUser= async(user) => {
     let res = await axiosClient.post("user",user)
    console.log(res)
    getAllUser() 
  }

  const deleteUser = async(id) => {
    try {
      let res = await axiosClient.delete(`user/${id}`)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
    getAllUser() 
   
  }
  
  const updateUser = async(id, user) => {
   try {
    let res = await axiosClient.put(`user/${id}`, user)
    console.log(res)
    setUpdate("")
    getAllUser()
   } catch (error) {
    console.log(error)
   }

  }
  
  useEffect(() => {
    
    getAllUser() 
},[])

  const closeAndOpenForm = () => {
    setShowForm(!showForm)
  }

 

  return (
   <Fragment>
    <Header/>
    <main className='container d-flex '>

      {showForm ? <Form 
       update={update}
       showForm={showForm}
       createUser={createUser}
       updateUser={updateUser}
       closeAndOpenForm={closeAndOpenForm}
       /> : null}
      
      <User deleteUser={deleteUser}
        users={users}
        setUpdate={setUpdate}
        closeAndOpenForm={closeAndOpenForm}
        showForm={showForm}/>
    </main>
    <button onClick={() => {
       closeAndOpenForm()
    
    }} type="button" className="btn btn-success btn-create">{showForm? "cerrar formulario": "crear usuario" }</button>
   </Fragment>
  )
}

export default App
