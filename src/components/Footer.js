import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { connect } from "react-redux";

function Footer(props) {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container style={{backgroundColor:props.state==="light"?"white":"#0A0438"}} fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3 style={{ color: props.state==="light"?"black":"white",fontSize:"bold" }}>Designed and Developed by Aeiyan Khan</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3 style={{ color: props.state==="light"?"black":"white" }}>Copyright © {year} SB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/soumyajit4419"
                style={{ color: props.state==="light"?"black":"white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/Soumyajit4419"
                style={{ color: props.state==="light"?"black":"white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/soumyajit4419/"
                style={{ color: props.state==="light"?"black":"white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/soumyajit4419"
                style={{ color: props.state==="light"?"black":"white"}}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps=(state)=>({
  state:state.data,
})

export default connect(mapStateToProps)(Footer)
