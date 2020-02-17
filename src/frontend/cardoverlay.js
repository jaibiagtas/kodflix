import React from 'react';

export default function Cardoverlay(props) {
    return (
            <div className='overlay'>
                <h1 className='title'>{props.name}</h1>
            </div>
    )
};