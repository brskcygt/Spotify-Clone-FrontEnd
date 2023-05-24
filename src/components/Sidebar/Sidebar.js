import React from 'react'
import Menu from './Menu'
import Playlists from './Playlists'

function Sidebar() {
    return (
        <div className='w-80 bg-black'>
            <div className='w-80 bg-black pt-8 space-y-10 sticky h-screen top-0'>
                <Menu />
                <Playlists />
            </div>
        </div>
    )
}

export default Sidebar