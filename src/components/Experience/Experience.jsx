import {code} from "../../constants/index.js"
import '../Experience/Experience.css';
import { useEffect, useState } from 'react';
import gsap from "gsap";

const Experience = () => {    

    useEffect(() => {
    
        gsap.to("#experience_img_border", { height: '98%', duration: 3, ease:"back.out", delay: 1, opacity:1, onComplete: () => {
            gsap.to("#experience_img_border", { scaleY: '1.1', duration: 11, ease: "sine.inOut", yoyo: true, repeat: -1 });
            gsap.to("#experience_img_border", { scaleY: '1.19', duration: 11, ease: "sine.inOut", yoyo: true, repeat: -1});
        }});
    
    
        gsap.to("#linear_gradient_experience", { height: '100%', duration: 3, ease:"back.out", delay: 1, opacity:1, onComplete: () => {
            gsap.to("#linear_gradient_experience", { scaleY: '1.11', duration: 8, ease: "sine.inOut", yoyo: true, repeat: -1 });
            gsap.to("#linear_gradient_experience", { scaleY: '1.22', duration: 8, ease: "sine.inOut", yoyo: true, repeat: -1});
        }});


        if (window.innerWidth > 760) {
          gsap.to("#experience_headerCard_container", { left: '80px', duration: 3, ease:"back.out", delay: 1 });

          
        }else{
            gsap.to("#experience_headerCard_container", { left: '9%', duration: 2, ease:"ease" });

        }
    
    
    }, []);
    
      
    useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth > 760) {
        gsap.to("#experience_headerCard_container", { left: '80px', duration: 3, ease:"ease" });

        
        }else{
            gsap.to("#experience_headerCard_container", { left: '9%', duration: 2, ease:"ease" });
        }
        
    };


    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
    }, []);


    const fade_experience = () => {
        gsap.to("#linear_gradient_experience", { opacity: 0.5 });
    };
    
    const normlize_experience = () => {
        gsap.to("#linear_gradient_experience", { opacity: 1 });
    };
    
  
    return (





    <div id='Experience' style={{marginTop: "35vw"}}>
        
        <div style={{position: "relative"}}>
            <div id="experience_img_border"></div>

            <div id="linear_gradient_experience" onMouseEnter={fade_experience} onMouseLeave={normlize_experience}></div>

            <img id="experience_img" src={code} alt="RenewWool"/>
            <svg className="svg">{/*thanks to https://youtu.be/ybW7yUbOHN8?si=DC9LcMDlh42DWvin*/ }
                <clipPath id="clip_experience" clipPathUnits="objectBoundingBox"><path d="M0.002,0.005 C0.185,0.011,0.323,-0.047,0.389,0.131 C0.456,0.309,0.468,0.192,0.558,0.262 C0.648,0.331,0.628,0.357,0.654,0.448 C0.681,0.539,0.712,0.483,0.712,0.483 C0.712,0.483,0.771,0.353,0.818,0.448 C0.865,0.544,0.949,0.426,0.881,0.309 C0.812,0.192,0.936,0.192,0.936,0.192 L1,0.153 V0.869 C1,0.869,0.943,0.869,0.915,0.821 C0.887,0.773,0.881,0.748,0.875,0.809 C0.869,0.869,0.841,0.821,0.818,0.847 C0.794,0.874,0.781,0.867,0.773,0.93 C0.765,0.993,0.724,1,0.703,0.978 C0.683,0.93,0.666,1,0.651,0.969 C0.636,0.93,0.624,0.978,0.606,0.93 C0.589,0.882,0.589,0.926,0.565,0.898 C0.541,0.869,0.54,0.865,0.528,0.898 C0.516,0.93,0.508,0.91,0.498,0.93 C0.488,0.95,0.451,0.963,0.441,0.93 C0.432,0.898,0.398,0.882,0.389,0.869 C0.38,0.857,0.362,0.847,0.362,0.847 C0.362,0.847,0.341,0.806,0.321,0.785 C0.3,0.763,0.301,0.761,0.287,0.785 C0.274,0.809,0.251,0.789,0.244,0.763 C0.237,0.737,0.19,0.711,0.179,0.737 C0.169,0.763,0.172,0.789,0.154,0.763 C0.135,0.737,0.131,0.734,0.115,0.785 C0.098,0.835,0.092,0.886,0.061,0.847 C0.029,0.809,0.045,0.869,0.019,0.847 C-0.008,0.826,0.002,0.847,0.002,0.847 V0.005"></path></clipPath>
            </svg>
            <div id="experience_headerCard_container">
                <h1>Dates and Occupations -<p> Professional & Volunteer Experience</p></h1>
            </div>
        </div>

        <div style={{marginTop: "13vw"}}>
            <div className="experience_item">
                <h3>University of Alberta</h3>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <h1>Undergraduate Teaching Assistant</h1>
                    <p style={{marginTop:"12px", opacity:"0.6"}}>January 2024 - January 2025</p>
                </div>
                <ul className="list">
                    <li className="lists">
                        Interact with students in assistance to their coursework while evaluating and providing feedback to student work
                    </li>
                    <li>
                        Meet with supervisors to discuss students' grades or to complete required grade-related paperworky
                    </li>
                </ul>

            </div>
        </div>

        <div style={{marginTop: "25px"}}>
            <div className="experience_item">
                <h3>University of Alberta</h3>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <h1>2024 iGEM Wiki Lead</h1>
                    <p style={{marginTop:"12px", opacity:"0.6"}}>April 2024 – October 2024</p>
                </div>
                <ul className="list">
                    <li className="lists">
                        Design and produce a novel wiki to display scientific results for the 2024 University of Alberta entry
                    </li>
                    <li>
                        Communicate with groups of other disciplines to meet past and new requriements
                    </li>
                </ul>

            </div>
        </div>



    </div>



  )
}

export default Experience