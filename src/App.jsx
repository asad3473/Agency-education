import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Fotter from './Pages/Fotter';
import ContactUs from './Pages/ContactUs';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

import CyprusUni from './Pages/CyprusUni';
import NearEast from './Pages/NearEast';
import MediteraninUni from './Pages/MediteraninUni';
import KyreniaUni from './Pages/KyreniaUni';
import FinalUni from './Pages/FinalUni';
import BauUni from './Pages/BauUni';
import OurUniversity from './Components/Home/OurUniversity';
import ApplyNow from './Pages/ApplyNow';

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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
