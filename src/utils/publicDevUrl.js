export const publicDevUrl = (url) => {
  const isDev = process.env.ENV === "development";

  return `${isDev ? "/public" : ""}${url}`;
};
