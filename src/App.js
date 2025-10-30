import './App.css';
import About from './Components/About'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Navbar from './Components/Navbar'
import Pricing from './Components/Pricing'
import React from 'react';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Pricing />
      <Contact />
    </main>
  );
}

export default App;
