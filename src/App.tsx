import Navbar from './components/Navbar'
import font from './assets/font.png'
import Section from './components/Section'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {

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

export default App
