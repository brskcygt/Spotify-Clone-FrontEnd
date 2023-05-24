import React, { useState } from 'react'
import { HomeIcon, LibraryIcon, LogoIcon, SearchIcon } from '../../Icons/Icon'

function Menu() {

    const [active, setActive] = useState({
        home: true,
        search: false,
        bookcase: false
    });

    return (
        <>
            <div className='px-6'>
                <LogoIcon />
            </div>
            <div className='flex items-center'>
                <ul className='space-y-3 flex flex-col'>
                    <li className='flex items-center space-x-3 cursor-pointer' onClick={() => setActive({ home: true, search: false, bookcase: false })}>
                        <div className={`w-1.5 h-8 mr-2 bg-spotify-green ${active.home ? "block" : "invisible"} `} />
                        <HomeIcon />
                        <span className={`text-primary font-[700] ${active.home && "text-white"}`}>Ana sayfa</span>
                    </li>
                    <li className='flex items-center space-x-3 cursor-pointer' onClick={() => setActive({ home: false, search: true, bookcase: false })} >
                        <div className={`w-1.5 h-8 mr-2 bg-spotify-green ${active.search ? "block" : "invisible"} `} />
                        <SearchIcon />
                        <span className={`text-primary font-[700] ${active.search && "text-white"}`}>Ara</span>
                    </li>
                    <li className='flex items-center space-x-3 cursor-pointer' onClick={() => setActive({ home: false, search: false, bookcase: true })}>
                        <div className={`w-1.5 h-8 mr-2 bg-spotify-green ${active.bookcase ? "block" : "invisible"} `} />
                        <LibraryIcon />
                        <span className={`text-primary font-[700] ${active.bookcase && "text-white"}`}>Kitaplığım</span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Menu