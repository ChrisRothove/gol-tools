import { STANDARD_CHAMPS } from "../../lists/cards/standard-chaps";
import { STANDARD_COMS } from "../../lists/cards/standard-coms";
import { publicDevUrl } from "../../utils/publicDevUrl";
import { MARKER_IMAGES } from "./constants/MARKER_IMAGES";
import { STANDARD_ACCESSORIES } from "../../lists/cards/standard-acc";

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

export function CardList({ list = [], listKey, size = "lg" }) {
  return (
    <>
      {listKey === STANDARD_CHAMPS.ROUTE && (
        <>
          <div className="card-view">
            {list.map((card) => (
              <ChampCard key={card.id} card={card} size={size} />
            ))}
          </div>
        </>
      )}
      {listKey === STANDARD_ACCESSORIES.ROUTE && (
        <>
          <div className="card-view">
            {list.map((card) => (
              <ChampCard key={card.id} card={card} size={size} />
            ))}
          </div>
        </>
      )}
      {listKey === STANDARD_COMS.ROUTE && (
        <>
          <div className="card-view">
            {list.map((card) => (
              <ComCard key={card.id + card.val} card={card} size={size} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
