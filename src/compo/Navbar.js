import React from 'react'
import Menubutton from './Menubutton';

const Navbar = () => {
    return (
        <>
            <nav className='nav-bar'>
                <Menubutton name="Home"></Menubutton>

                <Menubutton name="Skill" />

                <Menubutton name="Project" />

                <Menubutton name="Certificate" />

            </nav>


        </>
    );
}

export default Navbar;