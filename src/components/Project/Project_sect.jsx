import { useEffect, useState } from 'react';
import gsap from "gsap";
import {start_width, start_height} from "../../constants/index.js"


import '../Project/Project.css';

import {project_pic, renewWool, upcycle, henning_logo} from "../../constants/index.js"

const Project_sect = () => {

    useEffect(() => {
    
        gsap.to("#project_img_border", { height: '100%', duration: 3, ease:"back.out", delay: 1, opacity:1, onComplete: () => {
            gsap.to("#project_img_border", { scaleY: '1.13', duration: 11, ease: "sine.inOut", yoyo: true, repeat: -1 });
            gsap.to("#project_img_border", { scaleY: '1.18', duration: 11, ease: "sine.inOut", yoyo: true, repeat: -1});
        }});
    
    
        gsap.to("#linear_gradient_project", { height: '100%', duration: 3, ease:"back.out", delay: 1, opacity:1, onComplete: () => {
            gsap.to("#linear_gradient_project", { scale: '1.13', duration: 8, ease: "sine.inOut", yoyo: true, repeat: -1 });
            gsap.to("#linear_gradient_project", { scale: '1.2', duration: 8, ease: "sine.inOut", yoyo: true, repeat: -1});
        }});


        if (start_width > 760) {
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
    
        <div id='Projects' style={{marginTop:"30vw"}}>

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


            <div className='a_project'>2025 IGEM Biology Project <br/>
              <a href='https://2025.igem.wiki/ualberta/' target='#blank' className='project_link'>&#40;In progress&#41; <svg viewBox="0 0 24 24"><path d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19z"/></svg></a>

            </div>


            <div className='a_project'>
              <img style={{borderRadius:"20px", width:"100%", height:"420px", objectFit:"cover", objectPosition:"bottom"}} src={henning_logo} alt="Henning the Navigator"/>
                <h2 style={{paddingInline: "8px", paddingTop: "18px"}}>Henning the Navigator</h2>
                <p style={{paddingInline: "8px", minHeight: "130px"}}>
                  A map navigation tool for the flight simulator IL-2 Sturmovik: Great Battles. Wavepoints on a map are set with distance, speed and heading which output 
                  a timed navigational path.
                </p>
                <div style={{display:"flex", justifyContent: "space-between", paddingBlock:"30px"}}>
                  <div style={{display:"flex"}} className='language_animate'>


                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className='language' style={{ zIndex:"1"}}><path fill="#00bcd4" d="M16 12c7.444 0 12 
                    2.59 12 4s-4.556 4-12 4s-12-2.59-12-4s4.556-4 12-4m0-2c-7.732 0-14 2.686-14 6s6.268 6 14 6s14-2.686 14-6s-6.268-6-14-6"/>
                    <path fill="#00bcd4" d="M16 
                    14a2 2 0 1 0 2 2a2 2 0 0 0-2-2"/><path fill="#00bcd4" d="M10.458 5.507c2.017 0 5.937 3.177 9.006 8.493c3.722 6.447 3.757 11.687 2.536 12.392a.9.9 0 0 
                    1-.457.1c-2.017 0-5.938-3.176-9.007-8.492C8.814 11.553 8.779 6.313 10 5.608a.9.9 0 0 1 .458-.1m-.001-2A2.87 2.87 0 0 0 9 3.875C6.13 5.532 6.938 12.304 
                    10.804 19c3.284 5.69 7.72 9.493 10.74 9.493A2.87 2.87 0 0 0 23 28.124c2.87-1.656 2.062-8.428-1.804-15.124c-3.284-5.69-7.72-9.493-10.74-9.493Z"/>
                    <path fill="#00bcd4" d="M21.543 5.507a.9.9 0 0 1 .457.1c1.221.706 1.186 5.946-2.536 12.393c-3.07 5.316-6.99 8.493-9.007 8.493a.9.9 0 0 
                    1-.457-.1C8.779 25.686 8.814 20.446 12.536 14c3.07-5.316 6.99-8.493 9.007-8.493m0-2c-3.02 0-7.455 3.804-10.74 9.493C6.939 19.696 6.13 26.468 
                    9 28.124a2.87 2.87 0 0 0 
                    1.457.369c3.02 0 7.455-3.804 10.74-9.493C25.061 12.304 25.87 5.532 23 3.876a2.87 2.87 0 0 0-1.457-.369"/>
                  </svg>

                                    
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className='language' style={{paddingTop: "6px", zIndex:"1"}}>
	                  <path fill="#e44f26" d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30z" />
                    <path fill="#f1662a" d="m16 27.858l8.17-2.265l1.922-21.532H16z" />
                    <path fill="#ebebeb" d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16zm0 8.027l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004z" />
                    <path fill="#fff" d="M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83zm0-6.256v3.091h7.466l.062-.694l.141-1.567l.074-.83z" />
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 128 128" className='language' style={{paddingTop: "6px", zIndex:"2"}}>
                    <path fill="#1572b6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543z" />
                    <path fill="#33a9dc" d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16z" />
                    <path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95z" />
                    <path fill="#ebebeb" d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018z" />
                    <path fill="#fff" d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881z" />
                    <path fill="#ebebeb" d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711z" />
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 128 128" className='language' style={{paddingTop: "6px", zIndex:"3"}}>
                    <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z" />
                    <path fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 0 1 7.82 4.5a20.6 20.6 0 0 1 3 4c0 .16-5.4 3.81-8.69 5.85c-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 0 0-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.6 4.6 0 0 0 .54 2.34c.83 1.73 2.38 2.76 7.24 4.86c8.95 3.85 12.78 6.39 15.16 10c2.66 4 3.25 10.46 1.45 15.24c-2 5.2-6.9 8.73-13.83 9.9a38.3 38.3 0 0 1-9.52-.1a23 23 0 0 1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9 9 0 0 1 1.15-.73L82 101l3.59-2.08l.75 1.11a16.8 16.8 0 0 0 4.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 0 0 .69-6.92c-1-1.39-3-2.56-8.59-5c-6.45-2.78-9.23-4.5-11.77-7.24a16.5 16.5 0 0 1-3.43-6.25a25 25 0 0 1-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.7 31.7 0 0 1 9.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49 49 0 0 1 .12-5.17C29.08 59 39 59 51 59h21.83z" />
                  </svg>

                    


                  </div>
                  <a href='https://nimashariatz.github.io/Henning-the-Navigator/' target='#blank' className='project_link'>Check Live Site <svg viewBox="0 0 24 24"><path d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19z"/></svg></a>
                </div>
            </div>




            <div className='a_project'>
              <img style={{borderRadius:"20px", width:"100%", height:"420px", objectFit:"cover", objectPosition:"top"}} src={renewWool} alt="University of Alberta"/>
              <h2 style={{paddingInline: "8px", paddingTop: "18px"}}>ReneWool</h2>
              <p style={{paddingInline: "8px", minHeight: "130px"}}>A project involving multiple disciplines, with the objective of the wiki 
                team being to produce a public website which serves to showcase the science team’s findings in a novel way.</p>
              <div style={{display:"flex", justifyContent: "space-between", paddingBlock:"30px"}}>
                <div style={{display:"flex"}} className='language_animate'>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className='language' style={{paddingTop: "6px", zIndex:"1"}}>
	                  <path fill="#e44f26" d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30z" />
                    <path fill="#f1662a" d="m16 27.858l8.17-2.265l1.922-21.532H16z" />
                    <path fill="#ebebeb" d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16zm0 8.027l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004z" />
                    <path fill="#fff" d="M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83zm0-6.256v3.091h7.466l.062-.694l.141-1.567l.074-.83z" />
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 128 128" className='language' style={{paddingTop: "6px", zIndex:"2"}}>
                    <path fill="#1572b6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543z" />
                    <path fill="#33a9dc" d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16z" />
                    <path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95z" />
                    <path fill="#ebebeb" d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018z" />
                    <path fill="#fff" d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881z" />
                    <path fill="#ebebeb" d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711z" />
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 72 72" className='language' style={{paddingTop: "6px", zIndex:"3"}}>
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
            






            <div className='a_project'>
              <img style={{borderRadius:"20px", width:"100%", height:"420px", objectFit:"cover", objectPosition:"left top"}} src={upcycle} alt="FoodUpcycling"/>
              <h2 style={{paddingInline: "8px", paddingTop: "18px"}}>FoodUpcycling - ROD</h2>
              <p style={{paddingInline: "8px", minHeight: "130px"}}>
                A community volunteer project with the aim of taking farmer donations and distributing them to beneficiaries in need by volunteers.
              </p>
              <div style={{display:"flex", justifyContent: "space-between", paddingBlock:"30px"}}>
                <div style={{display:"flex"}} className='language_animate'>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 128 128" className='language' style={{paddingTop: "6px", zIndex:"1"}}>
                    <path fill="#3fb6d3" d="M12.3 64.2L76.3 0h39.4L32.1 83.6zm64 63.8h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z"/>
                    <path fill="#27aacd" d="m81.6 93.9l-20-20l-19.4 19.6l19.4 19.6z"/><path fill="#19599a" d="M115.7 128L81.6 93.9l-20 19.2L76.3 128z"/>
                    <linearGradient id="deviconFlutter0" x1="59.365" x2="86.825" y1="116.36" y2="99.399" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#1b4e94"/>
                    <stop offset=".63" stopColor="#1a5497"/><stop offset="1" stopColor="#195a9b"/></linearGradient><path fill="url(#deviconFlutter0)" d="m61.6 113.1l30.8-8.4l-10.8-10.8z"/>
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className='language' style={{paddingTop: "6px", zIndex:"2"}}>
                    <path fill="#43a047" d="M22 2h4v4h-4zm0 8v12.13A3.88 3.88 0 0 1 18.13 26H18v4h.13A7.866 7.866 0 0 0 26 22.13V10Zm-8-8h4v20h-4z"/>
                    <path fill="#43a047" d="M11.838 12A2.165 2.165 0 0 1 14 14.162v4.955l-.77.257a5.03 5.03 0 0 1-2.812.108A3.19 3.19 0 0 1 8 16.384v-.547A3.84 3.84 0 0 1 11.838 12m0-4A7.84 7.84 0 0 0 4 15.837v.547a7.19 7.19 0 0 0 5.448 6.978a9.03 9.03 0 0 0 5.047-.194L18 22v-7.838A6.16 6.16 0 0 0 11.838 8"/>
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 128 128" className='language' style={{paddingTop: "6px", zIndex:"3"}}>
                    <defs><linearGradient id="deviconSqlite0" x1="-15.615" x2="-6.741" y1="-9.108" y2="-9.108" gradientTransform="rotate(90 -90.486 64.634)scale(9.2712)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#95d7f4"/>
                    <stop offset=".92" stopColor="#0f7fcc"/><stop offset="1" stopColor="#0f7fcc"/></linearGradient></defs><path fill="#0b7fcc" d="M69.5 99.176c-.059-.73-.094-1.2-.094-1.2S67.2 83.087 64.57 78.642c-.414-.707.043-3.594 1.207-7.88c.68 1.169 3.54 6.192 4.118 7.81c.648 1.824.78 2.347.78 2.347s-1.57-8.082-4.144-12.797a162 162 0 0 1 2.004-6.265c.973 1.71 3.313 5.859 3.828 7.3c.102.293.192.543.27.774l.074-.414c-.59-2.504-1.75-6.86-3.336-10.082c3.52-18.328 15.531-42.824 27.84-53.754H16.9c-5.387 0-9.789 4.406-9.789 9.789v88.57c0 5.383 4.406 9.789 9.79 9.789h52.897a119 119 0 0 1-.297-14.652"/>
                    <path fill="url(#deviconSqlite0)" d="M65.777 70.762c.68 1.168 3.54 6.188 4.117 7.809c.649 1.824.781 2.347.781 2.347s-1.57-8.082-4.144-12.797a165 165 0 0 1 2.004-6.27c.887 1.567 2.922 5.169 3.652 6.872l.082-.961c-.648-2.496-1.633-5.766-2.898-8.328c3.242-16.871 13.68-38.97 24.926-50.898H16.899a6.94 6.94 0 0 0-6.934 6.933v82.11c17.527-6.731 38.664-12.88 56.855-12.614c-.672-2.605-1.441-4.96-2.25-6.324c-.414-.707.043-3.597 1.207-7.879"/><path fill="#003956" d="M115.95 2.781c-5.5-4.906-12.164-2.933-18.734 2.899a44 44 0 0 0-2.914 2.859c-11.25 11.926-21.684 34.023-24.926 50.895c1.262 2.563 2.25 5.832 2.894 8.328c.168.64.32 1.242.442 1.754c.285 1.207.437 1.996.437 1.996s-.101-.383-.515-1.582c-.078-.23-.168-.484-.27-.773a8 8 0 0 0-.172-.434c-.734-1.703-2.765-5.305-3.656-6.867c-.762 2.25-1.437 4.36-2.004 6.265c2.578 4.715 4.149 12.797 4.149 12.797s-.137-.523-.782-2.347c-.578-1.621-3.441-6.64-4.117-7.809c-1.164 4.281-1.625 7.172-1.207 7.88c.809 1.362 1.574 3.722 2.25 6.323c1.524 5.867 2.586 13.012 2.586 13.012s.031.469.094 1.2a119 119 0 0 0 .297 14.651c.504 6.11 1.453 11.363 2.664 14.172l.828-.449c-1.781-5.535-2.504-12.793-2.188-21.156c.48-12.793 3.422-28.215 8.856-44.289c9.191-24.27 21.938-43.738 33.602-53.035c-10.633 9.602-25.023 40.684-29.332 52.195c-4.82 12.891-8.238 24.984-10.301 36.574c3.55-10.863 15.047-15.53 15.047-15.53s5.637-6.958 12.227-16.888c-3.95.903-10.43 2.442-12.598 3.352c-3.2 1.344-4.067 1.8-4.067 1.8s10.371-6.312 19.27-9.171c12.234-19.27 25.562-46.648 12.141-58.621"/>
                  </svg>




                </div>
                <a href='https://cmput401.ca/' target='#blank' className='project_link'>Check Portal <svg viewBox="0 0 24 24"><path d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19z"/></svg></a>
              </div>
            </div>






          </div>
    
    
        </div>
    
      )
    }
export default Project_sect