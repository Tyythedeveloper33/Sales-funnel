import { createBrowserRouter } from 'react-router-dom';
import PastClients from '../components/PastClients';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import HomeHeroSection from '../components/HeroSection';
import KeyProblem from '../components/KeyProblem';
import Testimony from '../components/Testimony';
import Plan from '../components/Plan';
import ClientShowcase from '../components/ClientShowCase';
import Packages from '../components/Packages';
import PersonalStory from '../components/PersonalStory';
import FAQ from '../components/FAQ';
import Reassurance from '../components/Reassurance';
import Dashboard from '../components/DashBoard';
import PrivateRoute from '../components/PrivateRoute';
import AuthFormPage from '../components/AuthFormPage';  // Import PrivateRoute

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HomeHeroSection />
            <PastClients />
            <KeyProblem />
            <Testimony />
            <Plan />
            <ClientShowcase />
            <Packages />
            <PersonalStory />
            <FAQ />
            <Reassurance />
          </>
        ),
      },
      {
        path: "dashboard", // Changed path to lowercase for consistency
        element: <PrivateRoute element={<Dashboard />} />, // Protect the dashboard route
      },
      {
        path: "Auth",
        element: <AuthFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
    ],
  },
]);
