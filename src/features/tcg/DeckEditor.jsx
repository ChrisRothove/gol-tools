import { useParams } from "react-router";
import { useDecksLS } from "../hooks/useDecksLS";
import { useState } from "react";
import { ChampCard, ComCard } from "./CardList";
import { NavNoActions } from "../navigation/navNoActions";
import PersonIcon from "@mui/icons-material/Person";
import DiamondIcon from "@mui/icons-material/Diamond";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import StyleIcon from "@mui/icons-material/Style";
import { useDeckEditor } from "../hooks/useDeckEditor";
import { useCardListDrawer } from "../hooks/useCardListDrawer";
import { Drawer } from "@mui/material";
import { CommandSetList } from "./list-items/CommandSetList";
import { CommandPreviewBlock } from "./list-items/CommandPreviewBlock";
import { AccessoryPreviewBlock } from "./list-items/AccessoryPreviewBlock";
import { DeckStats } from "./list-items/DeckStats";

export const EditorChampCard = ({
  card,
  onClickFn = () => {},
  listKey = "champ",
  disabled = false,
}) => (
  <button
    className={`card-slot ${card ? "" : "card-slot-empty"} ${
      disabled ? "disabled-slot" : ""
    }`}
    onClick={(e) => onClickFn(listKey, card, e)}
    disabled={disabled}
  >
    {card ? <ChampCard card={card} size={"sm"} showCount /> : "+"}
  </button>
);

export const EditorComCard = ({
  card,
  onClickFn = () => {},
  disabled = false,
}) => (
  <button
    className={`card-slot ${card ? "" : "card-slot-empty"} ${
      disabled ? "disabled-slot" : ""
    }`}
    onClick={(e) => onClickFn("com", card, e)}
  >
    {card ? <ComCard card={card} size={"sm"} showCount /> : "+"}
  </button>
);

const ChampCardBlock = ({ onButtonClick, deck = {} }) => (
  <div className="card-view">
    <EditorChampCard
      card={{ ...deck.champions?.[0], count: 1 }}
      onClickFn={onButtonClick}
    />
    <EditorChampCard
      card={{ ...deck.champions?.[1], count: 1 }}
      onClickFn={onButtonClick}
    />
    <EditorChampCard
      card={{ ...deck.champions?.[2], count: 1 }}
      onClickFn={onButtonClick}
    />
  </div>
);

export function DeckEditor() {
  const { deckId } = useParams();

  const {
    deck,
    setName,
    submitDeck,
    getTotalCP,
    getTotalCPUsed,
    rules,
    tryAddToDeck,
  } = useDeckEditor(deckId);

  const {
    selectedCard,
    onButtonClick,
    isOpen,
    onClose,
    cardType,
    optionsFromCollection,
  } = useCardListDrawer();

  return (
    <div className="content-hoizontal">
      <h1 className="page-title">Deck Builder</h1>
      <NavNoActions />
      <div className="deck-name-input-block">
        <input
          type="text"
          name="deck-name"
          className="deck-name-input"
          value={deck.name}
          onInput={(e) => setName(e)}
        />
        <button onClick={submitDeck}>Save Deck</button>
      </div>
      <DeckStats
        deck={deck}
        getTotalCP={getTotalCP}
        getTotalCPUsed={getTotalCPUsed}
      />

      <h3 className="editor-section-header">
        <PersonIcon /> Champions
      </h3>
      <ChampCardBlock deck={deck} onButtonClick={onButtonClick} />

      <h3 className="editor-section-header">
        <DiamondIcon /> Accessories
      </h3>
      <AccessoryPreviewBlock deck={deck} onButtonClick={onButtonClick} />

      <h3 className="editor-section-header">
        <AutoAwesomeIcon /> Commands
      </h3>
      <div className="card-view">
        {deck.commands?.map((card) => {
          return (
            <EditorComCard
              key={card.name}
              card={card}
              onClickFn={onButtonClick}
            />
          );
        })}
        <EditorComCard card={null} onClickFn={onButtonClick} />
      </div>
      <Drawer anchor="right" open={isOpen} onClose={onClose}>
        <div className="card-view">
          {cardType === "champ" && (
            <ChampCardBlock deck={deck} onButtonClick={() => {}} />
          )}
          {cardType === "com" && <CommandPreviewBlock deck={deck} />}
          {cardType === "acc" && <AccessoryPreviewBlock deck={deck} />}
          <hr />
          {cardType === "com" ? (
            <CommandSetList
              cards={optionsFromCollection}
              onClickFn={tryAddToDeck}
              rules={rules}
            />
          ) : (
            <>
              {optionsFromCollection.map((card) => (
                <EditorChampCard
                  key={card.id}
                  card={card}
                  onClickFn={tryAddToDeck}
                  listKey={card.atr === "acc" ? "acc" : "champ"}
                  disabled={
                    card.atr === "acc"
                      ? !rules.validateAccCard(card)
                      : !rules.validateChampCard(card)
                  }
                />
              ))}
            </>
          )}
        </div>
      </Drawer>
    </div>
  );
}
