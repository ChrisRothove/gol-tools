import { EditorChampCard } from "../DeckEditor";
export const AccessoryPreviewBlock = ({ deck = {}, onButtonClick }) => {
  return (
    <div className="card-view">
      <EditorChampCard
        card={{ ...deck.accessories?.[0], count: 1 }}
        onClickFn={onButtonClick}
        listKey="acc"
      />
      <EditorChampCard
        card={{ ...deck.accessories?.[1], count: 1 }}
        onClickFn={onButtonClick}
        listKey="acc"
      />
      <EditorChampCard
        card={{ ...deck.accessories?.[2], count: 1 }}
        onClickFn={onButtonClick}
        listKey="acc"
      />
    </div>
  );
};
