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
import { CardListsDirectory } from "./features/tcg/CardListsDirectory.jsx";
import { CardListPage } from "./features/tcg/CardListPage.jsx";
import { TcgTools } from "./features/navigation/TcgTools.jsx";
import { MyCollections } from "./features/tcg/MyCollections.jsx";
import { NotFound } from "./features/navigation/NotFound.jsx";
import { MyDecks } from "./features/tcg/MyDecks.jsx";
import { DeckEditor } from "./features/tcg/DeckEditor.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
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
    element: <TcgTools />,
  },
  {
    path: "/mirage-masters/lists",
    element: <CardListsDirectory />,
  },
  {
    path: "/mirage-masters/lists/:listKey",
    element: <CardListPage />,
  },
  {
    path: "/mirage-masters/collection",
    element: <MyCollections />,
  },
  {
    path: "/mirage-masters/decks",
    element: <MyDecks />,
  },
  {
    path: "/mirage-masters/decks/new-deck",
    element: <DeckEditor />,
  },
  {
    path: "/mirage-masters/decks/:deckId",
    element: <DeckEditor />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
