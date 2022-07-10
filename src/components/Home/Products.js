import React, { useState } from "react";

import "./Products.css";
import SingleProduct from "./SingleProduct";
const Products = (props) => {
  console.log(props.keyId);
  const [filterdata, setFilterData] = useState(props.data);
  const handledelivery = () => {
    const result = filterdata.filter((ev) => {
      return ev.delivery === true;
    });
    setFilterData(result);
  };
  const handlebestselling = () => {
    const result = filterdata.filter((ev) => {
      return ev.inStock === true;
    });
    setFilterData(result);
  };
  const handleexpensive = () => {
    const result = filterdata.filter((ev) => {
      return ev.price < 100;
    });
    setFilterData(result);
  };
  const RemoveFilter = () => {
    setFilterData(props.data);
  };

  return (
    <div className="Items">
      <div className="filter">
        <h1>Filter</h1>
        <div className="inp">
        <button  name="delhivery" onClick={handledelivery}>
          delivery
        </button>
        </div>
        <div className="inp">
        <button  name="bestselling" onClick={handlebestselling}>
          Bestselling
        </button>
        </div>
        <div className="inp">
        <button className="inp" name="expensive" onClick={handleexpensive}>
          Expensive
        </button>
        </div>
        <div className="inp">
        <button className="inp" name="remove" onClick={RemoveFilter}>
          remove filter
        </button>
        </div>
      </div>
      <div>
        <div className="heading">
          {props.keyId === "fgsa2142fa" ? (
            <h1>Keyboaard </h1>
          ) : (
            <h1>Headphones</h1>
          )}
        </div>
        <div className="Itemdiv">
          {filterdata.map((res) => {
            return <SingleProduct res={res} />;
          })}
        </div>
        <button>checkout</button>
      </div>
    </div>
  );
};

export default Products;
