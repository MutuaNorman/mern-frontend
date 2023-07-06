import axios from "axios"

// const api = axios.create({
//     baseURL: "http://localhost:3000/"
// })

export const createUser = async(userData)=>{
    try{
        const response = await axios.post("/users", userData)
        return response.data
    }catch(error){
        throw error.response.data.error
    }
}