import React from 'react'
import { CircleIcon, NextIcon, PreviousIcon } from '../../Icons/Icon'

function Player() {
    return (
        <div className='w-full sticky bottom-0 h-28 bg-dark-gray z-10 flex items-center justify-between p-6 drop-shadow-lg space-x-48'>
            <div className='flex space-x-3'>
                <img width="72" height="72" src='https://i.scdn.co/image/ab67706c0000bebb8066d9a1fc6aafea69e00d1f' alt="YabancıGece" />
                <div className='flex flex-col space-y-1 items-center justify-center'>
                    <span className='text-lg text-white font-semibold'>Yabancı | Gece</span>
                    <span className='text-md text-primary font-bold'>Playlist</span>
                </div>
            </div>
            <div className='flex flex-col space-y-3'>
                <div className='flex items-center justify-center space-x-5'>
                    <PreviousIcon />
                    <CircleIcon />
                    <NextIcon />
                </div>
                <div className='flex items-center justify-center space-x-2'>
                    <span className='text-primary text-sm'>0:12</span>
                    <div className="w-80 bg-black rounded-full h-1">
                        <div className="bg-white h-1 rounded-full w-5"></div>
                    </div>
                    <span className='text-primary text-sm'>2:00</span>
                </div>
            </div>
            <div className='invisible' />
        </div>
    )
}

export default Player