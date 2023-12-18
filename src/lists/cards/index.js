import { STANDARD_ACCESSORIES } from "./standard-acc";
import { STANDARD_CHAMPS } from "./standard-chaps";
import { STANDARD_COMS } from "./standard-coms";

export default {
  [STANDARD_ACCESSORIES.ROUTE]: STANDARD_ACCESSORIES,
  [STANDARD_CHAMPS.ROUTE]: STANDARD_CHAMPS,
  [STANDARD_COMS.ROUTE]: STANDARD_COMS,
  allChamps: [...STANDARD_CHAMPS.LIST],
  allAcc: [...STANDARD_ACCESSORIES.LIST],
  allComs: [...STANDARD_COMS.LIST],
};
