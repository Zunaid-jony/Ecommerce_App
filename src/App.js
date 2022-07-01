import { Container, Navbar } from "react-bootstrap";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import {LinkContainer} from 'react-router-bootstrap'
import Home from './components/Home';
import Banner from "./components/banner/Banner";


function App() {
  return (
    <BrowserRouter>
    <div className="d-flex flex-column  site-container">
      <header>
        <Navbar  variant="dark" style={{backgroundColor:'#f2f2f2'}}>
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>E-commarce </Navbar.Brand>
            </LinkContainer> 
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
