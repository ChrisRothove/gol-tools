import { useParams } from "react-router";
import lists from "../../lists/cards";
import { CardList } from "./CardList";
import { useState } from "react";
import {
  PhotoSizeSelectActual,
  PhotoSizeSelectLarge,
  PhotoSizeSelectSmall,
} from "@mui/icons-material";
import { NavWithActions } from "../navigation/navWithActions";

export function CardListPage() {
  const { listKey } = useParams();
  const [size, setSize] = useState("lg");
  const actions = [
    {
      icon: <PhotoSizeSelectActual />,
      onClickFn: () => setSize("lg"),
    },
    {
      icon: <PhotoSizeSelectLarge />,
      onClickFn: () => setSize("md"),
    },
    {
      icon: <PhotoSizeSelectSmall />,
      onClickFn: () => setSize("sm"),
    },
  ];

  return (
    <>
      <h1 className="page-title">{lists[listKey]?.TITLE}</h1>
      <NavWithActions actions={actions} />
      <CardList list={lists[listKey]?.LIST} listKey={listKey} size={size} />
    </>
  );
}
