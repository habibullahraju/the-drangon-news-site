import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container} from "react-bootstrap";
import Marquee from "react-fast-marquee";


const Header = () => {
  
  return (
    <Container className="mb-2">
      <div className="text-center mt-4">
        <img src={logo} alt="" />
        <p>
          <span>Journalism Without Fear or Favour</span>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex " style={{backgroundColor:'#FAE3E9'}}>
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" pauseOnHover speed={50}>
          I can be a React component, multiple React components, or just some
          text........
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>

    </Container>
  );
};

export default Header;
