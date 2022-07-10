import { useEffect, useState } from "react";

import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../Context/ContextApi";
import "./CheckOut.css";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className="home">
      <div className="productContainer">
      <table>
            <tr>
              <th>photo</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>delete</th>
             
            </tr>
            
        {cart.map((prod) => (
          <tr  >
            <td ><img  className='cartimg' src={prod.thumbnail} alt={prod.name} /></td>
           <td> <span>{prod.name}</span></td>
            <td> ₹ {prod.price}</td>
           <td> <input
           className="inp"
              type="number"
              value={prod.qty}
              onChange={(e) =>
                dispatch({
                  type: "CHANGE_CART_QTY",
                  payload: {
                    id: prod.id,
                    qty: e.target.value,
                  },
                })
              }
            /></td>
            <td>
            <button
              type="button"
              variant="light"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              <AiFillDelete fontSize="20px" />
            </button>
            </td>
            </tr>
        ))}
        
        </table>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
      </div>
    </div>
  );
};

export default Cart;
