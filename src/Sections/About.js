

import React from 'react';

export default function About (props) {
    return (
        <div>
            <section className={' w-full h-full md:py-28 py-10  flex justify-center items-center'}>
                {props.children}
            </section>
        </div>
    );
}