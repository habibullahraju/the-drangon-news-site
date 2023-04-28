import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h3>Terms and conditions</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel molestiae dolore, accusamus tenetur neque suscipit odio consequatur. A, aperiam impedit commodi dolores nam harum maiores, incidunt fugiat fuga, possimus ipsum!</p>
            <p>Go back <Link to='/register'>Register</Link></p>
        </Container>
    );
};

export default Terms;