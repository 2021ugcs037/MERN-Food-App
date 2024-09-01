import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { CartProvider } from './Components/ContextReducer';
import MyOrder from './pages/MyOrder';
// import Lanth from "./pages/Lanth";
const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/SignUp" element={<Signup/>}/>
          <Route path="/Login" element={<Login/>} />
          <Route path="/Cart" element={<Cart />} />
        
           
          <Route path="/myOrderData" element={<MyOrder />} />

          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
