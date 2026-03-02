<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const container = ref(null);

onMounted(() => {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 2, 6);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.value.appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

  const loader = new GLTFLoader();
  let model = null;

  loader.load('/assets/Robot.glb', (gltf) => {
    model = gltf.scene;
    model.scale.set(1.5, 1.5, 1.5); 
    scene.add(model);
  });

  const mouse = { x: 0, y: 0 };
  const onMouseMove = (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };
  window.addEventListener('mousemove', onMouseMove);

  const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  window.addEventListener('resize', onResize);
  let animationId = null

  const animate = () => {
    animationId = requestAnimationFrame(animate);

    if (model) {
      const maxYaw = Math.PI / 3; 

      const maxPitch = Math.PI / 9; 

      const targetY = mouse.x * maxYaw;
      const targetX = -mouse.y * maxPitch;

      model.rotation.y += (targetY - model.rotation.y) * 0.05;
      model.rotation.x += (targetX - model.rotation.x) * 0.05;
    }

    renderer.render(scene, camera);
  };
  animate();

  onUnmounted(() => {

    if (animationId !== null) {
        cancelAnimationFrame(animationId);
    }
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('resize', onResize);
    
    scene.traverse((child) => {
      if (child.isMesh) {
        child.geometry.dispose();
        if (child.material.isMaterial) {
          cleanMaterial(child.material);
        } else if (Array.isArray(child.material)) {
          for (const material of child.material) cleanMaterial(material);
        }
      }
    });

    function cleanMaterial(material) {
      material.dispose();
      if (material.map) material.map.dispose();
      if (material.lightMap) material.lightMap.dispose();
      if (material.bumpMap) material.bumpMap.dispose();
      if (material.normalMap) material.normalMap.dispose();
      if (material.specularMap) material.specularMap.dispose();
      if (material.envMap) material.envMap.dispose();
    }

    renderer.dispose();
    if (container.value && renderer.domElement) {
      container.value.removeChild(renderer.domElement);
    }
  });
});

const scrollToCharacter = () => {
  const element = document.getElementById('character');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <div class="main-wrapper">
    
    <div ref="container" class="canvas-container"></div>

    <div class="ui-layer">

      <main class="hero">
        <div class="hero-content">
          <h1>THE FUTURE</h1>
          <p>
            C1 BOT is the 2D generated image from Gemini that been create into 3D modeling.
            <br>Click below to more information.
          </p>
          
          <button class="cta-button" @click="$router.push('/character')">
            <a class="text-slate-800">Character</a>
          </button>
        </div> 
      </main>

    </div>
  </div>
</template>

<style scoped>
:global(body) {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  
  overflow-y: auto; 
  overflow-x: hidden; 
}

.main-wrapper {
  position: relative;
  width: 100vw;
  min-height: 100vh; 
  background-color: #0f172a;
  display: flex;
  flex-direction: column; 
}

.character {
  position: relative;
  width: 100vw;
  min-height: 100vh; 
  background-color: #293042;
  display: flex;
  flex-direction: column; 
}

.canvas-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.ui-layer {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%; 
  pointer-events: none; 
  display: flex;
  flex-direction: column;
}


.hero {
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: 3rem;
  margin-top: 0; 
  min-height: 100vh; 
  padding-top: 80px; 
}

.hero-content {
  pointer-events: auto;
  max-width: 600px;
}

.hero h1 {
  font-size: 5rem;
  line-height: 1;
  font-weight: 900;
  color: white;
  margin: 0 0 1rem 0;
  text-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.hero p {
  color: #dbeafe; 
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.cta-button {
  background-color: white;
  color: #1e3a8a; 
  border: none;
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  transition: transform 0.2s, box-shadow 0.2s;
}

.cta-button:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
}

</style>