import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Favorite from "./pages/Favorite/Favorite";
import Basket from "./pages/Basket/Basket";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/product/:id" element={<ProductDetail/>} />
          <Route path="/favorite" element={<Favorite/>} />
          <Route path="/basket" element={<Basket/>} />
      </Routes>
    </div>
  );
}

export default App;
