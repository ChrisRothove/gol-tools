import { COPY_TYPES } from "./constants/types";

export function CopyRouter({ copy = {} }) {
  if (copy[COPY_TYPES.HEADING]) {
    return <h2>{copy[COPY_TYPES.HEADING]}</h2>;
  }

  if (copy[COPY_TYPES.PARAGRAPH]) {
    return <p>{copy[COPY_TYPES.PARAGRAPH]}</p>;
  }

  if (copy[COPY_TYPES.STYLE]) {
    const [first, second] = copy[COPY_TYPES.STYLE];
    return (
      <div className="style-header">
        <h3>{first}</h3>
        <span>{second}</span>
      </div>
    );
  }

  if (copy[COPY_TYPES.SUBHEAD]) {
    return <h3>{copy[COPY_TYPES.SUBHEAD]}</h3>;
  }

  if (copy[COPY_TYPES.LIST]) {
    return (
      <ul>
        {copy[COPY_TYPES.LIST].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
}
