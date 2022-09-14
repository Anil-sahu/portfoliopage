import React from 'react';
import Profile from './../image/profile.png';
import Contact from './Contact';
import Phone from './../image/phone.svg';
import Email from './../image/mail.svg';
import Linkdin from './../image/linkedin.svg';
import Github from './../image/github.svg';
import Navbutton from './Navbutton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCode, faAward, faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom'
import Slideshow from './slideshow';

const Home = () => {
  return (
    <>
      <div className='body'>
        <div className='nav-button'>
          <NavLink to='/'>
            <FontAwesomeIcon icon={faUser} color='black' size='1x'></FontAwesomeIcon>
            <p>Intro</p>
          </NavLink>
          <NavLink to='/skill'>
            <FontAwesomeIcon icon={faCode} color='black' size='1x'></FontAwesomeIcon><p>Skill</p>

          </NavLink>
          {/* <NavLink to='/certificate'>
            <FontAwesomeIcon icon={faAward} color='black' size='1x'></FontAwesomeIcon><p>Learn</p> */}

          {/* </NavLink> */}
          <NavLink to='/project'>
            <FontAwesomeIcon icon={faDiagramProject} color='black' size='1x'></FontAwesomeIcon>
            <p>Project</p>

          </NavLink>


        </div>
        <div className='skill-card home'>
          <div className='home-page'>

            <div className='intro'>
              <div className="heading2"> HELLO! I'M ANIL
                {/* .<strong>&</strong> I'M A DEVELOPER. */}
              </div>,

              {/* <div className="heading3">Developer, FLutter Framework, Firebase,.<br></br> Dart programming language, Java programming Language,<br></br> HTML&HTML5, CSS&CSS3,SASS, javaScript, RestApi</div>, */}
              <p className="paragraph">I'm a Flutter Android Application developer and web Developer, but still exploring other technologies and frameworks that catch my interest!if you're looking for a developer to add to your team, I'd love to hear from you</p>

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