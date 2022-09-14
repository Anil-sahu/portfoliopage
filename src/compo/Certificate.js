import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCode, faAward, faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom'
const Certificate = () => {
    return (
        <div className='body'>
            <div className='nav-button'>
                <NavLink to='/'>
                    <FontAwesomeIcon icon={faHome} color='black' size='1x'></FontAwesomeIcon>
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

            <div className="skill-card home">
                <h1>Certificate</h1>
                
            </div>

        </div>
    );
}

export default Certificate;