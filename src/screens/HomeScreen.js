import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "./../data";

const HomeScreen = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const fetchData = async () =>{
            const result = await axios.get('/api/products')
            setProducts(result.data)
        }
        fetchData()


    },[])
  return (
    <div>
      <h1>Featured Products</h1>
      {/* products */}

      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <Link style={{ textDecoration:'none'}} to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name}></img>
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p> {product.name} </p>
              </Link>
              <p>
                {" "}
                <strong> $ {product.price}</strong>{" "}
              </p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;