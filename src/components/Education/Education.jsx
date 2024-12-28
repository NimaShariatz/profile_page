import {uofa_img} from "../../constants/index.js"
import '../Education/Education.css';
import { useEffect, useState } from 'react';
import gsap from "gsap";



const Education = () => {

    useEffect(() => {
        gsap.to(".uofa_img_border", { width: '93%', duration: 3.1, opacity: 1, ease:"back.out" });
        gsap.to("#uofa_div", { width: '90%', duration: 3, opacity: 1, ease:"back.out" });
    }, []);




    //if hovered on, set setIsHovered to true and change opacity
    const grow_uofa = () => {

        gsap.to("#uofa_div", { opacity: 0.5 });
    };
    //if leaving then, set setIsHovered to false and change opacity
    const noramlize_uofa = () => {

        gsap.to("#uofa_div", { opacity: 1 });
    };






    return (
    <div>


        <div className="uofa_img_border"></div>

        <div>
            <div className="linear_gradient_uofa" id="uofa_div" onMouseEnter={grow_uofa} onMouseLeave={noramlize_uofa}></div>

            <img className="uofa_img" src={uofa_img} alt="University of Alberta"/>
            <svg className="svg">{/*thanks to https://youtu.be/ybW7yUbOHN8?si=DC9LcMDlh42DWvin*/ }
                <clipPath id="clip" clipPathUnits="objectBoundingBox"><path d="M0.727,0.487 C0.921,0.36,0.725,0.131,1,0.001 H0.001 V1 C0.001,0.915,0.152,0.917,0.227,0.952 C0.269,0.969,0.372,1,0.453,1 C0.534,1,0.603,0.991,0.655,0.952 C0.713,0.911,0.683,0.815,0.629,0.761 C0.561,0.694,0.659,0.531,0.727,0.487"></path></clipPath>
            </svg>
            <div className="clipped"></div>
        </div>
        


    </div>
    )
    }

export default Education