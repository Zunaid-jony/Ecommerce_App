import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from './Rating';
import { Store } from './../Store';

const Product = ({ product }) => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
     cart:{cartItems}
    
    } = state;
  const addToCartHander = async ( item ) =>{
    const existItem  = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    // const {data} = await axios.get(`/api/products/${item._id}`)
    // if (data.countInStock < quantity) {
    //     window.alert('Sorry. Product is out of stock');
    //     return;
    //   }
      ctxDispatch({
        type: 'CART_ADD_ITEM',
        payload: { ...item, quantity },
      }); 

  }
  return (
    <>
      <div className="product" key={product.slug}>
        <Link
          style={{ textDecoration: "none" }}
          to={`/product/${product.slug}`}
        >
          <img
            src={product.image}
            className="card-img-top"
            alt={product.name}
          ></img>
        </Link>
        <Card.Body>
          <Link style={{  textDecoration:'none'}} to={`/product/${product.slug}`}>
            <Card.Title> {product.name} </Card.Title>
          </Link>
          {/* ata componets Reting */}
           <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
          <Card.Title>
              {product.price}
          </Card.Title>
          {
            product.countInStock === 0 ? <Button variant="danger" style={{width:'100%'}} disabled> Out of stock</Button>
            :     <Button onClick={ () => addToCartHander(product)} style={{width:'100%'}} variant="info">Add to Cart</Button>
          }
     
        </Card.Body>
        
      </div>
    </>
  );
};

export default Product;
