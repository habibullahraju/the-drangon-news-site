import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebookF, FaGithub,FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png';


const RightNav = () => {
    return (
        <div>
            <div className='mt-4'>
                <h4>Login With</h4>
                <Button  className='w-100' variant="light"><FaFacebookF></FaFacebookF> Login with facebook</Button>
                <Button className='w-100 mt-2' variant="light"><FaGithub></FaGithub> Login with Github</Button>
            </div>
            <div>
                <h4 className='mt-4'>Find Us On</h4>
                <ListGroup>
      <ListGroup.Item><FaFacebookF></FaFacebookF>Facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram></FaInstagram>Instagram</ListGroup.Item>
    </ListGroup>
            </div>
            <div>
                <QZone></QZone>
            </div>
            <div   className='position-relative'>
                <div>
                <img className='w-100' src={bg} alt="" />
                </div>
                    <div className='position-absolute top-0 text-white p-5 mt-4 text-center'>
                    <h2 className='mb-5'>Create an Amazing Newspaper</h2>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="dark">Learn More</Button>
                    </div>

            </div>
        </div>
    );
};

export default RightNav;