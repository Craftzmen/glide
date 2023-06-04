

import React from 'react';

import Card from './Card';

import Card1 from './Card1.jpg';
import Card2 from './Card2.jpg';

export default function CardContainer () {
    
    const cardData = [
        { 
            Image : Card1,
            Description : "Our Hospital Management System is a comprehensive software application designed to manage and streamline the operations of a healthcare facility", 
            Button : "Join Now"
        },
        {
            Image : Card2,
            Description : "It provides a centralized platform for all hospital departments to access patient data and perform their roles efficiently. Our system includes modules for managing patient records", 
            Button : "Consult"
        }
    ];

    return (
        <div className={' flex flex-col gap-y-5 mx-5 lg:flex-row lg:justify-center gap-x-10 mt-10'} >
            <Card cardData={cardData[0]} />
            <Card cardData={cardData[1]} />
        </div>
    );
}
