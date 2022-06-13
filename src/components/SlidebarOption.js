import React from 'react'
import "../styles/SlidebarOption.css"

export default function SlidebarOption({title}) {
  return (
    <div className="slidebarOption"><button className='playlistButton'><p className="playlistName">{title}</p></button></div>
  )
}
