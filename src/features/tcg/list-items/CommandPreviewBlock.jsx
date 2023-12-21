import { publicDevUrl } from "../../../utils/publicDevUrl";

const CommandPreviewCard = ({ card }) => {
  return (
    <div
      className="com-preview-card"
      style={{
        backgroundImage: `url(${publicDevUrl(card.pic)})`,
      }}
    >
      <div className="com-preview-value">{card.val}</div>
    </div>
  );
};

export const CommandPreviewBlock = ({
  deck = {},
  onButtonClick = () => {},
}) => {
  const commands = deck.commands;
  const row1Cards = commands.slice(0, 5);
  const row2Cards = commands.slice(5, 10);
  const row3Cards = commands.slice(10, 15);
  const row4Cards = commands.slice(15, 20);

  return (
    <div className="content-horizontal">
      <div className="com-preview-row">
        {row1Cards?.map((card) => {
          return <CommandPreviewCard key={card.id + card.val} card={card} />;
        })}
      </div>
      {row2Cards.length > 0 && (
        <div className="com-preview-row">
          {row2Cards?.map((card) => {
            return <CommandPreviewCard key={card.id + card.val} card={card} />;
          })}
        </div>
      )}
      {row3Cards.length > 0 && (
        <div className="com-preview-row">
          {row3Cards?.map((card) => {
            return <CommandPreviewCard key={card.id + card.val} card={card} />;
          })}
        </div>
      )}
      {row4Cards.length > 0 && (
        <div className="com-preview-row">
          {row4Cards?.map((card) => {
            return <CommandPreviewCard key={card.id + card.val} card={card} />;
          })}
        </div>
      )}
    </div>
  );
};
