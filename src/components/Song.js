import { useRecoilState } from "recoil";
// import {useDataLayerValue} from './DataLayer'; 
import { selectedTrackIdState, isPlayingState } from "../atoms/songAtom.js";
import "../styles/Song.css";
import {msToMinutesAndSeconds} from "./CalcTime.js"

export default function Song({order, track}) { 
    // const [{ spotify }] = useDataLayerValue(); 
    const [selectedTrackId, setSelectedTrackId] = useRecoilState(selectedTrackIdState);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)


    const playSong = () => {
        setSelectedTrackId(track?.track?.id);
        setIsPlaying(true);
    }

    return (
    <div className="track" onClick={playSong}>

        <p className="order">{order + 1}</p>
        <img className="img__track" alt="" src={track?.track?.album?.images[0]?.url}/>

        <div className="track_info">
            <p className="track_title">{track?.track?.name}</p>
            <p className="track_attists">{track?.track?.artists[0]?.name}</p>
        </div>

        <div className="track_info2">
            <p className="runtime">{msToMinutesAndSeconds(track?.track?.duration_ms)}</p>
        </div>

        
    </div>
    )
}