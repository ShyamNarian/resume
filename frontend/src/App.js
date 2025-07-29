import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;