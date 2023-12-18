import { useState } from "react";
import {
  PhotoSizeSelectActual,
  PhotoSizeSelectLarge,
  PhotoSizeSelectSmall,
} from "@mui/icons-material";

export const useCardSize = (defaultSize = "lg") => {
  const [size, setSize] = useState(defaultSize);
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

  return {
    size,
    actions,
  };
};
