import { Route, Routes } from "react-router";
import Home from "./page/Home";
import Layout from "./Layout";
import AddProduct from "./page/AddProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Route>
    </Routes>
  );
}

export default App;
