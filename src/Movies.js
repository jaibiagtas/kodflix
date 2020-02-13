import React from 'react';
import { Link } from 'react-router-dom';
import Cardoverlay from './cardoverlay';

export default function Movies(props) {
    return (
        <Link to={`/${props.id}`} className='item'>
            <img src={props.cover} alt={`${props.name} cover`} />
            <Cardoverlay name={props.name}/>
        </Link>
    );
}