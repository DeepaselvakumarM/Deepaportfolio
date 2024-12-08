import React, { useState } from 'react'
const url="http://localhost:7000/signin";

const Signin = () => {
  const[name,setname]=useState('')
  const[email,setmail]=useState('')
  const[password,setpass]=useState('')
  const handleSubmit=(()=>{
    if (name.trim()!==''&&email.trim()!==''&&password.trim()!==''){
      fetch(url,{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({name,email,password})
      })
    }
  })
  return (
    <div>
       <h1>Sign up</h1>
    <form onSubmit={handleSubmit}>
        <div>
      
            <label htmlFor="email">Name:</label>
            <input type="name" id="name" name="name"value={name} onChange={(e)=>setname(e.target.value)} required/>
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email}  onChange={(e)=>setmail(e.target.value)}required/>
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password}onChange={(e)=>setpass(e.target.value)}required/>
        </div>
        <button type="submit">Sign Up</button>
    </form>
    <a href="/login"> Login here</a>

    </div>
  )
}

export default Signin