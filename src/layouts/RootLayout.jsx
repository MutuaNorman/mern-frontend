import { NavLink, Outlet } from "react-router-dom";
import "../css/RootLayout.css"
export default function RootLayout(){
    return(
        <>
            <div className="topnav">
                <div className="name">
                    <h2>Cyproh<span>Store</span></h2>
                </div>
                <div className="links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/products">Products</NavLink>
                    <NavLink to="/customers">Customers</NavLink>
                    <NavLink to="/register">Register</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </div>
                <div className="cost">
                    <h2>$ <span></span>0.00</h2>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </>
    )
}