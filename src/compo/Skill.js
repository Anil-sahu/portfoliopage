import React from 'react'
import Progress from './Progress';
import Flutter from './../image/flutter.svg';
import Dart from './../image/dart.svg';
import Html from './../image/html.svg';
import Css from './../image/css.svg';
import JS from './../image/JS.svg';
import Boostrap from './../image/Boostrap.svg';
import ReactJs from './../image/logo.svg';
import Java from './../image/java.svg';
import MySql from './../image/mysql.svg';
import Firebase from './../image/firebase.svg';
import Api from './../image/api.svg';
import Sass from './../image/sass.svg';
import NodeJs from './../image/node.svg';
import ExpressJS from './../image/expressjs.svg';
import Django from './../image/django.svg';
import Navbutton from './Navbutton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCode, faAward, faDiagramProject, faLink, faEye, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom'

const Skill = () => {

  var mykill = [{ skill: "Html, Html5", backColot: "orange", image: Html },
  { skill: "css,css3", backColot: "blue", image: Css },
  { skill: "Boostartp, Boostrap", backColot: "#563d7c", image: Boostrap },
  { skill: "sass", backColot: "pink", image: Sass },
  { skill: "JavaScript", backColot: "yellow", image: JS },
  { skill: "React Js", backColot: "#c2f1fc", image: ReactJs },
  { skill: "Flutter", backColot: "#0553B1", image: Flutter },
  { skill: "Node Js", backColot: "#a9f8a2", image: NodeJs },
  { skill: "Express", backColot: "#68a063 ", image: ExpressJS },

  { skill: "Java", backColot: "#FA8072", image: Java },
  { skill: "dart", backColot: "#2e5bfb", image: Dart },
  { skill: "c language", backColot: "orange", image: Firebase },
  { skill: "cpp language", backColot: "orange", image: Firebase },
  { skill: "Api", backColot: "#023020", image: Api },
  { skill: "Json", backColot: "orange", image: Firebase },
  { skill: "Firebase", backColot: "orange", image: Firebase },
  { skill: "DJango", backColot: "#381818", image: Django },
  { skill: "MongoDB", backColot: "#008080", image: Firebase },
  { skill: "Firebase", backColot: "orange", image: Firebase },
  { skill: "MySql", backColot: "orange", image: MySql },];
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
        <div className='skill-card'>

          {
            mykill.map((skills) =>
              <div className='skill' style={{ backgroundColor: skills.backColot }}>
                <div className='skill-cont'>
                  <img src={skills.image} alt='' className='skill-image'></img>
                  <div className='skill-progress'>
                    <Progress bgcolor="skyblue" progress='70' height={30} />



                  </div>

                </div>

                <div className='skill-bottom'>
                  <div className='skill-name'>{skills.skill}</div>
                  <div className='skill-more-info'>
                    <FontAwesomeIcon icon={faCertificate} color="grey" className='facode'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faCode} color="grey" className='facode'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faLink} color="grey" className='facode'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faEye} color="grey" className='facode'></FontAwesomeIcon>
                  </div>
                </div>

              </div>
            )
          }

        </div>
      </div>

    </>
  );
}

export default Skill;