import { useState } from "react";
import { collapseCommandsByValue } from "../../../utils/collapseCommandsByValue";
import { EditorComCard } from "../DeckEditor";

const CommandSet = ({ commandSet = {}, onClickFn }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const cardToShow = {
    ...commandSet.baseCard,
    val: currentValue,
    count: commandSet.valueList[currentValue],
  };

  const { valueList, range } = commandSet;
  const row1Range = range.slice(0, 5);
  const row2Range = range.length > 5 ? range.slice(5) : null;

  const isCardDisabled = valueList[currentValue] < 1;

  return (
    <div className="command-set-container">
      <EditorComCard
        card={cardToShow}
        onClickFn={onClickFn}
        disabled={isCardDisabled}
      />
      <div className="command-set-details">
        <h3>{commandSet.name}</h3>
        <div className="command-set-values">
          {row1Range.map((value) => (
            <div
              key={value + commandSet.id}
              className={`command-set-value${valueList[value] ? "-owned" : ""}`}
              onClick={() => setCurrentValue(value)}
            >
              {value}
            </div>
          ))}
        </div>
        {row2Range && (
          <div className="command-set-values">
            {row2Range.map((value) => (
              <div
                key={value + commandSet.id}
                className={`command-set-value${
                  valueList[value] ? "-owned" : ""
                }`}
                onClick={() => setCurrentValue(value)}
              >
                {value}
              </div>
            ))}
          </div>
        )}
        <div className="command-set-selection">
          <div>Value: {currentValue}</div>
          <div>Count: {valueList[currentValue]}</div>
        </div>
      </div>
    </div>
  );
};

export const CommandSetList = ({ cards = [], onClickFn }) => {
  const commandSets = collapseCommandsByValue(cards);
  console.log(commandSets);
  const setKeys = Object.keys(commandSets);

  return (
    <div className="content-horizontal">
      {setKeys.map((key) => (
        <CommandSet
          key={key}
          commandSet={commandSets[key]}
          onClickFn={onClickFn}
        />
      ))}
    </div>
  );
};
