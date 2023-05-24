import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { SearchIcon } from '../../Icons/Icon'

function Playlists() {
    const [keyword, setKeyword] = useState("");
    const allPlaylists = useSelector(state => state.playlists.myPlaylists)
    const filteredPlaylists = allPlaylists.filter(playlist => (playlist.name.toLowerCase()).includes(keyword.toLowerCase()))

    return (
        <>
            <div className='flex flex-col px-6'>
                <span className='tracking-widest font-[700] text-primary'>ÇALMA LİSTELERİN</span>
                <div className='flex items-center space-x-4 p-2 my-3 bg-extra-light-gray ring-2 ring-extra-light-gray rounded-full text-gray-600 focus-within:bg-black focus-within:text-white'>
                    <SearchIcon />
                    <input type="text" placeholder='Ara' className='focus:outline-none bg-transparent w-full text-sm' onChange={(e) => setKeyword(e.target.value)} />
                </div>
            </div>
            <div className='flex flex-col px-6 space-y-3 scrollbar'>
                {filteredPlaylists.map((playlist, idx) => (
                    <div className='text-primary cursor-pointer' key={idx}>{playlist.name}</div>
                ))}
                {filteredPlaylists.map((playlist, idx) => (
                    <div className='text-primary cursor-pointer' key={idx}>{playlist.name}</div>
                ))}
                {filteredPlaylists.map((playlist, idx) => (
                    <div className='text-primary cursor-pointer' key={idx}>{playlist.name}</div>
                ))}
            </div>
        </>
    )
}

export default Playlists