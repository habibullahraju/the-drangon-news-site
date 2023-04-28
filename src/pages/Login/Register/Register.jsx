import {Button, Container, Form} from "react-bootstrap";
import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../../Providers/AuthProviders/AuthProviders";

const Register = () => {
  const {createUser} = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleRegister = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURl = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURl, email, password); 
    createUser(email, password)
    .then(result =>{
        const createdUser = result.user;
        console.log(createdUser);
    })
    .catch(error =>{
        console.log(error);
    })
  }
  const handleCheckTerms = event =>{
    setAccepted(event.target.checked);
  }
  return (
    <div>
      <Container className="w-25 mx-auto">
        <h2>Please Register</h2>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail0">
            <Form.Label>Photo URl</Form.Label>
            <Form.Control
              type="text"
              name="photo"
              placeholder="Photo URl"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword2">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox3">
            <Form.Check
                onClick={handleCheckTerms}
              type="checkbox"
              name="accept"
              label={<>Accepts <Link to='/terms'>terms and conditions</Link></>}
              required
            />
          </Form.Group>
          <Button variant="primary" disabled={!accepted} type="submit">
            Register
          </Button>
          <br />
          <Form.Text className="text-secondary">
            Already have an account? <Link to="/login">Login</Link>
          </Form.Text>
          <Form.Text className="text-success"></Form.Text>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
