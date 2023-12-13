import { useState } from "react";
import { getRand } from "../utils/getRand";
import { ListPageItem } from "./lists/ListPage";

export const RandomSelector = ({ itemList, keys }) => {
  const [currentItem, setCurrentItem] = useState(getRand(itemList));

  const history = [];

  const onUpdateCurrent = () => {
    history.unshift(currentItem);
    setCurrentItem(getRand(itemList));
  };

  return (
    <div className="random-item-container">
      <div className="random-item-button-block">
        <button className="left-button" onClick={onUpdateCurrent}>
          Roll
        </button>
        <button className="right-button" onClick={() => {}}>
          Recent
        </button>
      </div>
      <ListPageItem item={currentItem} KEYS={keys} />
    </div>
  );
};
