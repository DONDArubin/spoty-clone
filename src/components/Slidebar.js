import React from 'react';
import "../styles/Slidebar.css"; 
import{
    HomeIcon,
    SearchIcon,
    LibraryIcon,
} from "@heroicons/react/outline";
import {useDataLayerValue} from './DataLayer'; 
import { useRecoilState } from 'recoil';
import { playlistIdState } from "../atoms/playlistAtom.js";
import { NavLink } from 'react-bootstrap';
//import SlidebarOption from './SlidebarOption';

export default function Slidebar() {
    const [{playlists}] = useDataLayerValue();                                      // импортирование всех плейлистов
    const [playlistsId, setPlaylistsId] = useRecoilState(playlistIdState);          // записывание id нажатого плейлиста
    

  return (
        <div className="slidebar">
            <img className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />

            <button className="slidebarButton">
                <HomeIcon className="slidebarIcon"/>
                Home
            </button>

            <NavLink>
                <button className="slidebarButton">
                    <SearchIcon className="slidebarIcon"/>
                    Search
                </button>
            </NavLink>
            

            <button className="slidebarButton">
                <LibraryIcon className="slidebarIcon"/>
                Library
            </button>

            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            <div className="playlists">
                {playlists?.body?.items?.map(playlist => (
                    <p key={playlist.id} className="PlaylistName" onClick={() => setPlaylistsId(playlist.id)}>{playlist.name}</p>
                    //<SlidebarOption title={playlist.name}/>
                ))}
            </div>
        </div>
  )
}
