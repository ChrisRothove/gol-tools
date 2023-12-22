import PersonIcon from "@mui/icons-material/Person";
import DiamondIcon from "@mui/icons-material/Diamond";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import StyleIcon from "@mui/icons-material/Style";

export const DeckStats = ({ deck = {}, getTotalCPUsed, getTotalCP }) => (
  <div className="deck-stats">
    <div>
      <StyleIcon /> {getTotalCPUsed()}/{getTotalCP()}
    </div>
    <div>
      <PersonIcon /> {deck.champions?.length}
    </div>
    <div>
      <DiamondIcon /> {deck.accessories?.length}{" "}
    </div>
    <div>
      <AutoAwesomeIcon /> {deck.commands?.length}{" "}
    </div>
  </div>
);
