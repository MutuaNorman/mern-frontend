import axios from "axios"
import { useEffect, useState } from "react"
import "../css/Customers.css"

export default function Contacts(){

    const [customers, setCustomers] = useState([])
    

    useEffect(() => {
        fetchCustomers()
    }, [])

    const fetchCustomers = async() => {
        try{
            const response = await axios.get("http://localhost:3000/api/customers")
            console.log(response)
            setCustomers(response.data)
        }
        catch(error){
            console.error("Error fetching customers", error)
        }
    }

    return (
        <>
            <h1 className="customer-head">Available Customers</h1>
            {customers.length > 0 ? (
            <div>
                {customers.map((customer) => (
                    <div className="customer-card" title="click to see more" key={customer._id}>
                        <h3>{customer.name}</h3>
                        <h3>{customer.email}</h3>
                    </div>
                ))}
            </div>
            ) : (
                <p>No Customers found.</p>
            )}
        </>
    )
}