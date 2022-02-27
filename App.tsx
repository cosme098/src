import './App.css';
import React from 'react';
import Home from './components/home';
import Header from './components/header';
import SocialMidias from './components/social-midias';
import About from './components/About/about';
import Projects from './components/projects/index';
import Skills from './components/skills/index';
import Footer from './components/footer/index';
function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <SocialMidias/> 
      <About/>
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;

