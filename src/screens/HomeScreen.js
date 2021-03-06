import axios from "axios";
import React, { useEffect, useReducer } from "react";
import {  Col, Row, Spinner } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

import logger from "use-reducer-logger";
import Product from "../components/Product";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const HomeScreen = () => {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });
  //const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETACH_FAIL", payload: err.message });
      }

      //setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div  className="mt-6">
     
     <Helmet>
     <title>Featured Products</title>
     </Helmet>
      <h1>Featured Products</h1>
      <br></br>
      <br></br>
     
      <div className="products">
        {loading ? (
          // add to spinner
          <div> <Spinner animation="border" /></div>
        ) : error ? (
          <div> 
            {error}</div>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3}>
             
             <Product product={product}></Product>

              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
