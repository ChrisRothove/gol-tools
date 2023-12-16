import { useNavigate } from "react-router";
import { useMirageCacheRolls } from "./hooks/useMirageCacheRolls";
import { ListPageItem } from "../lists/ListPage";
import { TIER_ONE_MIRAGE_REWARDS } from "../../lists/tierOneMirageRewards";
import { TIER_TWO_MIRAGE_REWARDS } from "../../lists/tierTwoMirageRewards";
import { TIER_THREE_MIRAGE_REWARDS } from "../../lists/tierThreeMirageRewards";
import { MIRAGE_FIGHT_TICKETS } from "../../lists/mirageFightTickets";
import { Chat, Save, Settings } from "@mui/icons-material";
import { useSettings } from "../hooks/useSettings";
import { Switch } from "@mui/material";
import { MIRAGE_CACHE_SETTINGS } from "./constants/mirageCacheSettings";

export function MirageCache() {
  const navigate = useNavigate();

  const { rewards, reRoll } = useMirageCacheRolls();
  const { settings, toggleSetting, isVisible, setVisibility } = useSettings([
    MIRAGE_CACHE_SETTINGS.USE_BOSS,
    MIRAGE_CACHE_SETTINGS.USE_CHALLENGES,
  ]);

  return (
    <>
      <h1 className="page-title">Mirage Cache</h1>
      <div className="content-horizontal">
        <div className="random-item-button-block">
          <button className="left-button" onClick={() => navigate(-1)}>
            Back
          </button>
          <button className="right-button" onClick={() => reRoll()}>
            Roll
          </button>
        </div>
        <div className="action-button-bar">
          <button
            className="action-button"
            onClick={() => setVisibility(!isVisible)}
          >
            <Settings />
          </button>
          <button className="action-button" onClick={() => {}}>
            <Chat />
          </button>
          <button className="action-button" onClick={() => {}}>
            <Save />
          </button>
        </div>
        <div className={`settings-block ${isVisible ? "" : "hidden"}`}>
          <Switch
            onChange={() => toggleSetting(MIRAGE_CACHE_SETTINGS.USE_BOSS)}
            checked={settings[MIRAGE_CACHE_SETTINGS.USE_BOSS]}
          />
          <span>Use Boss Odds</span>
        </div>
        <div className={`settings-block ${isVisible ? "" : "hidden"}`}>
          <Switch
            onChange={() => toggleSetting(MIRAGE_CACHE_SETTINGS.USE_CHALLENGES)}
            checked={settings[MIRAGE_CACHE_SETTINGS.USE_CHALLENGES]}
          />
          <span>Include Style Challenges</span>
        </div>
        {rewards && <h2>Tier 1 Reward</h2>}
        {rewards?.tierOneReward ? (
          <ListPageItem
            item={rewards.tierOneReward}
            KEYS={TIER_ONE_MIRAGE_REWARDS.KEYS}
          />
        ) : null}

        {rewards && <h2>Tier 2 Reward</h2>}
        {rewards?.tierTwoReward ? (
          <ListPageItem
            item={rewards.tierTwoReward}
            KEYS={TIER_TWO_MIRAGE_REWARDS.KEYS}
          />
        ) : null}

        {rewards && <h2>Tier 3 Reward</h2>}
        {rewards?.tierThreeReward ? (
          <ListPageItem
            item={rewards.tierThreeReward}
            KEYS={TIER_THREE_MIRAGE_REWARDS.KEYS}
          />
        ) : null}

        {rewards && <h2>Fight Ticket</h2>}
        {rewards?.tierThreeReward ? (
          <ListPageItem
            item={rewards.fightTicket}
            KEYS={MIRAGE_FIGHT_TICKETS.KEYS}
          />
        ) : null}
      </div>
    </>
  );
}
