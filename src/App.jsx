import React from 'react'
import { ParallaxProvider } from "react-scroll-parallax";

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
import ParallaxBg from './components/ParallaxBg';
import Intro from './components/Intro';



const App = () => {
    return (
        <ParallaxProvider>
            <div>
                <Header />
                <HeroParallax />
                <Intro />
                <About />
                <Skills />
                <Portfolio />
                <ParallaxBg />
                <Hobbies />
                <Contact />
                <Footer />
                <BackTop />
            </div>
        </ParallaxProvider>
    )
}

export default App;
