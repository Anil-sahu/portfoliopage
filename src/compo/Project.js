import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCode, faAward, faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import img1 from './../image/img1.jpg';
import img2 from './../image/img2.png';
import img3 from './../image/img3.jpg';
import img4 from './../image/img4.jpg';
import left from './../image/left.svg';
import right from './../image/right.svg';

const Project = () => {
    const image = [img1, img2, img3, img4];
    const [num, setNum] = useState(0);
    return (
        <div className='body'>
            <div className='nav-button'>
                <NavLink to='/'>
                    <FontAwesomeIcon icon={faHome} color='black' size='2x'></FontAwesomeIcon>
                    <p>Home</p>
                </NavLink>
                <NavLink to='/skill'>
                    <FontAwesomeIcon icon={faCode} color='black' size='2x'></FontAwesomeIcon><p>Skill</p>

                </NavLink>
                <NavLink to='/certificate'>
                    <FontAwesomeIcon icon={faAward} color='black' size='2x'></FontAwesomeIcon><p>Learn</p>

                </NavLink>
                <NavLink to='/project'>
                    <FontAwesomeIcon icon={faDiagramProject} color='black' size='2x'></FontAwesomeIcon>
                    <p>Project</p>

                </NavLink>


            </div>

            <div className='project-card'>
                <div className='project-title'>
                    <h1>Project title</h1>
                    <h4>used technology</h4>
                </div>
                <div className='about-broject'>
                    <div className='project-description'>
                        <p>
                            Reach your full addressable market from day one by targeting users in both ecosystems from a single codebase.
                            Unite your mobile development team resources towards building one seamless customer experience.
                            Release simultaneously on iOS and Android with feature parity for the best experience for all users.

                            Flutter empowers you to create tailored experiences for iOS and Android users without compromise and with fewer resources.
                        </p>
                    </div>
                    <div className='project-imge'>
                        <img src={image[num]}></img>
                        <div className='inc-dec'>
                            <img src={left} onClick={() => { if (num > 0) { setNum(num - 1) } }}></img>
                            {image.map((image) => { return "*" })}
                            <img src={right} onClick={() => { if (num < image.length - 1) { setNum(num + 1) } }}></img>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    );
}

export default Project;