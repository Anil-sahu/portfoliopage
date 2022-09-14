import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCode, faAward, faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import './../style/style.css';
import { NavLink } from 'react-router-dom'
const Navbutton = () => {
    return (
        <div className='nav-button'>
            <NavLink to='/'>
                <FontAwesomeIcon icon={faHome} color='black' className='icon-class'></FontAwesomeIcon>
                <p>Home</p>
            </NavLink>
            <NavLink to='/skill'>
                <FontAwesomeIcon icon={faCode} color='black' size='1x'></FontAwesomeIcon><p>Skill</p>

            </NavLink>
            <NavLink to='/certificate'>
                <FontAwesomeIcon icon={faAward} color='black' size='1x'></FontAwesomeIcon><p>Learn</p>

            </NavLink>
            <NavLink to='/project'>
                <FontAwesomeIcon icon={faDiagramProject} color='black' size='1x'></FontAwesomeIcon>
                <p>Project</p>

            </NavLink>


        </div>
    );
}

export default Navbutton;