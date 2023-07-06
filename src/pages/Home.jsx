import {Link} from "react-router-dom"
import "../css/Home.css"

export default function Home(){
    return(
        <>
            <div className="homecont">
               <div className="hometitle">
                    <h1>CyprohStore</h1>
                    <p>Our products are reliable, trustworthy, and top-notch. We offer our customers quality at a great value, and satisfaction is always guaranteed. Experience the convenience and cost savings that only our products can provide.</p>
                    <Link to="/products">Purchase Our Products</Link>
               </div>
            </div>
        </>
    )
}