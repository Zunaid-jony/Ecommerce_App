import { BrowserRouter, Route, Routes } from "react-router-dom";
import data from "./data";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
        <a href="/">E-commarce</a>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
        </Routes>
        <h1>Featured Products</h1>
        {/* products */}

        <div className="products">
          {data.products.map((product) => (
            <div className="product"
             key={product.slug}>

               <a href={`/product/${product.slug}`}> 
              <img src={product.image} alt={product.name}></img>
              </a>
             <div className="product-info">
             <a href={`/product/${product.slug}`}> 
                <p> {product.name} </p>

             </a>
                <p> <strong> $ {product.price}</strong> </p>
                <button>Add to Cart</button>
             </div>
            </div>
          ))}
        </div>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
