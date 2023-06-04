

import React from 'react';

export default function Card(props) {

    return (
        <div className={' bg-slate-800 rounded-2xl p-5 max-w-[24rem] lg:w-[24rem] flex flex-col justify-between text-sm'}>
            <div>
                <img src={props.cardData.Image} alt="cardImage" className={' w-full h-[15rem] rounded-lg '} />
                <p  className={' mt-5 leading-6 text-slate-500 mx-2'} >{props.cardData.Description}</p>
            </div>

            <button onclick=" window.location.href='/' " className={' mt-14 px-14 py-3 text-teal-500 border border-teal-500 rounded-lg hover:opacity-50 font-bold '} >{props.cardData.Button}</button>
        </div>
    );
}