import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from './../pages/Login';
import Register from "../pages/Register";
import ArtCraft from "../pages/ArtCraft";
import AddCraft from './../pages/AddCraft';
import MyArtCraft from "../pages/MyArtCraft";
import PrivateRoutes from "./PrivateRoutes";
import UserCraftDetails from "../pages/UserCraftDetails";
import UpdateCraft from "../pages/UpdateCraft";
import CardMaking from "../pages/PaperArt/CardMaking";
import PaperQuilling from '../pages/PaperArt/PaperQuilling';
import ScrapBooking from './../pages/PaperArt/ScrapBooking';
import GlassDying from './../pages/GlassArt/GlassDying';
import GlassPainting from './../pages/GlassArt/GlassPainting';
import LampWorking from "../pages/GlassArt/LampWorking";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('http://localhost:5000/userCraft')
      },
      {
        path: '/artCraft',
        element: <ArtCraft />,
        loader: () => fetch('http://localhost:5000/userCraft')
      },
      {
        path: '/addCraft',
        element: <PrivateRoutes><AddCraft /></PrivateRoutes>,
      },
      { 
        path: '/myArtCraft',
        element: <PrivateRoutes><MyArtCraft /></PrivateRoutes>,
        loader: () => fetch('http://localhost:5000/userCraft')
      },
      {
        path: '/userCraftDetails/:id',
        element: <PrivateRoutes><UserCraftDetails /></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/userCraft/${params.id}`) 
      },
      {
        path: '/updateCraft/:id',
        element: <PrivateRoutes><UpdateCraft /></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/userCraft/${params.id}`) 
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/cardMaking',
        element: <CardMaking />,
      },
      {
        path: '/paperQuilling',
        element: <PaperQuilling />,
      },
      {
        path: '/scrapBooking',
        element: <ScrapBooking />,
      },
      {
        path: '/glassDying',
        element: <GlassDying />,
      },
      {
        path: '/glassPainting',
        element: <GlassPainting />,
      },
      {
        path: '/lampWorking',
        element: <LampWorking />,
      },
    ]
  },
]);