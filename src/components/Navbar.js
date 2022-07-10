import React from 'react'
import { Link,Outlet } from 'react-router-dom';
import "./Navbar.css"
const Navbar = (props) => {
  return (
    <div>
         <div  className="connav">
      <div className="navbar">
      
      <nav>
      <ul>
      <li> 
      <Link id='link' to="/">Home</Link>
      </li>
      <li > 
      <Link id='link' to={`/Categories/:${props.keyId}`}>categories</Link>
      </li>
     <li>
      <Link id='link' to="/checkout">Checkout</Link>
     </li>
      
      </ul>
      </nav>
      <Outlet />

      </div>
      </div>
    </div>
  )
}

export default Navbar