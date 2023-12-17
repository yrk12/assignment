import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"

const Register =() => {
    const navigate = useNavigate();
    const [ user, setUser] = useState({
        username: "",
        password:"",
        age: "",
        name: ""
    })
    
    const handleChange = e =>{
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const {username, password, name, age} = user
        if(!(username && name && password && age)){
            alert("Please fill all Details");
        }
        else if(age<18 || age>65){
            alert("Age limit not matched")
        }
        else{
            axios.post("https://flexmoneybackend-cg2g.onrender.com/register", user)
            .then(res => {
                alert(res.data.message)
                if(res.data.success){
                    navigate("/")
                }
            })
        }
    }

    return (
        <div>
            <div className="register">
                <h1>Register</h1>
                <input type="text" name="username" value={user.username} placeholder="Enter your Email" onChange={ handleChange }></input>
                <input type="password" name="password" value={user.password} placeholder="Enter your Password"  onChange={ handleChange }></input>
                <input type="text" name="name" value={user.name} placeholder="Enter your Name" onChange={ handleChange }></input>
                <input type="number" name="age" value={user.age} placeholder="Enter your Age"  onChange={ handleChange }></input>
                <div className="button" onClick={register}>Register</div>
                <div>or</div>
                <div className="button"> <Link style={{textDecoration: 'none', color: 'white'}} to="/">Login</Link></div>
            </div>
        </div>
    )
}

export default Register