import { useState } from "react";
import lists from "../../../lists";
import { getRandWithRange } from "../../../utils/getRandWithRange";
import { getRand } from "../../../utils/getRand";
import { MIRAGE_CACHE_SETTINGS } from "../constants/mirageCacheSettings";

const getRewardFromList = (list, minKey, maxKey) => {
  const mainReward = getRandWithRange(list, minKey, maxKey);
  if (!mainReward?.subTable) return mainReward;
  const subTable = lists[mainReward.subTable];
  return getRandWithRange(subTable.LIST);
};

export const useMirageCacheRolls = (settings) => {
  const [rewards, setRewards] = useState(null);
  const isBossOdds = settings[MIRAGE_CACHE_SETTINGS.USE_BOSS];
  const isChallenge = settings[MIRAGE_CACHE_SETTINGS.USE_CHALLENGES];

  const minKey = isBossOdds ? "bossMin" : "min";
  const maxKey = isBossOdds ? "bossMax" : "max";

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
      tierOneReward: getRewardFromList(tierOneList.LIST, minKey, maxKey),
      tierTwoReward: getRewardFromList(tierTwoList.LIST, minKey, maxKey),
      tierThreeReward: getRewardFromList(tierThreeList.LIST, minKey, maxKey),
      fightTicket: getFightTicket(),
    });
  return {
    rewards,
    reRoll,
  };
};
