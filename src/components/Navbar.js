import React, { useState,useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/Aeiyanlogo.png";
import { Link } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { connect } from "react-redux";
import THEMEMain from "../ConfigStore/Action/Action";
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

function NavBar(props) {
  useEffect(() => {
   let data=localStorage.getItem("theme")
  if(data=="light"){
    props.thm("light")
    setTheme(false)
  }
  }, [])
  
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const[theme,setTheme]=useState(true)



  const Togglefunc=()=>{
    setTheme(!theme)
    if(theme){
      props.thm("light")
      localStorage.setItem("theme","light")
    }
    else{
      props.thm("dark")
      localStorage.setItem("theme","dark")
    }
  }

  const sticky=props.toggle=="light"?"sticky-light":"sticky-dark"
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  console.log(props.toggle)

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={!navColour ? "navbar" :sticky}
      variant={props.toggle=="light"?"light":"dark"}
      style={{backgroundColor:props.toggle=="light"?"#dadada":" #181a27"}}
    >
       
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item className="lightcolornav" >
              <Nav.Link  as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Contact Us
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <BootstrapSwitchButton
              width={80}
              offstyle="warning"
    checked={theme}
    onlabel={<FaMoon />}
    offlabel={<MdWbSunny style={{height:"25px",width:"30px",color:"white",marginLeft:"-10px"}} />}
    onChange={()=>Togglefunc()}
/>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
const mapStateToProps=(state)=>({
  toggle:state.data,
})

const mapdispatchToProps=(dispatch)=>({
  thm:(data)=>dispatch(THEMEMain(data))
})

export default connect(mapStateToProps,mapdispatchToProps)(NavBar)
