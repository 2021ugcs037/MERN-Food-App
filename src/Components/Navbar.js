import React, {useState} from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Badge, { BadgeProps } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Modal from "./Modal";
import Cart from "../pages/Cart";
import {useCart , useDispatchCart} from '../Components/ContextReducer';

const Navbar = () => {
  const [cartView , setCartView] = useState(false)

  const data = useCart();

  const navigate = useNavigate();
  
  const handlelogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
        <NavLink className="navbar-brand fst-italic fw-bold" to="#">
          GoFood
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item active">
              <NavLink class="nav-link fs-5 fw-bold" to="/">
                Home{" "}
              </NavLink>
            </li>
            {localStorage.getItem("authToken") ? (
              <li>
                <Link className="btn bg-white text-succes mx-2" to="/myOrderData">
                  My Orders
                </Link>
              </li>
            ) : (
              <span></span>
            )}

            <li className="nav-item">
              <NavLink className="nav-link fs-5" aria-current="page" to="#">
                Link
              </NavLink>
            </li>

            <li className="nav-item">
              {/* <NavLink className="nav-link disabled" to="#">Disabled</NavLink> */}
            </li>
          </ul>
          {!localStorage.getItem("authToken") ? (
            <div className="d-flex" style={{ marginLeft: "auto" }}>
              <NavLink to={"/Login"}>
                {" "}
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  href="/Login"
                >
                  Login
                </button>
              </NavLink>
              <NavLink to={"/Signup"}>
                {" "}
                <button
                  type="button"
                  className="btn btn-secondary btn-lg"
                  href="/Login"
                >
                  Signup
                </button>
              </NavLink>

            </div>
          ) : (
            <div>
            <div className = "btn bg-white text-success mx-2"  onClick={() => setCartView(true)}>
            <Badge color="secondary" badgeContent= {data.length}>
             <ShoppingCartIcon/>

            </Badge>
            Cart
            </div>
            {cartView? <Modal onClose={() => setCartView(false)}><Cart /></Modal>:null}
          <div
                className="btn bg-black text-danger fw-bold mx-2"
                onClick={handlelogout}
              >
                Logout
              </div>

              <div className="btn bg-black text-success fw-bold mx-2 ">
                My Cart
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
