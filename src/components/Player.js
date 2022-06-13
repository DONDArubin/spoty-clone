import UseSongInfo from "../hooks/useSongInfo"
import "../styles/Player.css"; 

export default function Player() {
    const songInfo = UseSongInfo();

  return (
    <div className="player__info">
        <div className="player__img__block">
            <img className="player__img" alt="" src={songInfo?.album?.images?.[0]?.url}/> 
        </div>

        <div className="player__name">
            <h3>{songInfo?.artists?.[0]?.name} - {songInfo?.name}</h3>
        </div>
    </div>
  )
}
