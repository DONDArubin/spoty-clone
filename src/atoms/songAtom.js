import { atom } from "recoil";

export const selectedTrackIdState = atom ({
    key:"selectedTrackIdState",
    default: null
})

export const isPlayingState = atom ({
    key: "isPlayingState",
    default: false,
})