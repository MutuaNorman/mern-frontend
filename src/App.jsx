import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Products, {productsLoader} from "./pages/Products.jsx"
import Customers from "./pages/Customers.jsx"
import Register from "./pages/Register.jsx"
import Login from "./pages/Login.jsx"
import "./css/App.css"
import RootLayout from "./layouts/RootLayout.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />} path="/">
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} loader={productsLoader}/>
      <Route path="customers" element={<Customers />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
)

function App() {
  return (
    <div className="container">
     <RouterProvider router={router}  />
    </div>
  )
}

export default App
