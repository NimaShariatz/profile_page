import * as THREE from 'three';
import { useEffect, useState } from 'react';
import '../Education/Education.css';
import gsap from "gsap";


const Education_touchedOn = () => {


    useEffect(() => {
        // Scene
        const scene = new THREE.Scene();

        // Box Geometry
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube1 = new THREE.Mesh(geometry, material);
        const cube2 = new THREE.Mesh(geometry, material);
        
        // Position the second cube beside the first one
        cube2.position.x = 2;

        scene.add(cube1);
        scene.add(cube2);

        // Camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('.webgl') });
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate the cubes
            cube1.rotation.x += 0.001;
            cube1.rotation.y += 0.001;
            cube2.rotation.x += 0.001;
            cube2.rotation.y += 0.001;

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