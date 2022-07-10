import React from 'react'
import { CartState } from '../Context/ContextApi';


const SingleProduct = ({res}) => {
    const {
        state: { cart },
        dispatch,
      } = CartState();
  return (
   
     <div className="image">
              <img src={res.thumbnail} alt="hhh" />
              <div className="info">
              <b>{res.name}</b>
              <b>
                {res.currency === "USD" ? "$" : ""}
                {res.price}
              </b>
              <b>
                {res.inStock ? (
                  <div className="instock">In stock</div>
                ) : (
                  <div className="outstock"> Out of Stock </div>
                )}
              </b>
            
              <button onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: res,
                })
              }>Add to cart</button>
              </div>
            
    </div>
  )
}

export default SingleProduct