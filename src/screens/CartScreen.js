import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { Store } from './../Store';
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const CartScreen = () => {
    const {state, dispatch} = useContext(Store)
    const{
        cart: {cartItems},
    } = state;
    return (
        <div>
         
            <Helmet>
            <title>Shopping Cart</title>
            </Helmet>
            <h2>Shopping Cart</h2>
            <br></br>
            <Row> 
                <Col md={10}>
                    {cartItems.length === 0 ? (
                       <p>
                           Cart is empty. <Link to="/"> Go Shopping </Link>
                       </p>
                    ):
                    (
                       <ListGroup>
                           {cartItems.map((item) => (
                               <ListGroup.Item key={item._id}>
                                   <Row className='align-items-center show-cart'>
                                       <Col md={4}>
                                           <img 
                                           src={item.image}
                                           alt={item.name}
                                           className="img-fluid rounded img-thumbnail"
                                           
                                           ></img>{''}
                                           <Link style={{textDecoration: 'none',borderColor:'white'}} to={`/product/${item.slug}`} > {item.name}</Link>
                                       </Col>
                                       <Col md={3}>
                                           <Button variant='light' disabled={item.quantity === 1}>
                                               <i className='fas fa-minus-circle'>  </i>

                                           </Button> {''}

                                           <span> {item.quantity}</span>{''}
                                           <Button variant='light' disabled={item.quantity === 1}>
                                               <i className='fas fa-plus-circle'> </i>

                                           </Button>

                                       </Col>
                                       <Col md={3}> $ {item.price}</Col>
                                       <Col md={2}>
                                       
                                       <Button variant='light'>
                                           <i className='fas fa-trash'></i> 
                                       </Button>
                                       
                                       </Col>

                                   </Row>
                               </ListGroup.Item>
             

                           ))}
                       </ListGroup> 
                    )
                }
                </Col>
                <Col md={4}></Col>
                
            </Row> 
        </div>
    );
};

export default CartScreen;