import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import axios from "axios";
import { useReducer } from "react";
import { Badge, Button, Col, Row, Spinner } from "react-bootstrap";
import Rating from "../components/Rating";
import { Helmet } from "react-helmet-async";
import { Store } from './../Store';
// npm install react-helmet-async

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const ProductScreen = () => {
  const params = useParams();
  const { slug } = params;

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: "",
  });
 

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching data-----------");
      dispatch({ type: "FETCH_REQUEST" });
      // console.log('after dispatch--------')
      try {
        console.log("inside try-------");
        const result = await axios.get(`/api/products/slug/${slug}`);
        console.log("ddddddd", result);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        console.log("err---", err);
        dispatch({ type: "FETACH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, [slug]);
  const {state, dispatch: ctxDispatch} = useContext(Store);
  const {cart} = state;

  const addToCartHandler = async() =>{
    console.log('abc..')
    const existItem = cart.cartItems.find((x) => x._id === product._id)
    console.log('cdf')
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const {data} = await axios.get(`/api/products/${product._id}`);
    if(data.countInStock < quantity){
      window.alert('Sorry. Product is out of stock')
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: {...product, quantity: 1},
    })

  }

  return loading ? (
    <div><Spinner animation="border" /></div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="margin-top">
      <Row>
        <Col sm={6} md={8} >
          <img
           className="img-large"
           src={product.image} 
           alt={product.name}></img>
        </Col>
        {/* right side */}
        <Col md={4} className="rating-product">
          <Rating Rating >
            style={{ fontSize:'20px'}}
            numReviews={product.numReviews}
            rating={product.rating}

          </Rating>
          <Helmet>
            <title>{product.name}</title>
          </Helmet>
          <h4>{product.name}</h4>

          <p>$ {product.price}  </p>
          {/* stock  */}
          

          {
            product.countInStock> 0 ?
            <Badge style={{width:'180px'}} bg="success"> In Stock</Badge>
            :
            <Badge style={{width:'180px'}} bg="danger"> Unavaiable</Badge>
            
          }

          {/* ADD to button */}
          <br></br>
          {
             product.countInStock > 0 &&
             <Button onClick={addToCartHandler} style={{width:'180px'}} variant="primary">Add to Card</Button>
          }


        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
