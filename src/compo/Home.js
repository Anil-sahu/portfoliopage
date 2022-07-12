import React from 'react';
import Profile from './../image/profile.png';
import Contact from './Contact';
import Phone from './../image/phone.svg';
import Email from './../image/mail.svg';
import Linkdin from './../image/linkedin.svg';
import Github from './../image/github.svg';
import Navbutton from './Navbutton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCode, faAward, faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
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
        <div className='skill-card home'>
          <div className='home-page'>
            <div className='intro'>
              <h2>Hi! I'm Anil.</h2>
              <p>You might be familiar with the reference symbol, which allows you to reference a parent element as such:</p>
            </div>
            <div className='profile'>
              <img src={Profile} alt="My profile"></img>
            </div>


          </div>
          <div className='contact-box'>
            <Contact icon={Phone} mobile="+9176103568" />
            <Contact icon={Email} mobile="111anilsahu" />
            <Contact icon={Linkdin} mobile="Click and go linkeding" />
            <Contact icon={Github} mobile="Github Account" />
          </div>
        </div>
      </div>


    </>
  );
}

export default Home;