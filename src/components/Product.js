import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from './Rating';

const Product = ({ product }) => {
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
          <Button style={{width:'100%'}} variant="info">Add to Cart</Button>
        </Card.Body>
        
      </div>
    </>
  );
};

export default Product;
