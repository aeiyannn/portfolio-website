import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./style.css";
import "./App.css";
import ScrollToTopper from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main/Main";
import { Provider } from "react-redux";
import Store from "./ConfigStore/Store/Store";
import ContactForm from "./components/Contact/Contact";
function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
    
  }, []);

  return (
    <Provider store={Store}>
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
       <ScrollToTopper/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/project" element={<Projects/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/contact" element={<ContactForm/>} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </Provider>
  );
}

export default App;
