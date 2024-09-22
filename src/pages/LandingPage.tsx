import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Section from "../components/Section"
import Features from "../components/Features"
import font from "../assets/font.png"
const LandingPage = () => {
  return (
    
    <div >
        <div className='w-screen h-screen  bg-cover bg-no-repeat' style={{backgroundImage: `url(${font})`}}>
            <Navbar></Navbar>
            <Section></Section>
            <Features></Features>
            <Footer></Footer>

        </div>
        
    </div>
    
  )
}

export default LandingPage