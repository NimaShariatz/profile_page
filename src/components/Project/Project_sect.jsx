import { useEffect, useState } from 'react';
import gsap from "gsap";

import '../Project/Project.css';

import {project_pic} from "../../constants/index.js"

const Project_sect = () => {

    useEffect(() => {
    
        gsap.to("#project_img_border", { height: '98%', duration: 3, ease:"back.out", delay: 1, opacity:1, onComplete: () => {
            gsap.to("#project_img_border", { height: '91%', duration: 8, ease: "sine.inOut", yoyo: true, repeat: -1 });
            gsap.to("#project_img_border", { height: '98%', duration: 8, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1 });
        }});
    
    
        gsap.to("#project_div", { height: '95%', duration: 3, ease:"back.out", delay: 1, opacity:1, onComplete: () => {
            gsap.to("#project_div", { height: '85%', duration: 6, ease: "sine.inOut", yoyo: true, repeat: -1 });
            gsap.to("#project_div", { height: '95%', duration: 6, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1 });
        }});
    
    
      }, []);
    
      
      useEffect(() => {
        const handleResize = () => {
          console.log("z")
          
        };
    
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
    
    
    
    
    
      const grow_project = () => {
    
        gsap.to("#project_div", { opacity: 0.5 });
      };
    
      const normlize_project = () => {
    
        gsap.to("#project_div", { opacity: 1 });
      };
    
    
    
    
     
    
      return (
    
        <div style={{marginTop:"35vw"}}>
          <div id="project_img_border"></div>
        
          <div className="linear_gradient_project" id="project_div" onMouseEnter={grow_project} onMouseLeave={normlize_project}></div>
    
          <img className="project_img" src={project_pic} alt="University of Alberta"/>
          <svg className="svg">{/*thanks to https://youtu.be/ybW7yUbOHN8?si=DC9LcMDlh42DWvin*/ }
              <clipPath id="clip_project" clipPathUnits="objectBoundingBox"><path d="M0.19,0.432 C0.109,0.541,0.117,0.406,0,0.451 V1 C0.074,0.956,0.223,1,0.316,0.92 C0.432,0.815,0.471,0.931,0.484,0.953 C0.511,0.983,0.608,0.948,0.679,0.973 C0.768,1,0.743,0.939,0.82,0.953 C0.882,0.964,0.966,0.866,1,0.815 V0.069 C0.967,0.033,0.874,-0.009,0.768,0.111 C0.636,0.26,0.665,-0.007,0.573,0.001 C0.48,0.01,0.495,0.486,0.432,0.385 C0.369,0.285,0.272,0.323,0.19,0.432"></path></clipPath>
          </svg>
          <div className="clipped"></div>
    
    
    
    
    
    
          <div className='grid_container'>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
    
    
        </div>
    
      )
    }
export default Project_sect