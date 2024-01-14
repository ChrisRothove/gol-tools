import { List } from "@mui/icons-material";
import AutoAwesome from "@mui/icons-material/AutoAwesome";
import Diamond from "@mui/icons-material/Diamond";
import Person from "@mui/icons-material/Person";
import { useState } from "react";

export const useCardTypeFilters = () => {
  const [championsOn, setChampionsOn] = useState(true);
  const [accessoriesOn, setAccessoriesOn] = useState(true);
  const [commandsOn, setCommandsOn] = useState(true);

  const actions = [
    {
      icon: <Person />,
      onClickFn: () => {
        setChampionsOn(true);
        setAccessoriesOn(false);
        setCommandsOn(false);
      },
    },
    {
      icon: <Diamond />,
      onClickFn: () => {
        setAccessoriesOn(true);
        setChampionsOn(false);
        setCommandsOn(false);
      },
    },
    {
      icon: <AutoAwesome />,
      onClickFn: () => {
        setCommandsOn(true);
        setChampionsOn(false);
        setAccessoriesOn(false);
      },
    },
    {
      icon: <List />,
      onClickFn: () => {
        setAccessoriesOn(true);
        setChampionsOn(true);
        setCommandsOn(true);
      },
    },
  ];

  return {
    championsOn,
    accessoriesOn,
    commandsOn,
    actions,
  };
};
