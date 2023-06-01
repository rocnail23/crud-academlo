import React from 'react'

 

const UserCard = ({user, deleteUser,setUpdate,closeAndOpenForm,showForm}) => {
    const{ email,firstName, lastName, birthday,id} = user

  return (
    <div className="card d-flex flex-row justify-content-between
     align-items-center mb-3" style={{width: "100%"}}>
  <ul className="list-group" style={{width:"100%", borderRadius: "0"}}>
    <li className="list-group-item">{`${firstName} ${lastName}`}</li>
    <li className="list-group-item">{email}</li>
    <li className="list-group-item">{birthday ? birthday : "fecha de nacimiento"}</li>
  </ul>
  <div className='d-flex flex-column align-items-center gap-4 bg-primary h-100 justify-content-center' style={{width:"10%"}}>
  <span onClick={() => {
    setUpdate(user)
   if(!showForm){
    closeAndOpenForm()
   }
  }} className='bg-warning'><i className='bx bxs-edit-alt bx-md'></i></span>
  <span onClick={() => {
    deleteUser(id)
  }} className='bg-warning'> <i className='bx bxs-trash bx-md' ></i></span>

    </div>
</div>
  )
}

export default UserCard