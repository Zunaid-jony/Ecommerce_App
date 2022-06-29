import React from 'react';
import { useParams } from 'react-router-dom';
import { useReducer } from 'react';
import { logger } from 'use-reducer-logger';
import { useEffect } from 'react';
import { axios } from 'axios';
import Product from './../components/Product';

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
 
const ProductScreen = () => {
    const params = useParams()
    const {slug,product} = params;
    const [{ loading, error, products }, dispatch] = useReducer(reducer, {
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
        <div>
           <h1> {slug} </h1> 
         
         
        </div>
    );
};

export default ProductScreen;