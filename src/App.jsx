import Layout from "./Layout/layout";
import ProductCreate from "./page/productCreate";
import ProductUpdate from "./page/productUpdate";
import 'react-toastify/dist/ReactToastify.css';
// import App from "./App";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Product from "./page/product";
import Calendars from "./page/calendar";
import Chart from "./page/chart";
// import   Chart  from "./page/chart";

function App() {
console.log(123);

  return (
    <>
      <React.StrictMode>
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="/" element={<Product/>}></Route>
              <Route path="/product-create" element={<ProductCreate/>}></Route>
              <Route path="/product/:productId" element={<ProductUpdate/>}></Route>
              <Route path="/celendar" element={<Calendars/>}></Route>
              <Route path="/chart" element={<Chart/>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
      <ToastContainer/>

    </>
  )
}

export default App;
