import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import AddProduct from "./pages/AddProduct";
function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/products" element={<Products />}/>
          <Route path="/products/:id" element={<ProductDetails />}/>

          {/* admin */}
          <Route path="/product/add" element={<AddProduct />}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
