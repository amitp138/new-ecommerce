import { Route, Routes } from "react-router-dom";
import Showcat from "./components/Home/Showcat";
import Products from "./components/Home/Products";
import { useState } from "react";
import Navbar from "./components/Navbar";
import products from "./components/Home/products.json";
import CheckOut from "./components/Home/CheckOut";

function App() {
  const [keyId, setKeyID] = useState();
  const [data, setData] = useState();

  const Search = (e) => {
    console.log(e.target.name);
    setKeyID(e.target.name);
    const result = products.filter((res) => {
      return res.categoryId === e.target.name;
    });
    setData(result);
  };
  
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navbar keyId={keyId} />}>
          <Route index element={<Showcat Search={Search} keyId={keyId} />} />
          <Route
            path={`/Categories/:${keyId}`}
            element={<Products keyId={keyId} data={data}
           />}
          />
          <Route path="/checkout" element={<CheckOut/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
