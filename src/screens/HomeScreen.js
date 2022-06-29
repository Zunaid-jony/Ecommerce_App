import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logger from "use-reducer-logger";


const reducer = (state, action) =>{
  switch(action.type){
    case'FETCH_REQUEST':
    return {...state, loading: true}
    case'FETCH_SUCCESS':
    return {...state, products: action.payload, loading: false}
    case'FETCH_FAIL':
    return {...state, loading:false, error:action.payload}
    default:
      return state;
  }
}

const HomeScreen = () => {

 
  const [{loading, error, products}, dispatch] = useReducer(logger(reducer),{
    products: [],
    loading: true,
    error:''
  })
  //const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({type: 'FETCH_REQUEST'})
      try{
        const result = await axios.get("/api/products");
        dispatch({type: 'FETCH_SUCCESS', payload: result.data})

      }
      catch(err){
        dispatch({type: 'FETACH_FAIL', payload: err.message})

      }
     
      //setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Featured Products</h1>
      {/* <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '} */}
      <Button variant="info">Info</Button>{' '}
      
      {/* products */}

      <div className="products">
        {
        loading ? (<div> Loading...</div>)
        :
        error ? (<div> {error}</div>
          ) : (
        products.map((product) => (
          <div className="product" key={product.slug}>
            <Link
              style={{ textDecoration: "none" }}
              to={`/product/${product.slug}`}
            >
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
              <Button variant="info">Add to Cart</Button>
            </div>
          </div>
        )))}
      </div>
    </div>
  );
};

export default HomeScreen;
