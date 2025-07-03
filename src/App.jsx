
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Fotter from './Pages/Fotter'
import ContactUs from './Pages/ContactUs'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import CyprusInternational from './Pages/CyprusInternational'
import ApplyNow from './Pages/ApplyNow'

function MainLayout() {
  return (
    <div className=' min-h-screen overflow-auto'>
      <Navbar />
      <Outlet />
      <Fotter />
    </div>
  )
}
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {path: '/', element: <Home />},
      {path: '/service', element: <h1>i'am from service</h1>},
      { path: '/about', element: <h1>i'm from about</h1>},
      {path:"/contact",element:<ContactUs/>},
      {path:"/login",element:<Login/>},
      {path:"/Signup",element:<SignUp/>},
      {path:"/cypruspage",element:<CyprusInternational/>},
      {path:"/applynow",element:<ApplyNow/>}
    ]
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
