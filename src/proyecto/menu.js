import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import {Outlet,Link} from 'react-router-dom';

import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';


const Menu = () => {
  return (
    <>

   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand><Link  className="bold" to="/">
        Sociedad de Heroes y Villanos
        </Link></Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          
          <Navbar.Brand><Link className="color" to="/heroe"><Image src="wonderwoman.png"></Image> 
          <Link className="color" to="/heroe">Ingresar heroe</Link>
        </Link></Navbar.Brand>
        <Navbar.Brand><Link className="color" to="/villanos"><Image src="joker.png"></Image> 
           <Link className="color" to="/villanos">Ingresar villano</Link>
        </Link></Navbar.Brand>
        <Navbar.Brand><Link className="color" to="/acercade"><Image src="deadpool.png"></Image> 
           <Link className="color" to="/acercade">Acerca de</Link>
        </Link></Navbar.Brand>
           
          </Nav>
          <Nav>
            <Nav.Link href="https://react-bootstrap.github.io/">ReactBoostrap</Nav.Link>
            <Nav.Link eventKey={2} href="https://getbootstrap.com/">
              Bootstrap
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container> 
    </Navbar>
    <Outlet />
    </>
    
    )
}
    
  

export default Menu;