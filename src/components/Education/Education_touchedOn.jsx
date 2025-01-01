import * as THREE from 'three';
import { useEffect, useState } from 'react';
import '../Education/Education.css';
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";



import {logo_react, logo_android, logo_assembly, logo_c_, logo_css, logo_figma, logo_html, logo_java, logo_javascript, logo_junit, logo_python, logo_sql} from "../../constants/index.js"
import { useGSAP } from '@gsap/react';



const Education_touchedOn = () => {
    //sets cordinates of x and y based on window height and width. Also a random number between 0 and 6.2 for rotation(its in radians not degrees)
    const cube_cords = [
        [window.innerWidth * 0.015, window.innerHeight * -0.013, Math.floor(Math.random() * 6.3)],
        [window.innerWidth * -0.005, window.innerHeight * -0.01, Math.floor(Math.random() * 6.3)],
        [window.innerWidth * -0.013, window.innerHeight * -0.014, Math.floor(Math.random() * 6.3)],
        [window.innerWidth * -0.011, window.innerHeight * -0.005, Math.floor(Math.random() * 6.3)],
        [window.innerWidth * -0.012, window.innerHeight * 0.009, Math.floor(Math.random() * 6.3)],
        [window.innerWidth * -0.008, window.innerHeight * 0.015, Math.floor(Math.random() * 6.3)],
        [window.innerWidth * 0.01, window.innerHeight * 0.01, Math.floor(Math.random() * 6.3)],
        [window.innerWidth * -0.001, window.innerHeight * 0.005, Math.floor(Math.random() * 6.3)],
        [window.innerWidth * 0.012, window.innerHeight * -0.001, Math.floor(Math.random() * 6.3)],
        [window.innerWidth * 0.01, window.innerHeight * -0.011, Math.floor(Math.random() * 6.3)],
        [window.innerWidth * 0.003, window.innerHeight * -0.016, Math.floor(Math.random() * 6.3)],
        [window.innerWidth * 0.005, window.innerHeight * -0.00, Math.floor(Math.random() * 6.3)]
    ]

    const images = [logo_react, logo_android, logo_assembly, logo_c_, logo_css, logo_figma, logo_html, logo_java, logo_javascript, logo_junit, logo_python, logo_sql]


    useEffect(() => {
        // Scene
        const scene = new THREE.Scene();
        scene.background = null; // Set the background to null for transparency

        // Texture Loader
        const textureLoader = new THREE.TextureLoader();
        const textures = images.map(image => {
            const texture = textureLoader.load(image);
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(1, 1); // Ensure the texture covers the entire face
            texture.encoding = THREE.sRGBEncoding; // Ensure correct color space
            texture.anisotropy = 16; // Improve texture quality
            return texture;
        });


        // Box Geometry
        const geometry = new THREE.BoxGeometry( Math.round(window.innerWidth/500) , Math.round(window.innerWidth/500), Math.round(window.innerWidth/500));
        
/*
        const geometry = new THREE.BoxGeometry( Math.round(window.innerWidth/500) , Math.round(window.innerWidth/500), Math.round(window.innerWidth/500));
        const material0 = new THREE.MeshStandardMaterial({
            map: texture0,
            roughness: 0,
            opacity: 1,
            transparent: true
        });
        const material1 = new THREE.MeshStandardMaterial({
            map: texture1,
            roughness: 0,
            opacity: 1,
            transparent: true
        });
        simplification of the above is below in the images.map bit
*/
        
        
        const materials = images.map(image => new THREE.MeshStandardMaterial({
            map: textureLoader.load(image),
            roughness: 0,
            opacity: 0.6,
            transparent: true
        }));

        const cubes = materials.map(material => new THREE.Mesh(geometry, material));

        




        for (let i = 0; i < cube_cords.length; i++) {
            cubes[i].position.x = cube_cords[i][0];
            cubes[i].position.y = cube_cords[i][1];

            cubes[i].rotateX(cube_cords[i][2]);
        }



        scene.add(cubes[0]);
        scene.add(cubes[1]);
        scene.add(cubes[2]);
        scene.add(cubes[3]);
        scene.add(cubes[4]);
        scene.add(cubes[5]);
        scene.add(cubes[6]);
        scene.add(cubes[7]);
        scene.add(cubes[8]);
        scene.add(cubes[9]);
        scene.add(cubes[10]);
        scene.add(cubes[11]);

        //Light
        const light = new THREE.AmbientLight(0xe7f2f6, 100, 100)
        light.position.set(0, 10, 10)
        light.intensity = 4
        scene.add(light)

        //Sizes
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }


        // Camera
        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 40;
        scene.add(camera)

        // Renderer
        var canvas = document.getElementById('webgl')
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);//makes things look smoother
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera)

        
        //Resizing
        window.addEventListener('resize', () => {
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight
          
            camera.updateProjectionMatrix()
            camera.aspect = sizes.width / sizes.height
            renderer.setSize(sizes.width, sizes.height)// they must be in sync with camera aspect

            
        })



        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate the cubes



            for (let i = 0; i < cube_cords.length; i++) {
                cubes[i].rotation.x += 0.0005;
                cubes[i].rotation.y += 0.0005;

                
            }

            /*
            const radius = 65;
            const speed = 0.00001;
            const time = Date.now() * speed;

            camera.position.x = radius * Math.sin(time);
            camera.position.z = radius * Math.cos(time);
            camera.lookAt(scene.position);
            
            */
            // GSAP animation to reveal cubes one by one






            renderer.render(scene, camera);
        };

        animate();

        // Cleanup on component unmount
        return () => {
            renderer.dispose();
        };
    }, []);




    /*GSAP animation things here*/
    /*
    const scrollRef = useRef();// react related
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const elements = scrollRef.current.querySelectorAll('h1');
        elements.forEach((element, index) => {
            gsap.fromTo(element, 
                { opacity: 0 }, 
                { 
                    opacity: 1, 
                    scrollTrigger: {
                        trigger: element,
                        start: "top 70%",
                        end: "top 30%",
                        scrub: true
                    }
                }
            );
        });
    }, []);

    */

    const scrollRef = useRef();// react related
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const elements = scrollRef.current.querySelectorAll('h1');
        elements.forEach((element, index) => {
            gsap.fromTo(element, 
                { opacity: 0 }, 
                { 
                    opacity: 1, 
                    delay: index * 0.2, // Delay each element reveal
                    scrollTrigger: {
                        trigger: '#touched_on',
                        start: "top center",
                        end: "bottom center",
                        toggleActions: "play none none none"
                    }
                }
            );
        });

        gsap.to('#webgl', {
            opacity: 1,
            delay: 0.3,
            ease: "linear",
            duration: 0.8,
            scrollTrigger: {
                trigger: '#touched_on',
                start: "top center",
                end: "bottom center",
                toggleActions: "play none none none"
            }
        });
    }, []);


    return (
    <div style={{marginTop:"15vw"}}>

        
        <div style={{position: "relative" }}>
            <div className='webgl_text' ref={scrollRef}>
                <h1 id="touched_on" style={{color:"#38a9d6"}}>Touched on</h1>
                <h1 style={{color:"#55a9dc", padding:"0.2vw", paddingLeft:"3vw"}}>Python</h1>
                <h1 style={{color:"#6da9e0", padding:"0.2vw", paddingLeft:"3vw"}}>C</h1>
                <h1 style={{color:"#83a9e2", padding:"0.2vw", paddingLeft:"3vw"}}>HTML & CSS</h1>
                <h1 style={{color:"#97a8e2", padding:"0.2vw", paddingLeft:"3vw"}}>Java</h1>
                <h1 style={{color:"#a7a7e0", padding:"0.2vw", paddingLeft:"3vw"}}>Junit</h1>
                <h1 style={{color:"#b6a7de", padding:"0.2vw", paddingLeft:"3vw"}}>Javascript</h1>
                <h1 style={{color:"#c3a7da", padding:"0.2vw", paddingLeft:"3vw"}}>ASM</h1>
                <h1 style={{color:"#d0a8d5", padding:"0.2vw", paddingLeft:"3vw"}}>React</h1>
                <h1 style={{color:"#daa9cf", padding:"0.2vw", paddingLeft:"3vw"}}>Android Studio</h1>
                <h1 style={{color:"#e2aaca", padding:"0.2vw", paddingLeft:"3vw"}}>SQL</h1>
                <h1 style={{color:"#e9adc4", padding:"0.2vw", paddingLeft:"3vw"}}>Figma</h1>

                <h1 style={{color:"#e9adc4", padding:"0.2vw"}}>Always expanding on languages and frameworks</h1>

            </div>
            <canvas id="webgl"></canvas>
        </div>

    </div>
  )
}

export default Education_touchedOn