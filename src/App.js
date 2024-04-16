import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import Products from "./Components/Products/Products";
import ProductDetails from "./Components/Products/ProductDetails";
import ProductARView from "./Components/ProductARView/ProductARView";
import ContactUs from "./Components/ContactUs/ContactUs";
import AboutUs from "./Components/AboutUs/AboutUs";
import Divider from "./Components/Divider/Divider";
import Sofaimg from "./Components/Images/sofaimg.png";
import Chair from "./Components/Images/chairimg.png";
import SideTable from "./Components/Images/sidetableimg.png";
import Drawer from "./Components/Images/drawerimg.png";
import Items from "./Components/Data/Items.json";
class App extends React.Component{
  state = {
    productsList: Items.map((item) => {
      let image = SideTable;
      if (item.category === "Armchair1") {
        image = Chair;
      } else if (item.category === "SideTable") {
        image = SideTable;
      } else if (item.category === "Sofa2") {
        image = Sofaimg;
      } else if (item.category === "Drawer") {
        image = Drawer;
      }
      else {
        image = SideTable;
      }

      return { ...item, image };
    }),
  };
  render(){
    return (
      <div className="App">
        <Navbar /> <br /><br />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Divider text="Featured Products" />
                <div className="container-fluid">
          <div className="row">
              <Products products={this.state.productsList} /></div></div>
              <Divider text="Contact Us" />
              <ContactUs />
              <Divider text="About Us" />
              <AboutUs />
            </>
            
          }
        />
        <Route
              path="/products"
              element={<Products products={this.state.productsList} />}
            />
        <Route path="/products/:id" element={<ProductDetails products={this.state.productsList} />} />
        <Route
            path="/products/ar-view/:id"
            element={<ProductARView products={this.state.products_list} />}
          />

      </Routes>
      
    </div>
    );
  }
}

export default App;