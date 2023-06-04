
import React from 'react';


export default function Navbar () {
    return (
        <div>
            <nav className={' flex justify-between items-center p-5 sm:px-20 lg:px-32 xl:px-52'}>
                <h1 className='text-teal-500 font-bold text-3xl' >Glide</h1>
                <div className={' flex items-center gap-x-2'}>
                    <a href="/" className={' text-white/70 border border-white/70 hover:border-teal-500 hover:bg-teal-500 hover:text-teal-800 px-6 rounded-3xl py-2 '} > Login </a>
                    <a href="/" className={' bg-teal-500 text-teal-800 px-6 rounded-3xl py-2 '} > Register </a>
                </div>
            </nav>
        </div>
    )
}