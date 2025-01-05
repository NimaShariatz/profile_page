import { useEffect, useState } from 'react';
import gsap from "gsap";

import '../Project/Project.css';

import {project_pic} from "../../constants/index.js"

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
    
    
    
    
    
    
      const grow_project = () => {
    
        gsap.to("#linear_gradient_project", { opacity: 0.5 });
      };
    
      const normlize_project = () => {
    
        gsap.to("#linear_gradient_project", { opacity: 1 });
      };
    
    
    
    
     
    
      return (
    
        <div style={{marginTop:"35vw"}}>

        <div style={{position: "relative"}}>
          <div id="project_img_border"></div>

          <div id="linear_gradient_project" onMouseEnter={grow_project} onMouseLeave={normlize_project}></div>
    
          <img id="project_img" src={project_pic} alt="RenewWool"/>
          <svg className="svg">{/*thanks to https://youtu.be/ybW7yUbOHN8?si=DC9LcMDlh42DWvin*/ }
              <clipPath id="clip_project" clipPathUnits="objectBoundingBox"><path d="M0.19,0.432 C0.109,0.541,0.117,0.406,0,0.451 V1 C0.074,0.956,0.223,1,0.316,0.92 C0.432,0.815,0.471,0.931,0.484,0.953 C0.511,0.983,0.608,0.948,0.679,0.973 C0.768,1,0.743,0.939,0.82,0.953 C0.882,0.964,0.966,0.866,1,0.815 V0.069 C0.967,0.033,0.874,-0.009,0.768,0.111 C0.636,0.26,0.665,-0.007,0.573,0.001 C0.48,0.01,0.495,0.486,0.432,0.385 C0.369,0.285,0.272,0.323,0.19,0.432"></path></clipPath>
          </svg>
          <div id="project_headerCard_container">
            <h1>Notable Projects <p> with various frameworks and languages</p></h1>
          </div>
        </div>

    
    
    
    
    
    
          <div className='grid_container'>

            <div className='a_project'>
              <img style={{borderRadius:"30px"}} src={project_pic} alt="University of Alberta"/>
              <h2 style={{paddingInline: "8px", paddingBlock: "10px"}}>ReneWool</h2>
              <p style={{paddingInline: "8px"}}>A project involving multiple disciplines, with the objective of the wiki 
                team being to produce a public website which serves to showcase the science team’s findings in a novel way.</p>
              <div style={{display:"flex", justifyContent: "space-between", paddingBlock:"30px"}}>
                <p>See Link</p>
                <a href='https://2024.igem.wiki/ualberta/home' className='project_link'>Check Live Site <svg viewBox="0 0 24 24"><path fill="currentColor" d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19z"/></svg></a>
              </div>
            </div>
            
            <div className='a_project'>2</div>
            <div className='a_project'>3</div>
            <div className='a_project'>4</div>

          </div>
    
    
        </div>
    
      )
    }
export default Project_sect