import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Fotter from "./Pages/Fotter";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import CyprusUni from "./Pages/CyprusUni";
import NearEast from "./Pages/NearEast";
import MediteraninUni from "./Pages/MediteraninUni";
import KyreniaUni from "./Pages/KyreniaUni";
import FinalUni from "./Pages/FinalUni";
import BauUni from "./Pages/BauUni";
import OurUniversity from "./Components/Home/OurUniversity";
import ApplyNow from "./Pages/ApplyNow";
import ForgotPage from "./Pages/ForgotPage";
import OTPverify from "./Pages/OTPverify";
import ProtectedRoute from "../src/contextApi/ProtectedRoute";
import ScrollToTop from "./Components/ScrollToTop";

function MainLayout() {
  return (
    <div className="min-h-screen overflow-auto">
      <ScrollToTop />
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
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/login", element: <Login /> },
      { path: "/Signup", element: <SignUp /> },
      { path: "/universities", element: <OurUniversity /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/universities/Cyprus-International-University", element: <CyprusUni /> },
      { path: "/universities/Near-East-University", element: <NearEast /> },
      {
        path: "/universities/Eastern-Mediterranean-University",
        element: <MediteraninUni />,
      },
      { path: "/verify-account", element: <OTPverify /> },
      { path: "/universities/Kyrenia-University", element: <KyreniaUni /> },
      { path: "/universities/Final-International-University", element: <FinalUni /> },
      { path: "/universities/Bahcesehir-Cyprus-University", element: <BauUni /> },
      {
        path: "/applynow",
        element: (
          <ProtectedRoute>
            <ApplyNow />
          </ProtectedRoute>
        ),
      },
      { path: "/forgotpassword", element: <ForgotPage /> },
      { path: "/otpverify", element: <OTPverify /> },
      { path: "/dashboard", element: <Dashboard /> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
