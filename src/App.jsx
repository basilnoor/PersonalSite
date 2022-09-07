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


const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            {/* ADD Parallax here */}
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
