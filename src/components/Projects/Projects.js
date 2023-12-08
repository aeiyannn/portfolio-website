import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import { connect } from "react-redux";

function Projects(props) {
  return (
    <Container fluid className={props.state==="light"?"project-section-light":"project-section-dark"}>
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ color:props.state==="light"?"black":"white"}}>
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color:props.state==="light"?"black":"white"}}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card" >
            <ProjectCard
              imgPath="https://reactjsexample.com/content/images/2021/10/olx.jpg"
              isBlog={false}
              title="Olx clone"
              description="A olx clone where user add ads and buy product with beautiful gui. A clone make with react,bootstrap,tailwandcss,firebase and netlify for hosting and continue work on it and designed it for future change"
              ghLink="https://github.com/aeiyannn/olxclone"
              demoLink="https://olx-react-clone-new.netlify.app/"
              data={props.state}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://media.geeksforgeeks.org/wp-content/uploads/20230607123804/gfg.png"
              isBlog={false}
              title="Quiz Website on React"
              description="My personal Quiz page build with react.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/aeiyannn/QuizReacttimer"
              demoLink="https://curious-lamington-421c91.netlify.app/"
              data={props.state}
            />
            
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://play-lh.googleusercontent.com/dGp-bVuxKn-J-v744tzYnruh0bUdslcQJ43PPQEXxt4vjsHr3NPB_pxECO1mp57dWjY"
              isBlog={false}
              title="Saylani Web clone"
              description="Saylani clone website which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/aeiyannn/SMIT-HYD"
              demoLink="https://we-saylani.web.app/"  
              data={props.state}            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
              data={props.state}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              data={props.state}
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              data={props.state}
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

const mapStateToProps=(state)=>({
  state:state.data,
})

export default connect(mapStateToProps)(Projects)