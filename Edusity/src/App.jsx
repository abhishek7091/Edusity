
import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Videoplayer from "./Components/Videoplayer/Videoplayer";

function App() {

  const [playState, setPlayState] = useState(false);



  return (
    <div>
    <Navbar/>
    <Hero/>
    <div className="container">
    <Title subTitle='OUR PROGRAM' Title='What we offers'/>
    <Programs/>
    <About setPlayState={setPlayState}/>
    <Title subTitle='Gallery' Title='Campus Photo'/>
    <Campus/>
    <Title subTitle='TESTIMONIALS' Title='What Students Say'/>
    <Testimonials/>
    <Title subTitle='Contact Us' Title='Get in Touch '/>
    <Contact/>
    <Footer/>
    <Videoplayer playState={playState} setPlayState={setPlayState}/>
    
    
    </div>
   
    </div>
  );
}

export default App;
