import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from '../../../Providers/AuthProviders/AuthProviders';


const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = ()=>{
      logOut()
      .then(result =>{
        console.log(result.user);
      })
      .catch(error =>{
        console.log(error);
      })
    }
    return (
        <Container>
                  <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/category/0">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
           
          </Nav>
          <Nav>
            {user && <Nav.Link href="#deets"><FaUserCircle style={{fontSize:'1.6rem'}}></FaUserCircle></Nav.Link>}

         

            {
            user? <Link onClick={handleLogOut}><Button variant="secondary">Logout</Button></Link>
            :
            <Link to="/login"><Button variant="secondary">Login</Button></Link>
            }

         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default NavigationBar;