import "../styles/SearchTreck.css"

export default function SearchTreck({track}) { 


    return (
    <div className="track__search">
        <p className="track_attists__search">{track.artist} - {track.title}</p>
    </div>
    )
}