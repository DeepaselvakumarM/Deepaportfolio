import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import Signin from './components/Signin'


function App() {
  return (
    <div className="App">
        {/* <Signin /> */}
        <Header/>
        <Hero />
        <About/>
        <Projects/>
        <Skills />
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
