import {useState} from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';


const App = () => {
  const [st,setSt] = useState(false)

  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle="our program" title="What We Offer"/>
        <Programs />
        <About st={st} setSt={setSt}/>
        <Title subTitle="Gallery" title="Our School in Pictures"/>
        <Campus />
        <Title subTitle="Testimonials" title="What Student Says"/>
        <Testimonials />
        <Title subTitle="Contact us" title="Get in Touch"/>
        <Contact />
        <Footer />
      </div>
      <VideoPlayer st={st} setSt={setSt}/>
    </div>
  )
}

export default App
