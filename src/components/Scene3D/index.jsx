'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader.js';
import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js';

import styles from './styles.module.scss';

const Scene3D = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let container, clock;
    let camera, scene, renderer, mac, effect;

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', onDocumentMouseMove);

    // Initialize the scene
    function init() {
      container = containerRef.current;

      camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000);

      const landscape = window.innerWidth / window.innerHeight > 1;
      const positionSet = landscape ? 5 : 13;

      //camera.position.set(5, 2, 5);
      //camera.position.set(10, 7, 10);
      //I created a simples calculation to adjust the size of my 3D Macintosh so it is visible on mobile
      camera.position.set(positionSet, positionSet - 3, positionSet);
      camera.lookAt(0, 3, 0);

      scene = new THREE.Scene();

      clock = new THREE.Clock();

      // Loading manager
      const loadingManager = new THREE.LoadingManager();

      //When loading is done
      loadingManager.onLoad = () => {
        // onProgress(100);

        mac.rotation.x = -Math.PI / 2; // Adjust orientation if needed
        mac.rotation.z = 0; // Adjust rotation if needed
        scene.add(mac);
      };

      // Collada loader
      const loader = new ColladaLoader(loadingManager);
      loader.load('/models/mac/mac.dae', (collada) => {
        // onProgress(100);
        mac = collada.scene;
      });

      // Handle the loading progress
      // loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
      //   const currentProgress = Math.round((itemsLoaded / itemsTotal) * 100);
      //   onProgress(currentProgress);
      // };

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
      directionalLight.position.set(1, 1, 0).normalize();
      scene.add(directionalLight);

      // Renderer
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);

      effect = new AsciiEffect(renderer, ' .-+*%#@&', {
        invert: false,
        resolution: 0.25,
      });
      effect.setSize(window.innerWidth, window.innerHeight);
      effect.domElement.style.color = '#ffffffaf';
      //effect.domElement.style.backgroundColor = 'white';

      container.appendChild(effect.domElement);

      // Resize listener
      window.addEventListener('resize', onWindowResize);

      // Animation loop
      renderer.setAnimationLoop(animate);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      effect.setSize(window.innerWidth, window.innerHeight);
    }

    function onDocumentMouseMove(event) {
      mouseX = (event.clientX - window.innerWidth / 2) / 100;
      mouseY = (event.clientY - window.innerHeight / 2) / 100;
    }

    function animate() {
      render();
    }

    function render() {
      const delta = clock.getDelta();

      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;

      camera.lookAt(scene.position);

      if (mac !== undefined) {
        mac.rotation.z += delta * 0.5;
      }

      //renderer.render(scene, camera);
      effect.render(scene, camera);
    }

    // Initialize the scene
    init();

    // Cleanup on component unmount
    return () => {
      // onProgress(0); // Reset progress when component unmounts
      window.removeEventListener('resize', onWindowResize);
      if (containerRef.current) {
        containerRef.current.removeChild(effect.domElement);
      }
    };
  }, []);

  return (
    <div className={styles.scene}>
      <div ref={containerRef} style={{ width: '100%', height: '100vh', textShadow: 'none' }} />
    </div>
  );
};

export default Scene3D;
