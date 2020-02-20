import React from 'react';
import './Play.css';

export default function Play(props) {
    return (
        <div>
            <div className='Videowrapper'>
                <iframe width='560' height='320' align='middle' src={`https://www.youtube.com/embed/${props.videoId}`}></iframe>
            </div>
        </div>
    );
}