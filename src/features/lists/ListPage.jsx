import { useNavigate } from "react-router";
import { RandomSelector } from "../RandomSelector";

export function ListPageItem({ item, KEYS }) {
  return (
    <div key={item[KEYS[0]?.key]} className="listItem">
      {KEYS.map((key) => (
        <div key={key.key} className={key.class}>
          {key.label ? `${key.label}:` : ""} {item[key.key]}
        </div>
      ))}
    </div>
  );
}

export function ListPage({ dataObject = {} }) {
  const { TITLE = "", LIST = [], KEYS = [] } = dataObject;
  const navigate = useNavigate();

  return (
    <>
      <h1 className="page-title">{TITLE}</h1>
      <div className="content-horizontal">
        <button onClick={() => navigate(-1)}>Back</button>
        <hr />
        Roller
        <RandomSelector itemList={LIST} keys={KEYS} />
        <hr />
        All {TITLE}
        {LIST.map((item) => (
          <ListPageItem item={item} KEYS={KEYS} />
        ))}
      </div>
    </>
  );
}
