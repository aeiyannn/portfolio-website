import React from "react";
import { useEffect } from "react";

function Pre(props) {
    let data=localStorage.getItem('theme')
  
  return <div style={{backgroundColor:data=="light"?"#dadada":"#0c0513"}} id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
