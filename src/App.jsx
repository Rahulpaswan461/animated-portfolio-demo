import './app.scss'
import Navbar from './components/Navbar/Navbar';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Cursor from './components/cursor/Cursor';
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Test from './test';
const App = () => {
  return <div>
      <Cursor/>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    {/* The different type of parallax to give the idea of services */}
    <section id="Services" >
      <Parallax type="Services"/>
    </section>
    <section>
      <Services/> 
      {/* Services related content are available there */}
    </section>
    <section id="Portfolio">
      <Parallax type="Portfolio"/>
    </section>
    <Portfolio/>
    
   <section id="Contact">
    <Contact/>
   </section> 
    <section id="About">
     <About/>
    </section>
    {/* <Test/> */}
  </div>;
};

export default App;
