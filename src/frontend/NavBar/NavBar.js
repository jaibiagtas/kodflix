import React from 'react';
import './NavBar.css';
import hamburger from '../images/menured.png';

export default function NavBar() {
    const [menuDisplay, setMenuDisplay] = React.useState
        ('menuDisplayOff');

    function toggleMenu() {
        setMenuDisplay(menuDisplay === 'menuDisplayOff' ?
            '' : 'menuDisplayOff');
    }

    return (
        <>
            <nav className='myNav'>
                <button className='burgerButton' onClick={() => toggleMenu()}>
                    <img className='burger' src={hamburger} alt='hamburger' /></button>
            </nav>

            <nav className='navMenu' id={menuDisplay}>
                <h4 className='menuItem'><a href='/' onClick={() => toggleMenu()}>Home</a></h4>
                <h4 className='menuItem'><a href='/details' onClick={() => toggleMenu()}>Details</a></h4>
                <h4 className='menuItem'><a href='/reviews' onClick={() => toggleMenu()}>Reviews</a></h4>
                <h4 className='menuItem'><a href='/contact' onClick={() => toggleMenu()}>Contact</a></h4>
            </nav>

        </>
    );
}