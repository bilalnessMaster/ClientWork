import Lenis from "lenis";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import { useEffect } from "react";

import Design from "./components/Design";
import Content from "./components/Content";
import Behind from "./components/Behind";
import Photos from "./components/Photos";
import Results from "./components/Results";
import About from "./components/About";
import Footer from "./components/Footer";




export default function App() {
  useEffect(() => {
    // Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data


// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
},[])
  return (
    <>
    <Wrapper>
      <NavBar />
      <Hero />
    </Wrapper>
    <Content />
    <Design />
    <Behind />
    <Photos />
    <Results/>
    <About />
    <Footer /> 
    

    
    </>
  )
}