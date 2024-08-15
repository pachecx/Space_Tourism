import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { Home } from "./Pages/Home/Home.tsx";
import { Crew } from "./Pages/Crew/Crew.tsx";
import { Technology } from "./Pages/Tech/Tech.tsx";
import { DestinationA } from "./Pages/Destination/DestinationA/index.tsx";
import { DestinationB } from "./Pages/Destination/DestinationB";
import { DestinationC } from "./Pages/Destination/DestinationC";
import { DestinationD } from "./Pages/Destination/DestinationD";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/crew",
        element: <Crew />,
      },
      {
        path: "/Technology",
        element: <Technology />,
      },
      {
        path: "/destinationA",
        element: <DestinationA />,
      },
      {
        path: "/destinationB",
        element: <DestinationB />,
      },
      {
        path: "/destinationC",
        element: <DestinationC />,
      },
      {
        path: "/destinationD",
        element: <DestinationD />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
