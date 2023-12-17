import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import "./styles/cardLists.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AllLists } from "./features/lists/AllLists.jsx";
import { ListRouter } from "./features/lists/ListRouter.jsx";
import { DmTools } from "./features/navigation/DmTools.jsx";
import { MirageCache } from "./features/mirage-rolls/MirageCache.jsx";
import { CardList } from "./features/tcg/CardList.jsx";
import { CardListsDirectory } from "./features/tcg/CardListsDirectory.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/lists",
    element: <AllLists />,
  },
  {
    path: "/lists/:listKey",
    element: <ListRouter />,
  },
  {
    path: "/dm-tools",
    element: <DmTools />,
  },
  {
    path: "/dm-tools/mirage-cache",
    element: <MirageCache />,
  },
  {
    path: "/mirage-masters",
    element: <CardListsDirectory />,
  },
  {
    path: "/mirage-masters/:listKey",
    element: <CardList />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
