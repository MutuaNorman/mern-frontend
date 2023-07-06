import { useLoaderData, Link } from "react-router-dom"
import "../css/Products.css"

export default function Products(){
    const items = useLoaderData()

    function handleClick(item){
        console.log(item.price)
    }
    return (
        <div className="productcont">
            <div className="producttitle">
                <p>Our premium product is made from durable materials, ensuring that you get a high-quality product that is reliable and affordable. Its stylish design makes it a versatile choice for any home.</p>
            </div>
            <div className="products">
                {
                    items.map(item=>(
                        <div key={item.id} className="card">
                            <h3>{item.price}</h3>
                            <br />
                            <p>{item.description}</p>
                            <br />
                            <img src={item.image} alt="" className="image" />
                            <br />
                            <button onClick={()=>handleClick(item)}>Buy</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export const productsLoader = async()=>{
    const res = await fetch("https://fakestoreapi.com/products")
    return res.json()
}