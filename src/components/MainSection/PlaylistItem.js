import React from 'react'
import { PlayIcon } from '../../Icons/Icon'

function PlaylistItem({playlist,idx}) {
    return (
        <div className='flex flex-col mb-5 mr-3 space-y-4 w-48 h-72 bg-dark-gray rounded-xl p-4 hover:bg-extra-light-gray duration-300 cursor-pointer group' key={idx}>
            <div className='mb-2'>
                <img width="160" height="160" className='rounded-lg' src={playlist.images[0].url} alt={playlist.name} />
                <div className='items-center justify-center w-11 h-11 bg-spotify-green rounded-full -mt-16 ml-24 hidden group-hover:flex hover:scale-105 transform duration-200'>
                    <PlayIcon color="black" />
                </div>
            </div>
            <span className='text-white font-bold'>{playlist.name}</span>
            <span className='text-primary text-sm font-semibold'>{playlist.description.length > 40 ? ((playlist.description).substring(0, 40)).concat("...") : playlist.description}</span>
        </div>
    )
}

export default PlaylistItem