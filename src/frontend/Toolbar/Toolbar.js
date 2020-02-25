import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import './Toolbar.css';


const toolbar = props => (
    <div>
        <button className='button'>
            Menu
        </button>
        <button className='button'>           
         <a href='/'>Home</a>
        </button>
    </div>
);


export default toolbar;