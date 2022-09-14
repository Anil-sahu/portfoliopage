import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCode, faAward, faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
// import img1 from './../image/img1.jpg';
// import img2 from './../image/img2.png';
// import img3 from './../image/img3.jpg';
// import img4 from './../image/img4.jpg';
import left from './../image/left.svg';
import right from './../image/right.svg';

const Project = () => {
    const image = [{ "title": "Dumy-1", "Technology": "Flutter,firebase", "desc": "Flutter empowers you to create tailored experiences for iOS and Android users without compromise and with fewer resources.", "img": ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTlHCr7BOdUot35S2rZRULzSLfgqRBgPBAi-PyZIcB9DIO9EbP6SbfRFqhkqFfOt5atFQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIHFpm_jj9Xa2XTe7gRa5PTsZjEvLtXVaAv5VCJgQwYHXWRv1itp5hXUfakVTeMq60Tcg&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7lJ9nUMbpw6fzmgV7MyQ3XFZIN3yVvHFrHI-o_ZmI8S-GhnX1x-n1sgyxSGrg5U-nfQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY81PYL1udsD33s2I23AISkBJLjrmJJNOHqiSi0dXq_Q8fsTnYbN4hFwUCxlaVZWZkWAM&usqp=CAU'] }, { "title": "Dummy-2", "Technology": "HTML, CSS,JAVASCRIPT, BOOSTRAP", "desc": "Flutter empowers you to create tailored experiences for iOS and Android users without compromise and with fewer resources.", "img": ['https://img.freepik.com/free-vector/various-screens-violet-public-transport-mobile-app_23-2148704862.jpg?w=2000', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PLp9-wuOic6tyHwOXtOwtewAjE3P04O6iqow5h6_Gi_HMzlo_1IkTQjwaw2krSoXmVo&usqp=CAU'] }, { "title": "Dummy-3", "Technology": "FLUTTER DART", "desc": "Flutter empowers you to create tailored experiences for iOS and Android users without compromise and with fewer resources.", "img": ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc36-oCmn4DdBKQ5QC1vwCmp2BWO0_465NzjJhRraTy2Cx-mFiQb1ZBr-gvApk6X3lPfM&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_yHWHt7N2eiN0YRVsTE_mTvuVQnHDbbn05Gl7X8rxGha9afjv3tiAaveL8sFuLQdxLwo&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxS_AYK0jjcLzp27X_5FzAsu-7pn5fbQ-dAncF9WXFsO2f8EUmb6UYbhmcCfvbeh_CPyY&usqp=CAU'] }, { "title": "Dummy-4", "Technology": "REACT NATIVE", "desc": "Flutter empowers you to create tailored experiences for iOS and Android users without compromise and with fewer resources.", "img": ['https://img.freepik.com/premium-vector/car-sharing-unique-design-kit-mobile-app-online-rent-car-order-screens-with-map-navigation-user-account-menu-car-booking-service-ui-ux-template-set-gui-responsive-mobile-application_9209-3171.jpg?w=1060'] }];
    const [num, setNum] = useState(0);
    const [proNum, setProImage] = useState(0);
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
                {/* <NavLink to='/certificate'>
                    <FontAwesomeIcon icon={faAward} color='black' size='1x'></FontAwesomeIcon><p>Learn</p>

                </NavLink> */}
                <NavLink to='/project'>
                    <FontAwesomeIcon icon={faDiagramProject} color='black' size='1x'></FontAwesomeIcon>
                    <p>Project</p>

                </NavLink>


            </div>

            <div className='project-card'>
                <div className='project-title'>
                    <h1> {image[num]["title"]}</h1>
                    <h4> {image[num]["Technology"]}</h4>
                </div>
                <div className='about-broject'>
                    <div className='project-description'>
                        <p>
                            {/* Reach your full addressable market from day one by targeting users in both ecosystems from a single codebase.
                            Unite your mobile development team resources towards building one seamless customer experience.
                            Release simultaneously on iOS and Android with feature parity for the best experience for all users.

                            Flutter empowers you to create tailored experiences for iOS and Android users without compromise and with fewer resources. */}
                            {image[num]["desc"]}
                            {num}
                            {proNum}
                        </p>
                    </div>
                    <div className='project-imge'>
                        <img src={image[num]['img'][proNum]} alt="Images"></img>
                        <div className='inc-dec'>
                            <img src={left} onClick={() => { if (proNum > 0) { setProImage(proNum - 1) } }}></img>
                            {image[num]['img'].map((image) => {
                                return <div className='img_bubble'></div>
                            })}
                            <img src={right} onClick={() => { if (proNum < image[num]['img'].length - 1) { setProImage(proNum + 1) } }}></img>
                        </div>

                    </div>
                </div>

                <div className="bubble_box">
                    <img src={left} onClick={() => { if (num > 0 && num <= image.length - 1) { setNum(num - 1); setProImage(0); } }} className="button_next" />
                    {image.map((project) => { return <div className='bubble'></div> })}
                    <img src={right} onClick={() => {
                        if (num < image.length - 1) { setNum(num + 1); setProImage(0); } else {
                            setNum(0);
                            setProImage(0);
                        }
                    }} className="button_next" />
                </div>


            </div>

        </div>
    );
}

export default Project;