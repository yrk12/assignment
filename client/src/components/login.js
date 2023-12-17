import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { Link , useNavigate} from "react-router-dom"


const Login = ({ setLoginUser}) => {
    const [ user, setUser] = useState({
        username: "",
        password:"",
    })
    const navigate = useNavigate();

    const handleChange = e =>{
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        const {username, password} = user

        if(!(username && password)){
            alert("Please fill all Details");
        }
        else{
            axios.post("https://flexmoneybackend-cg2g.onrender.com/", user)
            .then(res => {
                if(res.data.success){
                    navigate("/enroll", {state: user})
                }
                else{
                    alert(res.data.message)
                }
            })
        }
    }

    return (
        <body>
            <div className="login">
                <h1>Login</h1>
                <input type="text" name="username" value={user.username} placeholder="Enter your Email" onChange={ handleChange }></input>
                <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={ handleChange }></input>
                <div className="button" onClick={login}>Login</div>
                <div>or</div>
                <div className="button"><Link style={{textDecoration: 'none', color: 'white'}} to="/register">Register</Link></div>
            </div>
        </body>
    )
}

export default Login