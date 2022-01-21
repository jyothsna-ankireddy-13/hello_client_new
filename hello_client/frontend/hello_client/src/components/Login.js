import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
//import axios from 'axios'


const Login = () =>{

    const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    
    const loginOwner = async(e)=>{
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Basic ' );
        headers.append('Origin','http://localhost:5001');
        const res = await fetch("/log", {
            mode: 'cors',
            credentials: 'include',
            method: 'POST',
            headers: headers
        })
        const data = res.json()
        if(res.status=== 422 || !data){
            window.alert("Invalid credentials")
        }else{
            //window.alert("Login Successful")
            navigate('/dashboard')
        }
    
        
    }
    return (
        <>
            <section  className="signin">
                <div className="container mt-5">
                    <div className="signin-content">


                        <div className="signin-form">
                            <h2 className="form-title">SignIn</h2>
                            <form method="POST" className="signin-form" id="signin-form">
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="text" name="email" id="email" autoComplete="off" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="your email" />

                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="text" name="password" id="password" autoComplete="off" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="your password" />

                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signin" id="signin" className="form-submit" onClick={loginOwner} value="signin" />

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    )
}

export default Login

