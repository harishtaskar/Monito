import { RecoilValue, atom } from "recoil";

export const favoriteState = atom({
  key: "favorites",
  default: [] as string[],
});
