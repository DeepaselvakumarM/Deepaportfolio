import React, { useState } from 'react';
const url="http://localhost:7000/login";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit=(()=>{
        if (email.trim()!==''&&password.trim()!==''){
          fetch(url,{
            method:"post",
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({email,password})
          })
        }
      })
    return (
        <div>
            <h1>Login</h1>
            <form >
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button onClick={handleSubmit}type="submit">Login</button>
            </form>
            <a href="/signin">Sign up here</a>
        </div>
    );
};

export default Login;
