import "../css/Register.css"
import {useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"


export default function Login(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const logins = {
        email: email,
        password : password
    }

    const navigate = useNavigate()

    const handleLogin= async()=>{
        await axios.post("http://localhost:3000/api/login", logins)
        .then((res)=>{
            if(res.data.message === "Available"){
                navigate("/products")
            }
        })
    }

    return(
        <div onClick={handleLogin} className="reg">
            <div className="name">
                    <h2>Cyproh<span>Store</span></h2>
            </div>
            <input type="email" onChange={(e)=> setEmail(e.target.value)} placeholder="Enter Email"/>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
            <input type="submit" value="Login" className="regSubmit"/>
        </div>
    )
}