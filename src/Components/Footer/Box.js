
import React from 'react';

import Twitter from './twitter.svg';
import Instagram from './instagram.svg';
import Facebook from './facebook.svg'
import Github from './github.svg';

export default function () {
    return (
        <div className={' flex flex-col gap-y-2 sm:flex-row sm:justify-between items-center font-semibold'}>
            <p className={' text-sm font-normal text-slate-500'}>©Copyright @ 2023 , All Rights Reserved</p>
            <div className={' flex items-center gap-x-8 '}>
                <p>Connect with us</p>
                <div className={' flex items-center gap-x-5'} >
                    <a href='/'><img src={Twitter} alt="Twitter" /></a>
                    <a href='/'><img src={Instagram} alt="Twitter" /></a>
                    <a href='/'><img src={Facebook} alt="Twitter" /></a>
                    <a href='/'><img src={Github} alt="Twitter" /></a>
                </div>
            </div>
        </div>
    );
}