import data from "./data";

function App() {
  return (
    <div>
      <header>
        <a href="/">E-commarce</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        {/* products */}

        <div className="products">
          {data.products.map((product) => (
            <div className="product"
             key={product.slug}>
              <img src={product.image} alt={product.name}></img>
              <p> {product.name} </p>
              <p> $ {product.price} </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
