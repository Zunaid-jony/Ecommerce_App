import { Container, Nav, Navbar } from "react-bootstrap";
import  Badge  from "react-bootstrap/Badge";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


import ProductScreen from "./screens/ProductScreen";
import {LinkContainer} from 'react-router-bootstrap'
import Home from './components/Home';

import { useContext } from 'react';
import { Store } from './Store';


function App() {
  const {state } = useContext(Store);
  const {cart} = state;

  return (
    <BrowserRouter>
    <div className="d-flex flex-column  site-container">
      <header>
        <Navbar  variant="dark" style={{backgroundColor:'#4C4646'}}>
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>E-commarce </Navbar.Brand>
            </LinkContainer> 
            <Nav className="me-auto">
              <Link to="/cart" className="nav-link">
                Cart
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="danger">
                    {cart.cartItems.reduce((a,c)=> a+ c.quantity, 0)}

                  </Badge>
                )}
              </Link>

            </Nav>
          </Container>
        </Navbar>
 
   
      </header>
    
      {/* <Banner></Banner> */}
      <main>
      <Container className="mt-1">
      <Routes>
          {/* <Route path="/" element={<HomeScreen></HomeScreen>}></Route> */}
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/product/:slug" element={<ProductScreen ></ProductScreen>}></Route>
        </Routes>
      </Container>

        
      </main>
      <footer>
        <div className="text-center ">

         2022 Jony all &copy; rights
          </div> 
      </footer>

    </div>
    </BrowserRouter>
  );
}

export default App;
