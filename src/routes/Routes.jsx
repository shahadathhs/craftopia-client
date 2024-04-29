import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "./../pages/Login";
import Register from "../pages/Register";
import ArtCraft from "../pages/ArtCraft";
import AddCraft from "./../pages/AddCraft";
import MyArtCraft from "../pages/MyArtCraft";
import PrivateRoutes from "./PrivateRoutes";
import UserCraftDetails from "../pages/UserCraftDetails";
import UpdateCraft from "../pages/UpdateCraft";
import CardMaking from "../pages/PaperArt/CardMaking";
import PaperQuilling from "../pages/PaperArt/PaperQuilling";
import ScrapBooking from "./../pages/PaperArt/ScrapBooking";
import GlassDying from "./../pages/GlassArt/GlassDying";
import GlassPainting from "./../pages/GlassArt/GlassPainting";
import LampWorking from "../pages/GlassArt/LampWorking";
import ManualCraftDetails from "../pages/ManualCraftDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://tenth-a-craftopia-server.vercel.app/userCraft"),
      },
      {
        path: "/artCraft",
        element: <ArtCraft />,
        loader: () => fetch("https://tenth-a-craftopia-server.vercel.app/userCraft"),
      },
      {
        path: "/addCraft",
        element: (
          <PrivateRoutes>
            <AddCraft />
          </PrivateRoutes>
        ),
      },
      {
        path: "/myArtCraft",
        element: (
          <PrivateRoutes>
            <MyArtCraft />
          </PrivateRoutes>
        ),
        loader: () => fetch("https://tenth-a-craftopia-server.vercel.app/userCraft"),
      },
      {
        path: "/userCraftDetails/:id",
        element: (
          <PrivateRoutes>
            <UserCraftDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`https://tenth-a-craftopia-server.vercel.app/userCraft/${params.id}`),
      },
      {
        path: "/updateCraft/:id",
        element: (
          <PrivateRoutes>
            <UpdateCraft />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://tenth-a-craftopia-server.vercel.app/userCraft/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cardMaking",
        element: <CardMaking />,
        loader: () => fetch("https://tenth-a-craftopia-server.vercel.app/manualCraft"),
      },
      {
        path: "/paperQuilling",
        element: <PaperQuilling />,
        loader: () => fetch("https://tenth-a-craftopia-server.vercel.app/manualCraft"),
      },
      {
        path: "/scrapBooking",
        element: <ScrapBooking />,
        loader: () => fetch("https://tenth-a-craftopia-server.vercel.app/manualCraft"),
      },
      {
        path: "/glassDying",
        element: <GlassDying />,
        loader: () => fetch("https://tenth-a-craftopia-server.vercel.app/manualCraft"),
      },
      {
        path: "/glassPainting",
        element: <GlassPainting />,
        loader: () => fetch("https://tenth-a-craftopia-server.vercel.app/manualCraft"),
      },
      {
        path: "/lampWorking",
        element: <LampWorking />,
        loader: () => fetch("https://tenth-a-craftopia-server.vercel.app/manualCraft"),
      },
      {
        path: "/manualCraft/:id",
        element: <ManualCraftDetails />,
        loader: ({ params }) =>fetch(`https://tenth-a-craftopia-server.vercel.app/manualCraft/${params.id}`)
      }
    ],
  },
]);
