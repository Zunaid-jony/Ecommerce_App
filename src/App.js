import { Container, Navbar } from "react-bootstrap";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import {LinkContainer} from 'react-router-bootstrap'


function App() {
  return (
    <BrowserRouter>
    <div className="d-flex flex-column  site-container">
      <header>
        <Navbar bg='dark' variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>E-commarce </Navbar.Brand>
            </LinkContainer> 
          </Container>
        </Navbar>
   
      </header>
      <main>
      <Container>
      <Routes>
          <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
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
