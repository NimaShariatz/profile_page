import { useEffect, useState } from 'react';
import gsap from "gsap";

import '../Project/Project.css';

import {project_pic, renewWool} from "../../constants/index.js"

const Project_sect = () => {

    useEffect(() => {
    
        gsap.to("#project_img_border", { height: '98%', duration: 3, ease:"back.out", delay: 1, opacity:1, onComplete: () => {
            gsap.to("#project_img_border", { scaleY: '1.1', duration: 11, ease: "sine.inOut", yoyo: true, repeat: -1 });
            gsap.to("#project_img_border", { scaleY: '1.18', duration: 11, ease: "sine.inOut", yoyo: true, repeat: -1});
        }});
    
    
        gsap.to("#linear_gradient_project", { height: '100%', duration: 3, ease:"back.out", delay: 1, opacity:1, onComplete: () => {
            gsap.to("#linear_gradient_project", { scale: '1.1', duration: 8, ease: "sine.inOut", yoyo: true, repeat: -1 });
            gsap.to("#linear_gradient_project", { scale: '1.2', duration: 8, ease: "sine.inOut", yoyo: true, repeat: -1});
        }});


        if (window.innerWidth > 760) {
          gsap.to("#project_headerCard_container", { left: '80px', duration: 3, ease:"back.out", delay: 1 });

          
        }else{
            gsap.to("#project_headerCard_container", { left: '9%', duration: 2, ease:"ease" });

          }
    
    
      }, []);
    
      
      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 760) {
            gsap.to("#project_headerCard_container", { left: '80px', duration: 3, ease:"ease" });

            
          }else{
              gsap.to("#project_headerCard_container", { left: '9%', duration: 2, ease:"ease" });
          }
          
        };
    
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
    
    
    
    
    
      const fade_project = () => {
    
        gsap.to("#linear_gradient_project", { opacity: 0.5 });
      };
    
      const normlize_project = () => {
    
        gsap.to("#linear_gradient_project", { opacity: 1 });
      };
    
    
    
    
     
    
      return (
    
        <div id='Projects' style={{marginTop:"35vw"}}>

          <div style={{position: "relative"}}>
            <div id="project_img_border"></div>

            <div id="linear_gradient_project" onMouseEnter={fade_project} onMouseLeave={normlize_project}></div>
      
            <img id="project_img" src={project_pic} alt="RenewWool"/>
            <svg className="svg">{/*thanks to https://youtu.be/ybW7yUbOHN8?si=DC9LcMDlh42DWvin*/ }
                <clipPath id="clip_project" clipPathUnits="objectBoundingBox"><path d="M0.19,0.432 C0.109,0.541,0.117,0.406,0,0.451 V1 C0.074,0.956,0.223,1,0.316,0.92 C0.432,0.815,0.471,0.931,0.484,0.953 C0.511,0.983,0.608,0.948,0.679,0.973 C0.768,1,0.743,0.939,0.82,0.953 C0.882,0.964,0.966,0.866,1,0.815 V0.069 C0.967,0.033,0.874,-0.009,0.768,0.111 C0.636,0.26,0.665,-0.007,0.573,0.001 C0.48,0.01,0.495,0.486,0.432,0.385 C0.369,0.285,0.272,0.323,0.19,0.432"></path></clipPath>
            </svg>
            <div id="project_headerCard_container">
              <h1>Notable Projects <p> with Various Frameworks and Languages</p></h1>
            </div>
          </div>

    
    
    
    
    
    
          <div className='grid_container'>

            <div className='a_project'>
              <img style={{borderRadius:"20px"}} src={renewWool} alt="University of Alberta"/>
              <h2 style={{paddingInline: "8px", paddingTop: "18px"}}>ReneWool</h2>
              <p style={{paddingInline: "8px"}}>A project involving multiple disciplines, with the objective of the wiki 
                team being to produce a public website which serves to showcase the science team’s findings in a novel way.</p>
              <div style={{display:"flex", justifyContent: "space-between", paddingBlock:"30px"}}>
                <div style={{display:"flex"}}>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className='language' style={{paddingTop: "6px", zIndex:"1"}}>
	                  <path fill="#e44f26" d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30z" />
                    <path fill="#f1662a" d="m16 27.858l8.17-2.265l1.922-21.532H16z" />
                    <path fill="#ebebeb" d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16zm0 8.027l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004z" />
                    <path fill="#fff" d="M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83zm0-6.256v3.091h7.466l.062-.694l.141-1.567l.074-.83z" />
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 128 128" className='language' style={{paddingTop: "6px", zIndex:"2", transform:"translateX(-7px)"}}>
                    <path fill="#1572b6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543z" />
                    <path fill="#33a9dc" d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16z" />
                    <path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95z" />
                    <path fill="#ebebeb" d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018z" />
                    <path fill="#fff" d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881z" />
                    <path fill="#ebebeb" d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711z" />
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 72 72" className='language' style={{paddingTop: "6px", zIndex:"3", transform:"translateX(-14px)"}}>
                    <path fill="#fcea2b" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965" />
                    <g fill="none" stroke="#000" strokeLinejoin="round">
                      <path strokeWidth="2" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965Z" />
                      <path strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4.453" d="M53.82 41.34c-.456-1.777-2.429-3.11-4.793-3.11c-2.703 0-4.893 1.743-4.893 3.896c0 2.151 2.191 3.896 4.893 3.896l-.1.013c2.703 0 4.893 1.745 4.893 3.896c0 2.153-2.191 3.896-4.893 3.896c-2.364 0-4.337-1.336-4.793-3.112" clipRule="evenodd" />
                      <path strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4.456" d="M36.74 38.23v10.03a5.568 5.568 0 0 1-9.296 4.139" clipRule="evenodd" />
                    </g>
                  </svg>



                </div>
                <a href='https://2024.igem.wiki/ualberta/home' target='#blank' className='project_link'>Check Live Site <svg viewBox="0 0 24 24"><path d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19z"/></svg></a>
              </div>
            </div>
            
            <div className='a_project'>In progress...</div>
            <div className='a_project'>In progress...</div>
            <div className='a_project'>In progress...</div>

          </div>
    
    
        </div>
    
      )
    }
export default Project_sect