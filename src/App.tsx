import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route index element={<LandingPage />} />
  )
)
function App() {


  // return (
  //   <div >
  //     <div className='w-screen h-screen  bg-cover bg-no-repeat' style={{backgroundImage: `url(${font})`}}>
  //       <Navbar></Navbar>
  //       <Section></Section>
  //       <Features></Features>
  //       <Footer></Footer>

  //     </div>
      
  //   </div>
  // )

  return (
    <RouterProvider router={router} />
  )
}

export default App
