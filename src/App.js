import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./Components/Products/Products";
import ProductDetails from "./Components/Products/ProductDetails";
import ContactUs from "./Components/ContactUs/ContactUs";
import AboutUs from "./Components/AboutUs/AboutUs";
import Divider from "./Components/Divider/Divider";
import Sofaimg from "./Components/Images/sofaimg.png";
import Chair from "./Components/Images/chairimg.png";
import Dresser from "./Components/Images/dresserimg.png";
import Table from "./Components/Images/officetableimg.png";
const App = () => {
  const [productsList, setProductsList] = useState([
    {
      pid: "1",
      image: Sofaimg,
      title: "Sofa",
      subtitle: "Modern fabric loveseat sofa",
    },
    {
      pid: "2",
      image: Chair,
      title: "Chair",
      subtitle: "Mid century accent chair",
    },
    {
      pid: "3",
      image: Dresser,
      title: "Dresser",
      subtitle: "Dresser with shelves",
    },
    {
      pid: "4",
      image: Table,
      title: "Computer Desk",
      subtitle: "L-shaped computer desk with drawers",
    },
  ]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Divider text="Featured Products" />
              <div className="container-fluid">
        <div className="row">
            <Products products={productsList} /></div></div>
            <Divider text="Contact Us" />
            <ContactUs />
            <Divider text="About Us" />
            <AboutUs />
          </>
          
        }
      />
      <Route
            path="/products"
            element={<Products products={productsList} />}
          />
      <Route path="/products/:id" element={<ProductDetails products={productsList} />} />
    </Routes>
    
  </div>
  );
};

export default App;