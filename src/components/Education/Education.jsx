import {uofa_img, profile} from "../../constants/index.js"
import '../Education/Education.css';
import { useEffect, useState } from 'react';
import gsap from "gsap";



const Education = () => {

    useEffect(() => {
        //gsap.to(".uofa_img_border", { width: '93%', duration: 3.1, ease:"back.out", opacity:1 });

        
        gsap.to("#uofa_img_border", { width: '92%', duration: 3, ease:"back.out", delay: 1, opacity:1, onComplete: () => {
            gsap.to("#uofa_img_border", { width: '85%', duration: 8, ease: "sine.inOut", yoyo: true, repeat: -1 });
            gsap.to("#uofa_img_border", { width: '94%', duration: 8, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1 });
        }});

       
       
       
        //gsap.to("#uofa_div", { width: '90%', duration: 3, ease:"back.out", opacity:1 });


        gsap.to("#uofa_div", { width: '91%', duration: 3, ease:"back.out", delay: 1, opacity:1, onComplete: () => {
            gsap.to("#uofa_div", { width: '85%', duration: 6, ease: "sine.inOut", yoyo: true, repeat: -1 });
            gsap.to("#uofa_div", { width: '91%', duration: 6, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1 });
        }});




        if (window.innerWidth > 760) {
            gsap.to("#edu_card_container", { left: '9%', duration: 3, ease:"back.out", delay: 1 });
            gsap.to("#education_focus_card", { right: '5%', duration: 3, ease:"back.out", delay: 1 });

        }else{
            gsap.to("#edu_card_container", { left: '8%', duration: 2, ease:"ease" });
            gsap.to("#education_focus_card", { right: '12%', duration: 2, ease:"ease" });

        }

        
        
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 760) {
                gsap.to("#edu_card_container", { left: '9%', duration: 3, ease:"ease" });
                gsap.to("#education_focus_card", { right: '5%', duration: 3, ease:"ease" });

            }else{
                gsap.to("#edu_card_container", { left: '8%', duration: 2, ease:"ease" });
                gsap.to("#education_focus_card", { right: '12%', duration: 2, ease:"ease" });

            }
        };


        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);









    const grow_uofa = () => {

        gsap.to("#uofa_div", { opacity: 0.5 });
    };

    const normlize_uofa = () => {

        gsap.to("#uofa_div", { opacity: 1 });
    };






    return (
    <div id="Education">


        <div id="uofa_img_border"></div>

        <div>
            <div className="linear_gradient_uofa" id="uofa_div" onMouseEnter={grow_uofa} onMouseLeave={normlize_uofa}></div>

            <img className="uofa_img" src={uofa_img} alt="University of Alberta"/>
            <svg className="svg">{/*thanks to https://youtu.be/ybW7yUbOHN8?si=DC9LcMDlh42DWvin*/ }
                <clipPath id="clip_edu" clipPathUnits="objectBoundingBox"><path d="M0.727,0.487 C0.921,0.36,0.725,0.131,1,0.001 H0.001 V1 C0.001,0.915,0.152,0.917,0.227,0.952 C0.269,0.969,0.372,1,0.453,1 C0.534,1,0.603,0.991,0.655,0.952 C0.713,0.911,0.683,0.815,0.629,0.761 C0.561,0.694,0.659,0.531,0.727,0.487"></path></clipPath>
            </svg>

 

            <div id="edu_card_container">
                <div id="profile_card">
                    <div style={{ display: 'flex' }}>
                        <img className="profile_img" src={profile} alt="Nima Shariatzadeh"/>
                        <h1 style={{paddingLeft:"10px", color:"#fff"}}>Nima Shariatzadeh</h1>
                    </div>
                </div>

                <div id="edu_card">
                    <h1 style={{color:"var(--blue2)"}}>University of Alberta</h1>
                    <h2>Bachelor of Science, Computing Science-Major </h2>
                </div>

            </div>


            <div id="education_focus_card">
                <h1>With a focus on <p>Front-end Development</p></h1>
            </div>

 
        </div>
        

 

    </div>
    )
    }

export default Education