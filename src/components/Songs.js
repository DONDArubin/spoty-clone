import { useRecoilValue } from "recoil";
import { playlistState } from "../atoms/playlistAtom";
import Song from "./Song.js";
import "../styles/Songs.css";

export default function Songs() {
    const playlist = useRecoilValue(playlistState)

    
    return (
    <div className="tracks">
        {playlist?.tracks?.items.map((track, i) => 
            <Song key={track?.track?.id} track={track} order={i}/>
        )}
    </div>
    )
}
