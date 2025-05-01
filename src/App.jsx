import Navbar from "./components/Navbar.jsx";
import {Hero} from "./components/Hero.jsx";
import {Aicoach} from "./components/Aicoach.jsx";
import {Courses} from "./components/Courses.jsx";
import Footer from "./components/Footer.jsx";
import FAQ from "./components/FAQ.jsx";
import TestimonialSlider from "./components/TestimonialSlider.jsx";

function App() {

  return (
    <div>
        <Navbar/>
        <Hero/>
        <Aicoach/>
        <Courses/>
        <FAQ/>

    </div>
  )
}

export default App
