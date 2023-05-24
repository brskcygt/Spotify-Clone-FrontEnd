import React from 'react'
import { useSelector } from 'react-redux'
import PlaylistItem from './PlaylistItem'

function RecentlyPlayed({ keyword }) {

    const recentlyPlayed = useSelector(state => state.playlists.recPlayed)
    const filteredPlaylists = recentlyPlayed.filter(playlist => (playlist.name.toLowerCase()).includes(keyword.toLowerCase()) || (playlist.description.toLowerCase()).includes(keyword.toLowerCase()))

    return (
        filteredPlaylists.length > 0 && (<section className='flex'>
            <div className='flex flex-col space-y-5'>
                <h1 className='text-white text-2xl'>Yakında Çalınanlar</h1>
                <div className='flex flex-wrap'>
                    {filteredPlaylists.map((playlist, idx) => (
                       <PlaylistItem playlist={playlist} idx={idx} key={idx}/>
                    ))}
                </div>
            </div>
        </section>)
    )
}

export default RecentlyPlayed