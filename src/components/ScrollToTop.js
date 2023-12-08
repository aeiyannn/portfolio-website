import  React from "react";
import { useEffect } from "react"; 
import { useLocation } from "react-router-dom"; 
  
 function ScrollToToper() { 
  const routePath = useLocation(); 
  const onTop = () => { 
    window.scrollTo({ top: 0, left: 0,behavior:"instant" }); 
  } 
  useEffect(() => { 
    onTop() 
  }, [routePath]); 
  
  return null; 
}
export default ScrollToToper
