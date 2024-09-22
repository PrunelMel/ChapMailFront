import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<> <Outlet></Outlet></>}>
      <Route index element={<LandingPage />} />
      <Route path="/dash" element={<Dashboard />}/>
    </Route>
    
    
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
