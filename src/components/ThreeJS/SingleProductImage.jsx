// // src/components/ThreeJS/ThreeImageViewer.jsx
// import React, { useRef, useEffect } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { sRGBEncoding } from "three"; // avoids runtime export issues in some three.js versions

// /**
//  * Props:
//  * - imageUrl (string) : URL of the image to display as a texture
//  * - width / height (optional) : preferred size (component will be responsive)
//  * - background (optional) : background color (default transparent)
//  */
// export default function SingleProductImage({
//     imageUrl,
//     background = null,
//     width = "100%",
//     height = "60vh",
// }) {
//     const containerRef = useRef(null);
//     const rendererRef = useRef(null);
//     const frameIdRef = useRef(null);

//     useEffect(() => {
//         if (!containerRef.current) return;

//         // Scene, camera, renderer
//         const scene = new THREE.Scene();
//         if (background) {
//             scene.background = new THREE.Color(background);
//         }

//         const container = containerRef.current;
//         const rect = container.getBoundingClientRect();
//         const aspect = rect.width / Math.max(rect.height, 1);

//         const camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
//         camera.position.set(0, 0, 2); // camera back slightly

//         const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//         renderer.setPixelRatio(window.devicePixelRatio || 1);
//         renderer.setSize(rect.width, rect.height, false);
//         // use named export to avoid the "sRGBEncoding not found on THREE" error
//         renderer.outputEncoding = sRGBEncoding;

//         // append canvas
//         container.appendChild(renderer.domElement);
//         rendererRef.current = renderer;

//         // Lights
//         const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1.0);
//         hemi.position.set(0, 1, 0);
//         scene.add(hemi);

//         const dir = new THREE.DirectionalLight(0xffffff, 0.6);
//         dir.position.set(2, 2, 2);
//         scene.add(dir);

//         // Geometry: a plane with the image as texture
//         const geometry = new THREE.PlaneGeometry(1.6, 1); // will look good for most product shots
//         const loader = new THREE.TextureLoader();

//         // For nicer color handling, set texture.encoding
//         loader.load(
//             imageUrl,
//             (texture) => {
//                 texture.encoding = sRGBEncoding;
//                 texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
//                 texture.needsUpdate = true;

//                 const material = new THREE.MeshStandardMaterial({
//                     map: texture,
//                     metalness: 0,
//                     roughness: 0.6,
//                 });

//                 const plane = new THREE.Mesh(geometry, material);
//                 scene.add(plane);

//                 // small subtle tilt for 3D feel
//                 plane.rotation.x = -0.05;
//                 plane.rotation.y = 0.05;
//             },
//             undefined,
//             (err) => {
//                 console.error("Texture load error:", err);
//             }
//         );

//         // Add a very subtle environment / ground reflection (optional)
//         const groundGeo = new THREE.PlaneGeometry(10, 10);
//         const groundMat = new THREE.ShadowMaterial({ opacity: 0.05 });
//         const ground = new THREE.Mesh(groundGeo, groundMat);
//         ground.rotation.x = -Math.PI / 2;
//         ground.position.y = -1.0;
//         scene.add(ground);

//         // Controls
//         const controls = new OrbitControls(camera, renderer.domElement);
//         controls.enableDamping = true;
//         controls.dampingFactor = 0.08;
//         controls.minDistance = 1.1;
//         controls.maxDistance = 5;
//         controls.maxPolarAngle = Math.PI / 2; // prevent going below ground
//         controls.rotateSpeed = 0.6;
//         controls.zoomSpeed = 0.8;
//         controls.enablePan = false;

//         // Resize handler
//         const handleResize = () => {
//             if (!container) return;
//             const r = container.getBoundingClientRect();
//             camera.aspect = Math.max(r.width, 1) / Math.max(r.height, 1);
//             camera.updateProjectionMatrix();
//             renderer.setSize(r.width, r.height, false);
//         };
//         window.addEventListener("resize", handleResize);

//         // Simple render loop
//         const animate = () => {
//             controls.update();
//             renderer.render(scene, camera);
//             frameIdRef.current = requestAnimationFrame(animate);
//         };
//         animate();

