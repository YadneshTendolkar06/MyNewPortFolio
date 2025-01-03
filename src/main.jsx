import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About.jsx'
import State from './components/state.jsx'
import Utilities from './components/utilities.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Root component
  },
      {
        path: "/about", // Relative path for "About" route
        element: <About />
      },
      {
        path: "/state", // Relative path for "About" route
        element: <State />
      },
      {
        path: "/utilities", // Relative path for "About" route
        element: <Utilities />
      }
    ]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
