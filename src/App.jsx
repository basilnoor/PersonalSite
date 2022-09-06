import React from 'react'

// Importing components
import Header from './components/Header';
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio';


const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            {/* ADD Parallax here */}
            <About />
            <Skills />
            <Portfolio />

            <div style={{ height: '2000px' }}></div>
        </div>
    )
}

export default App;
