import React from 'react'
import Phone from './../image/phone.svg';
import Down from './../image/down.svg'
import './../method/OnMouseEnter.js';

const Contact = (props) => {
  function show() {
    var element = document.getElementById("popup").style.display = 'block';
  }

  function hide() {
   document.getElementById("popup").style.display = 'none';
  }
  return (
    <>
      <div className='contactdetail'>
        <div className='contact-popup' id='popup'>
          <div className='num'>
            {props.mobile}
          </div>
          <img src={Down} alt="down" className='down'></img>
        </div>
        <img src={props.icon} alt='phone' onMouseOver={show} onMouseLeave={hide} className="phone-image"></img>
      </div>

    </>
  );
}

export default Contact;


