import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HomePage } from './components/HomePage.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ShoppingPage } from './components/ShoppingPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "shop",
    element: <ShoppingPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
