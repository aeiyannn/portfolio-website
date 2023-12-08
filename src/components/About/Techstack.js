import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack({props}) {
  console.log(props.state)
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus style={{color:props.state==="light"?"black":"white"}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{color:props.state==="light"?"black":"white"}}>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang style={{color:props.state==="light"?"black":"white"}} />
      </Col>
      <Col xs={4} md={2}  className="tech-icons" style={{color:props.state==="light"?"black":"white"}}>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} style={{color:props.state==="light"?"black":"white"}} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{color:props.state==="light"?"black":"white"}}>
        <SiSolidity />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{color:props.state==="light"?"black":"white"}}>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{color:props.state==="light"?"black":"white"}}>
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{color:props.state==="light"?"black":"white"}}>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{color:props.state==="light"?"black":"white"}}>
        <SiFirebase />
      </Col>
    </Row>
  );
}

export default Techstack;
