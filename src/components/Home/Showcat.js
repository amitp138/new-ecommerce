import React from "react";
import categories from "./categories.json";
import "./Showcat.css";
import { Link } from "react-router-dom";
const Home = (props) => {
  return (
    <div className="container">
      
      <div className="home">
        {categories.map((record, i) => {
          return (
            <button
              className="categories"
              name={record.id}
              onClick={props.Search}
              key={record.name}
            >
              {record.name}
            </button>
          );
        })}
      </div>
      <button className="btncategories">
        <Link to={`/Categories/:${props.keyId}`}>Categories </Link>
      </button>
    </div>
  );
};

export default Home;
