import { STANDARD_CHAMPS } from "../../lists/cards/standard-chaps";

export function CardList({ size = "lg" }) {
  return (
    <>
      <h1 className="page-title">Standard List</h1>
      <div className="card-view">
        {STANDARD_CHAMPS.LIST.map((card) => (
          <div
            className={`card-container-${size}`}
            key={card.name}
            style={{
              backgroundImage: `url(${card.pic})`,
            }}
          >
            <div className={`card-border card-border-${card.atr}`}></div>
            <div className="card-cp">{card.CP}</div>
            <div className="card-pw">{card.pow}</div>
            <div className="card-df">{card.def}</div>
          </div>
        ))}
      </div>
    </>
  );
}
