import React from 'react'


// Importing components
import Header from './components/Header';
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackTop from './components/BackTop';
import HeroParallax from './components/HeroParallax';
import FramerHero from './components/FramerHero';


const App = () => {
    return (
        <div>
            <Header />
            <FramerHero />
            <About />
            <Skills />
            <Portfolio />
            <Hobbies />
            <Contact />
            <Footer />
            <BackTop />
        </div>
    )
}

export default App;
