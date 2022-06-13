// Для передачи данных

import { atom } from "recoil";

export const playlistIdState = atom({
    key: "playlistIdState",
    default: "7Cq5O9cTVa1OEutcLTYm5x",
});

export const playlistState = atom({
    key: "playlistState",
    default: null,
});