import { useState } from "react";
import lists from "../../../lists";
import { getRandWithRange } from "../../../utils/getRandWithRange";
import { getRand } from "../../../utils/getRand";

const getRewardFromList = (list) => {
  const mainReward = getRandWithRange(list);
  if (!mainReward?.subTable) return mainReward;
  const subTable = lists[mainReward.subTable];
  return getRandWithRange(subTable.LIST);
};

export const useMirageCacheRolls = () => {
  const [rewards, setRewards] = useState(null);

  const tierOneList = lists["tier-1"];
  const tierTwoList = lists["tier-2"];
  const tierThreeList = lists["tier-3"];
  const fightTicketList = lists["fight-tickets"];

  const getFightTicket = () => {
    const rand = getRand([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    if (rand === 1) {
      return getRandWithRange(fightTicketList.LIST);
    } else {
      return {
        name: "none",
        adversary: "none",
      };
    }
  };

  const reRoll = () =>
    setRewards({
      tierOneReward: getRewardFromList(tierOneList.LIST),
      tierTwoReward: getRewardFromList(tierTwoList.LIST),
      tierThreeReward: getRewardFromList(tierThreeList.LIST),
      fightTicket: getFightTicket(),
    });
  return {
    rewards,
    reRoll,
  };
};
