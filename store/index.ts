import { RecoilValue, atom } from "recoil";

// type Favorite = {
//   key: string;
//   default: RecoilValue<string[]>;
// };

export const favoriteState = atom({
  key: "favorites",
  default: [] as string[],
});
