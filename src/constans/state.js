import { atom } from "recoil";

export const moviesState = atom({
  key: "moviesState",
  default: [],
});

export const tvShowState = atom({
  key: "tvShowState",
  default: [],
});

export const moviesDetails = atom({
  key: "moviesDetail",
  default: [],
});

export const itemId = atom({
  key: "itemId",
  default: [],
});

export const imageData = atom({
  key: "imageData",
  default: [],
});
