import { atom } from "recoil";

export const moviesState = atom({
    key: 'moviesState',
    default: []
})

export const moviesDetails = atom({
    key:'moviesDetail',
    default: []
})