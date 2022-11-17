import { Routes, Route } from "react-router-dom";
import BasketCard from "./components/basket-card";
import Product from "./components/products";
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Alışveriş Listem</h1>
      <Routes>
        <Route path="/" element={<Product/>} />
        <Route path="/basket" element = {<BasketCard/>} />
      </Routes>
    </div>
  );
}

export default App;
