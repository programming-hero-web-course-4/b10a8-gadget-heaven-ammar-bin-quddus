import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import GadgetCards from "../pages/GadgetCards";
import GadgetDetails from "../components/GadgetDetails";
import Statistics from "../pages/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('../category.json'),
        children: [
          {
            path: '/',
            element: <GadgetCards />,
            loader: () => fetch('../gadget.json')
          },
          {
            path: '/category/:category',
            element: <GadgetCards />,
            loader: () => fetch('../gadget.json')
          }
        ]
      },
      {
        path: '/gadget/:gadgetId',
        element:<GadgetDetails />,
        loader: () => fetch('../gadget.json')
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
        loader: () => fetch('../gadget.json')
      },
      {
        path: '/statistics',
        element: <Statistics />
      }
    ]
  },
]);

export default router;