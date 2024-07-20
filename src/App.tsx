import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/products" element={<Products />}/>
          <Route path="/products/:id" element={<ProductDetails />}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
