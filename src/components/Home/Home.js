import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { connect } from "react-redux";

function Home(props) {
  console.log(props.state)
  // const[theme,setTheme]=useState(props.state)
  return (
    <section>
      <Container fluid className={props.state=="light"?"home-section-light":"home-section-dark"} id="home">
        <Particle />
        <Container className={props.state=="light"?"home-content-light":"home-content-dark"}>
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Aeiyan Khan</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}
const mapStateToProps=(state)=>({
  state:state.data,
})

export default connect(mapStateToProps)(Home)
