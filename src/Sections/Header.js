
// Header Wrapper Component

import React from 'react';


export default function Header (props) {
    return (
        <>
            <section className={' w-full h-screen'}>
                {props.children}
            </section>
        </>
    )
}