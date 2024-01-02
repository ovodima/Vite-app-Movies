import { atom } from "recoil";

export const moviesState = atom({
  key: "moviesState",
  default: [],
});

export const tvShowState = atom({
  key: "tvShow",
  default: [],
});

export const moviesDetails = atom({
  key: "moviesDetail",
  default: [],
});
