import React, { useState } from 'react'
import { LeftIcon, RightIcon, SearchIcon } from '../../Icons/Icon';
import AllPlaylists from './AllPlaylists';
import RecentlyPlayed from './RecentlyPlayed';
import Recommended from './Recommended';

function MainContent() {

    const [keyword, setKeyword] = useState("");

    return (
        <main className='w-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#121212] via-[#121212] to-black p-8 flex flex-col space-y-16'>
            <div className='flex space-x-5 items-center'>
                <div className='w-8 h-8 rounded-full bg-black flex items-center justify-center cursor-pointer'>
                    <LeftIcon />
                </div>
                <div className='w-8 h-8 rounded-full bg-black flex items-center justify-center cursor-pointer'>
                    <RightIcon />
                </div>
                <div className='flex items-center w-72 space-x-4 p-2 bg-extra-light-gray ring-2 ring-extra-light-gray rounded-full text-white focus-within:bg-black focus-within:ring-gray-500 focus-within:text-white'>
                    <SearchIcon />
                    <input type="text" placeholder='Ara' className='focus:outline-none bg-transparent w-full text-sm' onChange={(e) => setKeyword(e.target.value)} />
                </div>
            </div>
            <RecentlyPlayed keyword={keyword} />
            <Recommended keyword={keyword} />
            <AllPlaylists keyword={keyword} />
        </main>
    )
}

export default MainContent