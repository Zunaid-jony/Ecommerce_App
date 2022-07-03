import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { Store } from './../Store';
import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';
// import axios from "axios";
import { useNavigate } from 'react-router-dom';

const CartScreen = () => {
  const  navigate = useNavigate()
    const {state, dispatch: ctxDispatch} = useContext(Store)
    const{
        cart: {cartItems},
    } = state;

    const updateCartHander = async ( item, quantity) =>{
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
    const removeItmHanler = (item) =>{
      ctxDispatch({
        type: 'CART_REMOVE_ITEM',payload: item
      })

    }

    const checkoutHandler = () =>{
      navigate('signin?redirect=/shipping')

    }
    return (
        <div>
         
            <Helmet>
            <title>Shopping Cart</title>
            </Helmet>
            <h2>Shopping Cart</h2>
            <br></br>
            <Row> 
                <Col md={8}>
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
                                           <Button 
                                           onClick={ () => updateCartHander(item, item.quantity - 1)}
                                           variant='light' disabled={item.quantity === 1}>
                                               <i 

                                               className='fas fa-minus-circle'>  </i>
                                      

                                           </Button> {''}

                                           <span> {item.quantity}</span>{''}
                                           <Button 
                                            onClick={ () => updateCartHander(item, item.quantity + 1)}
                                           variant='light'
                                         

                                            disabled={item.quantity === item.countInStock}>
                                               <i
                                                 
                                               className='fas fa-plus-circle'> </i>

                                           </Button>

                                       </Col>
                                       <Col md={3}> $ {item.price}</Col>
                                       <Col md={2}>
                                       
                                       <Button 
                                             onClick={()=> removeItmHanler(item)}
                                  
                                       variant='light'>
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
                <Col md={4}>
                <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                    items) : $
                    {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                  </h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    {/* button  */}
                    <Button

                    onClick={checkoutHandler}
                      type="button"
                      variant="primary"
                      
                      disabled={cartItems.length === 0}
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
                </Col>
                
            </Row> 
        </div>
    );
};

export default CartScreen;