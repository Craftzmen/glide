
import React from 'react';
import HeaderImage from './header.png'; 

export default function Container () {
    return (
        <div className={' flex flex-col gap-y-5 justify-center items-center mt-32 mx-10 md:mx-20 xl:mx-72'}>
                <p className={' text-center text-2xl lg:text-3xl xl:text-5xl font-bold tracking-wide '}>
                    Streamlining HealthCare, Upgrade your 
                    Management with <span className={' text-teal-500 '} >Glide</span>
                </p>
                <div className={' flex items-center gap-x-3 '}>
                     <a href="/" className={' text-white/70 border border-white/70 hover:border-teal-500 hover:bg-teal-500 hover:text-teal-800 px-10 rounded-3xl py-3 '} > Login </a>
                     <a href="/" className={' bg-teal-500 text-teal-800 px-10 rounded-3xl py-3 '} > Register </a>
                </div>
                <img src={HeaderImage} alt="Header" />
        </div>
    );
}