import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import { Addcategory } from "../pages/Dashboard/categorys/Addcategory";
import Listcategory from "../pages/Dashboard/categorys/Listcategory";
import { Editcategory } from "../pages/Dashboard/categorys/Editcategory";
import { Listproducts } from "../pages/Dashboard/products/Listproducts";
import { Addproduct } from "../pages/Dashboard/products/Addproduct";
import { Updates } from "../pages/Dashboard/products/Updates";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />

      {/* admin */}
      <Route path="/admin/category" element={<Listcategory />} />
      <Route path="/admin/product" element={<Listproducts />} />
      <Route path="/admin/category/add" element={<Addcategory />} />
      <Route path="/admin/product/add" element={<Addproduct />} />
      <Route path="/admin/category/update/:id" element={<Editcategory />} />
      <Route path="/admin/product/update/:id" element={<Updates />} />
    </Routes>
  );
};

export default Index;
