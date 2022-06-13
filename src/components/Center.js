import "../styles/Center.css"; 
import {useDataLayerValue} from './DataLayer'; 
// import{SearchIcon} from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { shuffle } from "lodash";
import { playlistIdState, playlistState } from "../atoms/playlistAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import Songs from "./Songs.js";
import Player from '../components/Player';
import {Container, Form} from "react-bootstrap"
import SearchTreck from "./SearchTreck";

const colors = [
  "green",
  "yellow",
  "purple",
  "orange",
  "rgb(255, 63, 245)",
  "red",
  "gray",
  "rgb(0, 255, 200)"
]


export default function Center() {
  const [{ spotify }] = useDataLayerValue();                          // импортирование аккаунта spotify 
  const [{ user }] = useDataLayerValue();                             // импортирование user 
  const playlistsId = useRecoilValue(playlistIdState);                // импортирование id нажатого плейлиста
  const [playlist, setPlaylists] = useRecoilState(playlistState);     // сам выбранный плейлист

  const [search, setSearch] = useState('');
  const [searchRes, setSearchRes] = useState([]);


  useEffect(()=>{
    document.documentElement.style.setProperty("--bgcolor", shuffle(colors).pop())        // изменение градиента при нажатии на плейлист

    spotify.getPlaylist(playlistsId).then((data) => {                                     // при нажатии на плейлист извлекаются его данные
      setPlaylists(data.body)
    });

  }, [playlistsId])


  var showResult = false;
  const showRes = () => {
    var a = document.getElementById("search__block__res");
    if(showResult){
      a.style.visibility = "hidden"
      showResult  = false;
    }
    else{
      a.style.visibility = "visible"
      showResult  = true;
    }
  }

  useEffect(()=>{
    if(!search) return setSearchRes([])
    
    let cancel = false;
    spotify.searchTracks(search).then(res => {
      if(cancel) return
      setSearchRes(
          res?.body?.tracks?.items.map(track => {
          return {
            artist: track?.artists[0].name,
            title: track?.name,
            uri: track?.uri,
            albumUrl: track?.albumUrl?.images[0].url,
          }
        })
      )
    })

    return () => cancel = true;
  }, [search])

  return (
    <div className="center">

        <header className="header">
          <div className="block__image">
            <img alt="" className="userImage" src="https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F898eca292817fb49f7191d244269e60d.1000x1000x1.png"></img>
          </div>
          <div className="block__name">
            <h1>{user?.body.display_name}</h1>
          </div>
        </header>


        <section className="section__header">

          <div className="search__block">
            <Container>
              <Form.Control className="input" type="search" placeholder="Search Songs" value={search} onChange={e => setSearch(e.target.value)} />
            </Container>
            <button className="button" onClick={showRes}>Show Result</button>

            <div className="search__block__res" id="search__block__res">
              {searchRes.map(track => (
                <SearchTreck track={track} key={track.uri}/>
              ))}
            </div>
              

          </div>

        
          <div className="block__image__playlist">
            <img alt="" className="playlist__image" src={playlist?.images?.[0]?.url}/>
          </div> 

          <div className="block__name__playlist">
            <p className="playlist">PLAYLIST</p>
            <h1 className="playlist__title">{playlist?.name}</h1> 
          </div>
          
        </section>

        
        <section className="section__main">
          <Songs />

          <div className='player'>
            <Player/>
          </div>
        </section>
        
    </div>

    
    
  )
}
