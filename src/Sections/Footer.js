

// Footer Wrapper Component

import React from 'react';


export default function Footer (props) {
    return (
        <>
            <section className={' w-full h-full p-10 bg-slate-800'}>
                {props.children}
            </section>
        </>
    )
}