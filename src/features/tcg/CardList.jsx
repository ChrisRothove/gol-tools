import { useParams } from "react-router";
import { STANDARD_CHAMPS } from "../../lists/cards/standard-chaps";
import { STANDARD_COMS } from "../../lists/cards/standard-coms";
import { publicDevUrl } from "../../utils/publicDevUrl";
import { MARKER_IMAGES } from "./constants/MARKER_IMAGES";
import { STANDARD_ACCESSORIES } from "../../lists/cards/standard-acc";
import { useState } from "react";
import {
  PhotoSizeSelectActual,
  PhotoSizeSelectLarge,
  PhotoSizeSelectSmall,
} from "@mui/icons-material";
import { NavWithActions } from "../navigation/navWithActions";

export function ChampCard({ card, size }) {
  return (
    <div
      className={`card-container-${size}`}
      style={{
        backgroundImage: `url(${publicDevUrl(card.pic)})`,
      }}
    >
      <div className={`card-border card-border-${card.atr}`}></div>
      <div className={`card-cp-${size}`}>{card.CP}</div>
      <div className={`card-pw-${size}`}>{card.pow}</div>
      <div className={`card-df-${size}`}>{card.def}</div>
      {!!card.mark && (
        <div
          className={`champ-marker-${size}`}
          style={{
            backgroundImage: `url(${publicDevUrl(MARKER_IMAGES[card.mark])})`,
          }}
        />
      )}
      {card.rare && <div className={`card-rarity-${size}`} />}
    </div>
  );
}

export function ComCard({ card, size }) {
  return (
    <div
      className={`card-container-${size}`}
      style={{
        backgroundImage: `url(${publicDevUrl(card.pic)})`,
      }}
    >
      <div className={`card-border card-border-com-${card.atr}`}></div>
      <div className={`card-val-${size}`}>{card.val}</div>
      {!!card.mark && (
        <div
          className={`card-marker-${size}`}
          style={{
            backgroundImage: `url(${publicDevUrl(MARKER_IMAGES[card.mark])})`,
          }}
        />
      )}
      {card.rare && <div className={`card-rarity-${size}`} />}
    </div>
  );
}

export function CardList() {
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
      {listKey === STANDARD_CHAMPS.ROUTE && (
        <>
          <h1 className="page-title">Standard Champions</h1>
          <NavWithActions actions={actions} />
          <div className="card-view">
            {STANDARD_CHAMPS.LIST.map((card) => (
              <ChampCard key={card.name} card={card} size={size} />
            ))}
          </div>
        </>
      )}
      {listKey === STANDARD_ACCESSORIES.ROUTE && (
        <>
          <h1 className="page-title">Standard Accessories</h1>
          <NavWithActions actions={actions} />
          <div className="card-view">
            {STANDARD_ACCESSORIES.LIST.map((card) => (
              <ChampCard key={card.name} card={card} size={size} />
            ))}
          </div>
        </>
      )}
      {listKey === STANDARD_COMS.ROUTE && (
        <>
          <h1 className="page-title">Standard Commands</h1>
          <NavWithActions actions={actions} />
          <div className="card-view">
            {STANDARD_COMS.LIST.map((card) => (
              <ComCard key={card.name} card={card} size={size} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
