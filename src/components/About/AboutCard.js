import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { connect } from "react-redux";

function AboutCard(props) {
  return (
    <Card className={props.state==="light"?"quote-card-view-light":"quote-card-view-dark"}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span style={{fontWeight:"bolder"}} className="purple">Muhammad Aeiyan Khan </span>
            from <span className="purple"> Hyderabad, Pakistan.</span>
            <br />
            I am currently Learning a Newtechnology.
            <br />
            I have completed  Fsc (Intermediate) in Computer Science
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

const mapStateToProps=(state)=>({
  state:state.data,
})


export default connect(mapStateToProps)(AboutCard)
