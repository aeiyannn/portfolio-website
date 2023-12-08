import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { connect } from "react-redux";

function Home2(props) {
  if(props.state==="light"){
    document.body.className="body2"
  }else{
    document.body.className="body1"
  }
  return (

    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className={props.state==="light"?"home-about-description-light":"home-about-description-dark"}>
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C, Javascript </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Mobile Apps
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src="https://avatars.githubusercontent.com/u/110762239?v=4" className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12}  className={props.state==="light"?"home-about-social-light":"home-about-social-dark"}>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/aeiyannn"
                  target="_blank"
                  rel="noreferrer"
                  className={props.state==="light"?"home-social-icons-light":"home-social-icons-dark"}
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/aeiyan.khan"
                  target="_blank"
                  rel="noreferrer"
                  className={props.state==="light"?"home-social-icons-light":"home-social-icons-dark"}
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aeiyan-khan-2105bb233/"
                  target="_blank"
                  rel="noreferrer"
                  className={props.state==="light"?"home-social-icons-light":"home-social-icons-dark"}
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/itz_aeiyan_1214/"
                  target="_blank"
                  rel="noreferrer"
                  className={props.state==="light"?"home-social-icons-light":"home-social-icons-dark"}
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
  const mapStateToProps=(state)=>({
    state:state.data,
  })

  
  export default connect(mapStateToProps)(Home2)