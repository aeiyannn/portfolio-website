import React from 'react'
import Particle from '../Particle'
import { Container, Toast } from 'react-bootstrap'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import * as  emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm(props) {
const [user,Setuser]=useState({
  name:"",
  email:"",
  message:""
})
const serviceId="service_9a3tuj4"
const templateId="template_0deq5n8"
const userId="-cuD73Q4dg_dUhg4d"
const handlechg=(e)=>{
  Setuser({...user,[e.target.name]:e.target.value})
}
const submitform=()=>{
  console.log(user)
  if(user.name===""&&user.email===""&&user.message===""){
   toast.error("enter invalid Data")
  }
  else{
    const Data={
      from_name:user.name,
      from_email:user.email,
      message:user.message
    }
    emailjs.send(serviceId,templateId,Data,userId)
    .then((result) => {
      toast.success("Message Send Succesfully",{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
     Setuser({
  name:"",
  email:"",
  message:""
})
  }, (error) => {
      toast.error("Something Went Wrong");
      console.log(error)
  });
};

  }

  return (
    <>
    <Particle />
    <ToastContainer/>
   <Container fluid className={props.state==="light"?"resume-section-light":"resume-section-dark"}>
    <div className='Contact-form'>
      <h1 style={{fontFamily:"revert",fontWeight:"bold"}}>Contact US</h1>
      <input value={user.name} name='name' type='text' className='input_contact' placeholder="Your Name"  onChange={(e)=>handlechg(e)} required />
      <input value={user.email} name='email' type='text' className='input_contact' placeholder="Your email" onChange={(e)=>handlechg(e)}  />
      <input value={user.message} name='message' type='text' className='input_contact' placeholder="Enter Message"  onChange={(e)=>handlechg(e)} />

      <button 
      onClick={()=>submitform()}
      className='contact-btn'>
        Submit
        <FaArrowRight style={{margin:4}} />
      </button>
    </div>
    </Container>
    </>
  )
}
const mapStateToProps=(state)=>({
  state:state.data,
})
export default connect(mapStateToProps)(ContactForm)
