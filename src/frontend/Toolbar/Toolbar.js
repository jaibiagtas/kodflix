import React from 'react';

import './Toolbar.css';

const toolbar = props => (
        <div className='toolbar'>
            <nav className='toolbar_navigation'>
                    <div className='toolbar_homepage'><a href='/'>Home Page</a></div>
                    <div className='toolbar_about'><a href='/'>About</a></div>
                    <div className='toolbar_reviews'><a href='/'>Reviews</a></div>
            </nav>
    </div>
)

export default toolbar;