//         // Cleanup on unmount
//         return () => {
//             cancelAnimationFrame(frameIdRef.current);
//             window.removeEventListener("resize", handleResize);
//             controls.dispose();
//             renderer.dispose();
//             // dispose scene children / geometries / textures properly
//             scene.traverse((obj) => {
//                 if (obj.isMesh) {
//                     if (obj.geometry) obj.geometry.dispose();
//                     if (obj.material) {
//                         if (Array.isArray(obj.material)) {
//                             obj.material.forEach((m) => {
//                                 if (m.map) m.map.dispose();
//                                 m.dispose();
//                             });
//                         } else {
//                             if (obj.material.map) obj.material.map.dispose();
//                             obj.material.dispose();
//                         }
//                     }
//                 }
//             });
//             if (container && renderer.domElement) {
//                 container.removeChild(renderer.domElement);
//             }
//         };
//     }, [imageUrl, background]);

//     return (
//         <div
//             ref={containerRef}
//             style={{
//                 width,
//                 height,
//                 display: "block",
//                 position: "relative",
//                 overflow: "hidden",
//             }}
//         />
//     );
// }
// src/components/ThreeJS/SingleProductImage.jsx
import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

/**
 * Simpler, safer version:
 * - Does NOT reference THREE.sRGBEncoding or THREE.SRGBColorSpace (avoids build errors).
 * - Centers & scales models using Box3.
 * - Uses useTexture without forcing encoding (most three versions handle textures OK).
 */

function Model({ modelUrl, autoRotate = true }) {
  const ref = useRef();
  const gltf = useGLTF(modelUrl, true);

  useEffect(() => {
    if (!gltf || !gltf.scene) return;
    const scene = gltf.scene;

    // compute bounding box and center/scale model
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = maxDim > 0 ? 2 / maxDim : 1;

    scene.scale.setScalar(scale);
    const center = box.getCenter(new THREE.Vector3());
    scene.position.x -= center.x;
    scene.position.y -= center.y;
    scene.position.z -= center.z;

    // clone to avoid mutating cached scene
    if (ref.current && ref.current.children.length === 0) {
      const cloned = scene.clone(true);
      ref.current.add(cloned);
    }

    return () => {
      if (ref.current) {
        ref.current.traverse((obj) => {
          if (obj.isMesh) {
            if (obj.geometry) obj.geometry.dispose();
            if (obj.material) {
              if (Array.isArray(obj.material)) {
                obj.material.forEach((m) => {
                  if (m.map) m.map.dispose();
                  m.dispose();
                });
              } else {
                if (obj.material.map) obj.material.map?.dispose();
                obj.material.dispose();
              }
            }
          }
        });
      }
    };
  }, [gltf]);

  useFrame((_, delta) => {
    if (autoRotate && ref.current) {
      ref.current.rotation.y += delta * 0.35;
    }
  });

  return <group ref={ref} />;
}

function ImagePlane({ imageUrl }) {
  // useTexture caches and usually sets sensible defaults
  const texture = useTexture(imageUrl);

  // NOTE: we purposely DON'T set texture.encoding here to avoid referencing
  // symbols that may not exist in newer three releases.
  // If you later pin three to a version that supports sRGBEncoding, you can set it.

  return (
    <mesh>
      <planeGeometry args={[2.0, 2.0]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

function FitCameraToContent({ padding = 1.2 }) {
  const { camera, scene } = useThree();
  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    if (!box.isEmpty()) {
      const size = box.getSize(new THREE.Vector3()).length();
      const center = box.getCenter(new THREE.Vector3());
      const distance = Math.max(size * padding, 2);
      camera.position.set(center.x, center.y, distance);
      camera.lookAt(center);
      camera.updateProjectionMatrix();
    }
  }, [camera, scene, padding]);
  return null;
}

function LoaderOverlay({ message = "Loading 3D view..." }) {
  return (
    <Html center>
      <div
        style={{
          color: "#fff",
          background: "rgba(0,0,0,0.6)",
          padding: "10px 16px",
          borderRadius: 8,
          fontSize: 14,
        }}
      >
        {message}
      </div>
    </Html>
  );
}

export default function SingleProductImage({
  modelUrl,
  imageUrl,
  autoRotate = true,
  height = "60vh",
}) {
  const hasModel = Boolean(modelUrl);

  return (
    <div style={{ width: "100%", height, display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }} style={{ width: "100%", height: "100%" }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Suspense fallback={<LoaderOverlay />}>
          {hasModel ? (
            <Model modelUrl={modelUrl} autoRotate={autoRotate} />
          ) : imageUrl ? (
            <ImagePlane imageUrl={imageUrl} />
          ) : (
            <Html center>
              <div style={{ color: "#fff" }}>No 3D model or image available</div>
            </Html>
          )}

          <FitCameraToContent />
        </Suspense>

        <OrbitControls enablePan enableZoom enableRotate />
      </Canvas>
    </div>
  );
}
