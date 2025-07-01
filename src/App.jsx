
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Fotter from './Pages/Fotter'
import ContactUs from './Pages/ContactUs'

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
      {
        path: '/', element: <Home />
      },
      {
        path: '/service', element: <h1>i'am from service</h1>
      },
      {
        path: '/about', element: <h1>i'm from about</h1>
      },
      {path:"/contact",element:<ContactUs/>}
    ]
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
