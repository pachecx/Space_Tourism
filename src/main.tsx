import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { Home } from './Pages/Home/Home.tsx';
import { Crew } from './Pages/Crew/Crew.tsx';
import { Tech } from './Pages/Tech/Tech.tsx';
import { Destination } from './Pages/Destination/Destination.tsx';


import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/crew",
        element: <Crew />
      },
      {
        path: "/tech",
        element: <Tech />
      },
      {
        path: "/destination",
        element: <Destination />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
