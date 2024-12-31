import * as THREE from 'three';
import { useEffect, useState } from 'react';
import '../Education/Education.css';
import gsap from "gsap";

import {logo_react} from "../../constants/index.js"



const Education_touchedOn = () => {


    useEffect(() => {
        // Scene
        const scene = new THREE.Scene();
        scene.background = null; // Set the background to null for transparency

        // Texture Loader
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load(logo_react);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1, 1); // Ensure the texture covers the entire face
        texture.encoding = THREE.sRGBEncoding; // Ensure correct color space
        texture.anisotropy = 16; // Improve texture quality


        // Box Geometry
        const geometry = new THREE.BoxGeometry( (window.innerWidth/500) , (window.innerWidth/500), (window.innerWidth/500));
        const material = new THREE.MeshStandardMaterial({
            map: texture,
            roughness: 0,
            opacity: 1,
            transparent: true
        });


        const cube1 = new THREE.Mesh(geometry, material);
        const cube2 = new THREE.Mesh(geometry, material);
        
        // Position the second cube beside the first one
        cube1.position.x = window.innerWidth * 0.005;
        cube2.position.x = 0;


        scene.add(cube1);
        scene.add(cube2);

        //Light
        const light = new THREE.AmbientLight(0xffffff, 100, 100)
        light.position.set(0, 10, 10)
        light.intensity = 5
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
        var canvas = document.querySelector('.webgl')
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
            cube1.rotation.x += 0.001;
            cube1.rotation.y += 0.001;

            cube2.rotation.x += 0.002;
            cube2.rotation.y += 0.002;

            renderer.render(scene, camera);
        };

        animate();

        // Cleanup on component unmount
        return () => {
            renderer.dispose();
        };
    }, []);




    
    
    
    
    return (
    <div>

        

        <div style={{background:"transparent"}}>

            <h1>Touched on</h1>
            <h1>Python</h1>
            <h1>C</h1>
            <h1>HTML & CSS</h1>
            <h1>Java</h1>
            <h1>Junit</h1>
            <h1>Javascript</h1>
            <h1>ASM</h1>
            <h1>React</h1>
            <h1>Android Studio</h1>
            <h1>SQL</h1>
            <h1>Figma</h1>
        </div>

        <canvas className="webgl"></canvas>


    </div>
  )
}

export default Education_touchedOn