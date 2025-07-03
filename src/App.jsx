import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Fotter from './Pages/Fotter';
import ContactUs from './Pages/ContactUs';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

<<<<<<< HEAD
import CyprusUni from './Pages/CyprusUni';
import NearEast from './Pages/NearEast';
import MediteraninUni from './Pages/MediteraninUni';
import KyreniaUni from './Pages/KyreniaUni';
import FinalUni from './Pages/FinalUni';
import BauUni from './Pages/BauUni';
import OurUniversity from './Components/Home/OurUniversity';
import ApplyNow from './Pages/ApplyNow';
=======
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Fotter from './Pages/Fotter'
import About from './Pages/About'
import ContactUs from './Pages/ContactUs'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import CyprusInternational from './Pages/CyprusInternational'
import CyprusUni from './Pages/CyprusUni'
import NearEast from './Pages/NearEast'
import MediteraninUni from './Pages/MediteraninUni'
import KyreniaUni from './Pages/KyreniaUni'
import FinalUni from './Pages/FinalUni'
import BauUni from './Pages/BauUni'
import OurUniversity from './Components/Home/OurUniversity'
import ApplyNow from './Pages/ApplyNow'
>>>>>>> 1d7d32c30ec7cc1908f86f45f97c0e2a0c14f1c5

function MainLayout() {
  return (
    <div className="min-h-screen overflow-auto">
      <Navbar />
      <Outlet />
      <Fotter />
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
<<<<<<< HEAD
      { path: '/', element: <Home /> },
      { path: '/service', element: <h1>I am from service</h1> },
      { path: '/about', element: <h1>I am from about</h1> },
      { path: '/contact', element: <ContactUs /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/universities', element: <OurUniversity /> },
      { path: '/Cyprus-International-University', element: <CyprusUni /> },
      { path: '/Near-East-University', element: <NearEast /> },
      { path: '/Eastern-Mediterranean-University', element: <MediteraninUni /> },
      { path: '/Kyrenia-University', element: <KyreniaUni /> },
      { path: '/Final-International-University', element: <FinalUni /> },
      { path: '/Bahcesehir-Cyprus-University', element: <BauUni /> },
      { path: '/applynow', element: <ApplyNow /> },
    ],
  },
]);

=======
      {path: '/', element: <Home />},
      {path:"/about",element:<About/>},
      {path:"/contact",element:<ContactUs/>},
      {path:"/login",element:<Login/>},
      {path:"/Signup",element:<SignUp/>},
      {path:"/cypruspage",element:<CyprusInternational/>},
       { path: '/universities', element: <OurUniversity/>},
       {path:"/contact",element:<ContactUs/>},
      {path:"/Cyprus-International-University",element:<CyprusUni/>},
      {path:"/Near-East-University",element:<NearEast/>},
      {path:"/Eastern-Mediterranean-University",element:<MediteraninUni/>},
      {path:"/Kyrenia-University",element:<KyreniaUni/>},
      {path:"/Final-International-University",element:<FinalUni/>},
      {path:"/Bahcesehir-Cyprus-University",element:<BauUni/>},
      {path:"/cypruspage",element:<CyprusInternational/>},
      {path:"/applynow",element:<ApplyNow/>}
    ]
  }
])
>>>>>>> 1d7d32c30ec7cc1908f86f45f97c0e2a0c14f1c5
function App() {
  return <RouterProvider router={router} />;
}

export default App;
