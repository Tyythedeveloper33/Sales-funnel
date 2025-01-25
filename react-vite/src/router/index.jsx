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
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element:<><HomeHeroSection/><PastClients/><KeyProblem/>
        <Testimony/><Plan/><ClientShowcase/><Packages/><PersonalStory/>
        <FAQ/><Reassurance/></>
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
    ],
  },
]);
