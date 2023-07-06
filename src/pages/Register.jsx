import "../css/Register.css"
// import {createUser} from "./api"
import {useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"


export default function Register(){

    

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const [message, setMessage] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()

        const userData = {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation
        }

        try {
            await axios.post("http://localhost:3000/api/register", userData)
            .then(res=>{
                setMessage(res.data)
            })
           
            // setName("")
            // setEmail("")
            // setPassword("")
            // setPasswordConfirmation("")
            navigate("/products")
        }catch(error){
            console.error("Error creating user", error)
        }
    }

    

    return(
        <form className="reg" onSubmit={handleSubmit} method="POST">
            <p>{message}</p>
            <div className="name">
                    <h2>Cyproh<span>Store</span></h2>
            </div>
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter Name" required/>
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" required/>
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" required/>
            <input type="password" onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Confirm Password" required/>
            <input type="submit" value="Register" className="regSubmit"/>
        </form>
    )
}