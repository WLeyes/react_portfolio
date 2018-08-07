// Primary React library import 
import React, { Component } from 'react';
import Logo from '../Header/Logo';
import Navigation from '../Header/Navigation';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Reviews from './Reviews';
import ContactForm from './ContactForm';
import Footer from '../Footer/Footer';

class MainContent extends Component {
  render() {
    return (
      <div className="wrapper">
        <Logo></Logo>
        <main className="container">
          <Navigation></Navigation>
          <About></About>
          <Skills></Skills>
          <h2>Recent Projects:</h2>
          <Projects></Projects>
          <h2>Completely Biased Reviews</h2>
          <h3>(Random from API and JS code)</h3>
          <Reviews></Reviews>
          <ContactForm></ContactForm>
          <Footer></Footer>
        </main>
      </div>
    )
  }
} // End MainContnet

export default MainContent;