import { useEffect, useState } from 'react';
import {useDataLayerValue} from '../components/DataLayer';
import { useRecoilState } from "recoil";
import { selectedTrackIdState } from "../atoms/songAtom.js";


export default function UseSongInfo() {
    const [{ spotify }] = useDataLayerValue();
    const [selectedTrackId, setSelectedTrackId] = useRecoilState(selectedTrackIdState);
    const [songInfo, setSongInfo] = useState(null);


    useEffect(()=> {
        const fetchSongInfo = async () =>{
            if(selectedTrackId){
                const trackInfo = await fetch(
                    `https://api.spotify.com/v1/tracks/${selectedTrackId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${spotify.getAccessToken()}`,
                        },
                    }
                ).then((res) => res.json());

                setSongInfo(trackInfo);
            };
        };

        fetchSongInfo();
    }, [spotify, selectedTrackId])
    
    return songInfo;
}
