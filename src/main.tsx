import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { Home } from "./Pages/Home/Home.tsx";
import { Crew } from "./Pages/Crew/Crew.tsx";
import { Tech } from "./Pages/Tech/Tech.tsx";
import { DestinationA } from "./Pages/Destination/DestinationA/index.tsx";
import { DestinationB } from "./Pages/Destination/DestinationB";
import { Destination } from "./Pages/Destination/Destination.tsx";

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
        path: "/tech",
        element: <Tech />,
      },
      {
        path: "/destination",
        element: <Destination />,
      },
      {
        path: "/destinationA",
        element: <DestinationA />,
      },
      {
        path: "/destinationB",
        element: <DestinationB />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
